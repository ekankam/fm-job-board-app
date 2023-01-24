import { motion } from "framer-motion";
import Image from "next/image";
import { Post } from "tyings";

export default function PostCard({
  postedAt,
  contract,
  position,
  company,
  location,
  logo,
  logoBackgroundColor,
}: Post) {
  return (
    <motion.article
      className="w-[350px] bg-secondary-white rounded-md pt-[49px] px-4 pb-8 dark:bg-primary-dark-blue relative group cursor-pointer shadow-sm min-w-xs"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
    >
      <div
        style={{ backgroundColor: logoBackgroundColor }}
        className="flex items-center justify-center w-[50px] h-[50px] absolute -top-6 left-8 rounded-[15px]"
      >
        <Image
          alt={company}
          src={logo}
          width={30}
          height={20}
          objectFit="contain"
        />
      </div>

      <div className="flex items-center justify-start mb-[13px]">
        <p className="text-16 text-secondary-dark-gray">{postedAt}</p>
        <span className="inline-block w-1 h-1 mx-3 rounded-full bg-secondary-dark-gray" />
        <p className="capitalize text-16 text-secondary-dark-gray">
          {position}
        </p>
      </div>
      <h3 className="text-20 text-primary-dark-blue font-bold mb-[17px] dark:text-secondary-white group-hover:text-secondary-dark-gray transition-all ease-in-out capitalize">
        {contract}
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
