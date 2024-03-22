import Image from "next/image";
import Link from "next/link";
import { Button } from "./components";

export default function Home() {
  return (
    <>
      <header className="md:mx-[187px] mx-[50px] md:h-[70px] h-[50px]  flex items-center sm:justify-between justify-center">
        <div>
          <Image
            src={`/banner/duolingo.svg`}
            alt="duolingo"
            width="179"
            height="42"
          />
        </div>

        <div className="text-[#afafaf] font-[600] text-[17px] hidden sm:block">
          <button className="cursor-pointer select-none flex gap-2 items-center ">
            SITE LANGUAGE: ENGLISH
            <Image
              src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/c6eae48dd48246c89e415b89f9e55282.svg"
              alt="duolingo"
              className="-mt-1"
              width="17"
              height="17"
            />
          </button>
        </div>
      </header>

      <main className="md:mx-[187px] mx-[50px] py-12 ">
        <div className="md:flex gap-10 items-center justify-between">
          <div className="w-full md:w-1/2">
            <Image
              src={`/banner/duolingo1.png`}
              alt="duolingo"
              className="mx-auto"
              width="450"
              height="450"
            />
          </div>

          <div className="w-full md:w-1/2 text-center">
            <h1 className="text-[#4b4b4b] font-[700] text-[28px]">
              The free, fun, and effective way to learn a language!
            </h1>

            <div className="flex flex-col gap-4 mt-10 ">
              <Link href="#">
                <Button
                  bgColor="bg-[#58cc02]"
                  textColor="text-white"
                  className="border-b-4 w-full md:w-3/4 border-[#58a700] relative text-[15px] uppercase font-[700] letter-spacing-[0.5px] tracking-[0.5px] px-5 hover:bg-[#60e000]"
                  font-duolingo-700
                >
                  Get started
                </Button>
              </Link>

              <Link href="#">
                <Button
                  bgColor="bg-white"
                  textColor="text-[#1cb0f6]"
                  className="border-2 border-b-4 w-full md:w-3/4 border-gray-300 relative text-[15px] uppercase font-[700] letter-spacing-[0.5px] tracking-[0.5px] px-5 hover:bg-gray-200"
                  font-duolingo-700
                >
                  I ALREADY HAVE AN ACCOUNT
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
