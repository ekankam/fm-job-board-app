import HeadTag from "@/components/Head";
import PostCard from "@/ui/PostCard";
import Switch from "@/ui/Switch";

function Home() {
  return (
    <div>
      <HeadTag tag="Home" />
      <main className="min-h-screen h-full max-w-[1440px] w-full mx-auto font-normal">
        <Switch />
        <div className="m-6">
          <PostCard
            time="5h ago"
            position="full time"
            title="senior software developer"
            company="scoot"
            location="united kingdom"
          />
        </div>
      </main>
    </div>
  );
}

export default Home;
