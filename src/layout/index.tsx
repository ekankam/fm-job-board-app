import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { Icons } from "@/assets";
import Switch from "@/ui/Switch";
import Image from "next/image";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

function Header() {
  return (
    <header className="w-full h-[136px] md:h-40 xl:h-[162px] pt-8 px-6 bg-mobile-header md:bg-tablet-header lg:bg-desktop-header bg-cover relative">
      <nav className="w-full mx-auto flex justify-between lg:max-w-[1110px]">
        <Link href="/">
          <div className="relative w-[115px] h-8 cursor-pointer">
            <Image
              alt="devjobs"
              src={Icons.desktop.logoIcon}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
        <Switch />
      </nav>
    </header>
  );
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="min-w-[375px] max-w-[1440px] w-full min-h-screen mx-auto font-normal relative"
        key={router.route}
        initial="initailState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.75,
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          exitState: {
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          },
        }}
      >
        <Header />
        <main className="min-w-[340px] mx-auto">{children}</main>
      </motion.div>
    </AnimatePresence>
  );
}
