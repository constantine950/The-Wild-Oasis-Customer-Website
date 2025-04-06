import Image from "next/image";
import Link from "next/link";
import bggg from "@/public/bg.png";

export default function Home() {
  return (
    <main className="mt-[50%] sm:mt-[35%] md:mt-[25%] lg:mt-[20%] xl:mt-[15%]">
      <Image
        src={bggg}
        className=" object-cover object-top"
        placeholder="blur"
        quality={80}
        fill
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-4 text-primary-800 sm:text-lg lg:text-xl font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
