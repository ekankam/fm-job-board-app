import { post, slugs } from "@/lib/query";
import Button from "@/ui/Button";
import Image from "next/image";
import { PostDetailsProps } from "tyings";
import { sanityClient } from "utils/sanity/client";

type JobResponsibilityProps = {
  title: string;
  content: string;
  items: [];
  type?: string;
};

function JobResponsibility({
  title,
  content,
  items,
  type,
}: JobResponsibilityProps) {
  return (
    <div>
      <h3 className="mt-10 font-bold text-20 text-primary-dark-blue mb-7 dark:text-secondary-white">
        {title}
      </h3>
      <p className="mb-8 text-16 text-secondary-dark-gray">{content}</p>
      <div className="flex flex-col gap-7">
        {items.map((item: string, index: number) => (
          <div
            key={index}
            className="flex text-16 text-secondary-dark-gray gap-9"
          >
            {type === "requirements" ? (
              <span className="relative flex-shrink-0 w-1 h-1 rounded-full bg-secondary-dark-gray top-2 dark:bg-primary-violet" />
            ) : (
              <span className="font-bold text-primary-violet">{index + 1}</span>
            )}
            <p className="text-secondary-dark-gray">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

type FooterProps = {
  position: string;
  company: string;
  applicationLink: string;
};

function Footer({ position, company, applicationLink }: FooterProps) {
  return (
    <footer className="w-full rounded-md bg-secondary-white dark:bg-primary-dark-blue mt-[53px] p-6 mb-2 flex items-center justify-center absolute left-0 -bottom-[150px]">
      <div className="md:flex md:items-center md:justify-between w-[740px]">
        <div className="hidden md:block md:flex-1">
          <p className="mb-3 font-bold text-20 dark:text-secondary-white text-primary-dark-blue">
            {position}
          </p>
          <p className="text-16 text-secondary-dark-gray">{company}</p>
        </div>
        <Button
          type="button"
          label="Apply Now"
          href={applicationLink}
          variant="primary"
          className="w-full md:hidden"
        />
        <Button
          type="button"
          label="Apply Now"
          href={applicationLink}
          variant="primary"
          className="hidden md:block"
        />
      </div>
    </footer>
  );
}

export default function Post(props: PostDetailsProps) {
  const {
    logoBackgroundColor,
    company,
    logo,
    websiteLink,
    postedAt,
    position,
    contract,
    location,
    applicationLink,
    description,
    requirements,
    role,
    // eslint-disable-next-line no-unsafe-optional-chaining
  } = props?.data;

  return (
    <>
      <div className="md:max-w-[780px] mx-auto">
        <div className="absolute bg-secondary-white dark:bg-primary-dark-blue rounded-md h-[230px] top-28 left-1/2 -translate-x-1/2 md:h-[140px] md:flex w-[357px] md:w-[740px]">
          <div
            style={{ backgroundColor: logoBackgroundColor }}
            className="banner-logo md:hidden"
          >
            <Image
              alt={company}
              src={logo}
              width={30}
              height={20}
              objectFit="contain"
            />
          </div>
          <div
            style={{ backgroundColor: logoBackgroundColor }}
            className="hidden banner-logo md:flex md:items-center"
          >
            <Image
              alt={company}
              src={logo}
              width={60}
              height={60}
              objectFit="contain"
            />
          </div>
          <div className="flex flex-col items-center justify-center h-full md:flex-row md:ml-[180px] md:justify-between w-full">
            <div className="flex flex-col items-center">
              <p className="text-20 font-bold text-primary-dark-blue mb-[13px] mt-6 dark:text-secondary-white md:text-24">
                {company}
              </p>
              <p className="text-secondary-dark-gray mb-[27px] lowercase">{`${company}.com`}</p>
            </div>
            <Button
              type="button"
              label="Company Site"
              href={websiteLink}
              variant="secondary"
              className="md:mr-10"
            />
          </div>
        </div>
        <div className="h-full mt-[224px] rounded-md bg-secondary-white dark:bg-primary-dark-blue mx-6 py-10 px-6 md:mt-[130px]">
          <div className="flex flex-col gap-[50px] mb-8 md:flex-row md:justify-between md:items-center">
            <div>
              <div className="flex items-center">
                <p className="text-16 text-secondary-dark-gray">{postedAt}</p>
                <span className="inline-block w-1 h-1 mx-3 rounded-full bg-secondary-dark-gray" />
                <p className="capitalize text-16 text-secondary-dark-gray">
                  {contract}
                </p>
              </div>
              <p className="post-contract md:text-24 md:leading-[35px]">
                {position}
              </p>
              <p className="font-bold capitalize text-14 text-primary-violet">
                {location}
              </p>
            </div>
            <Button
              type="button"
              label="Apply Now"
              href={applicationLink}
              variant="primary"
            />
          </div>
          <p className="text-16 text-secondary-dark-gray">{description}</p>
          <JobResponsibility
            title="Requirements"
            content={requirements.content}
            items={requirements.items}
            type="requirements"
          />
          <JobResponsibility
            title="What You Will Do"
            content={role.content}
            items={role.items}
          />
        </div>
      </div>
      <Footer
        position={position}
        company={company}
        applicationLink={applicationLink}
      />
    </>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(slugs);

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context: {
  params: { slug?: "" | undefined };
}) {
  const { slug = "" } = context.params;
  const data = await sanityClient.fetch(post, { slug });
  return {
    props: {
      data,
    },
  };
}
