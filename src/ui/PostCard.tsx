import { motion } from "framer-motion";
import Logo from "./Logo";
import { Icons } from "@/assets";

type PostCardProps = {
  time: string;
  position: string;
  title: string;
  company: string;
  location: string;
};

export default function PostCard({
  time,
  position,
  title,
  company,
  location,
}: PostCardProps) {
  return (
    <motion.article
      className="max-w-[350px] bg-secondary-white rounded-md pt-[49px] px-8 pb-8 w-full dark:bg-primary-dark-blue relative group cursor-pointer shadow-sm"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
    >
      <Logo
        alt="Scoot Company logo"
        icon={Icons.logos.scoot}
        className="w-[50px] h-[50px] rounded-[15px] bg-[#E99210] absolute -top-6 left-8"
        iconWidth={39.98}
        iconHeight={11.42}
      />
      <div className="flex items-center justify-start mb-[13px]">
        <p className="text-16 text-secondary-dark-gray">{time}</p>
        <span className="inline-block w-1 h-1 mx-3 rounded-full bg-secondary-dark-gray" />
        <p className="capitalize text-16 text-secondary-dark-gray">
          {position}
        </p>
      </div>
      <h3 className="text-20 text-primary-dark-blue font-bold mb-[17px] dark:text-secondary-white group-hover:text-secondary-dark-gray transition-all ease-in-out capitalize">
        {title}
      </h3>
      <p className="capitalize text-16 text-secondary-dark-gray mb-11">
        {company}
      </p>
      <h4 className="font-bold capitalize text-14 text-primary-violet">
        {location}
      </h4>
    </motion.article>
  );
}
