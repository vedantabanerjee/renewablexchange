import Hero from "@/components/Hero";
import HeroCard from "@/components/HeroCard";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="relative h-full w-full bg-[url('/images/home_hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
        <div className="bg-black w-full h-full lg:bg-opacity-30">
          <Hero />
          <HeroCard />
        </div>
        <div className="relative">
          <div className="flex justify-center pb-5 ">
            <Link href="/dashboard">
              <button className="flex px-5 py-3 text-lg font-medium text-white bg-green-600 rounded-lg hover:bg-green-900 transition duration-300 ease-in-out shadow-lg">
                Go to the Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}