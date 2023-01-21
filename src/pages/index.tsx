import HeadTag from "@/components/Head";
import Switch from "@/ui/Switch";

function Home() {
  return (
    <div>
      <HeadTag tag="Home" />
      <main className="min-h-screen h-full max-w-[1440px] w-full mx-auto font-normal">
        <Switch />
        <div className="m-6">this is it.</div>
      </main>
    </div>
  );
}

export default Home;
