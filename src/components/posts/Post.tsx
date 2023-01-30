import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { PostProps } from "tyings";

export default function Post({
  company,
  contract,
  location,
  logo,
  logoBackgroundColor,
  position,
  postedAt,
  slug,
}: PostProps) {
  return (
    <Link href={`/${slug?.current}`}>
      <motion.article
        className="post-container"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.9 }}
      >
        <div
          style={{ backgroundColor: logoBackgroundColor }}
          className="post-logo"
        >
          <Image
            alt={company}
            src={logo}
            width={30}
            height={20}
            objectFit="contain"
          />
        </div>

        <div className="flex items-center justify-start mb-[13px] flex-wrap">
          <p className="text-16 text-secondary-dark-gray">{postedAt}</p>
          <span className="inline-block w-1 h-1 mx-3 rounded-full bg-secondary-dark-gray" />
          <p className="capitalize text-16 text-secondary-dark-gray">
            {position}
          </p>
        </div>
        <h3 className="post-contract">{contract}</h3>
        <p className="capitalize text-16 text-secondary-dark-gray mb-11">
          {company}
        </p>
        <h4 className="font-bold capitalize text-14 text-primary-violet">
          {location}
        </h4>
      </motion.article>
    </Link>
  );
}
