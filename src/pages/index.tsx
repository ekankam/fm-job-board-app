import HeadTag from "@/components/Head";
import Switch from "@/ui/Switch";

export default function Home() {
  return (
    <div>
      <HeadTag tag="Home" />
      <main className="bg-custom-gray-200 dark:bg-dark-blue min-h-screen h-full max-w-[1440px] w-full mx-auto">
        <Switch />
      </main>
    </div>
  );
}
