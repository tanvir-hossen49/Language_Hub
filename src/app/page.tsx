import Image from "next/image";
import { Button } from "./components";
import localFont from "next/font/local";

const myFont = localFont({
  src: [
    {
      path: "../../public/font/duolingoFont1.woff2",
      weight: "700",
    },
  ],
  variable: "--font-roboto-mono",
});

export default function Home() {
  return (
    <header className="mx-[187px] h-[70px] flex items-center justify-between">
      <div>
        <Image
          src={`/banner/duolingo.svg`}
          alt="duolingo"
          width="179"
          height="42"
        />
      </div>
      <div>
        <Button
          bgColor="bg-[#58cc02]"
          textColor="text-white"
          className="text-[15px] font-bold"
        >
          Get started
        </Button>
      </div>
    </header>
  );
}
