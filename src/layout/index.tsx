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
  return (
    <div className="min-w-[375px] max-w-[1440px] w-full min-h-screen mx-auto font-normal relative">
      <Header />
      <main className="min-w-[340px] mx-auto">{children}</main>
    </div>
  );
}
