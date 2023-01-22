import HeadTag from "@/components/HeadTag";
import Home from "./Home";

export default function Layout() {
  return (
    <div>
      <HeadTag tag="devjobs | Home" />
      <main className="min-h-screen h-full max-w-[1440px] w-full mx-auto font-normal min-w-[375px] xs-screen:overflow-x-auto">
        <Home />
      </main>
    </div>
  );
}
