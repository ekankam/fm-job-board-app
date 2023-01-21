import { useState } from "react";
import HeadTag from "@/components/Head";
import Switch from "@/ui/Switch";
import Button from "@/ui/Button";

function Home() {
  const [isClicked, setIsClicked] = useState(false);
  console.log(isClicked);
  return (
    <div>
      <HeadTag tag="Home" />
      <main className="min-h-screen h-full max-w-[1440px] w-full mx-auto font-normal">
        <Switch />
        <div className="m-6">
          <Button
            label="company site"
            onClick={() => setIsClicked(!isClicked)}
            variant="primary"
            type="button"
          />
        </div>
      </main>
    </div>
  );
}

export default Home;
