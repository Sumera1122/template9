import Aboutus from "@/components/aboutus/page";
import Bar from "@/components/bar/page";
import Header from "@/components/header/page";
import Hero from "@/components/hero/page";


export default function Home() {
  return (
    <div className="bg-black  sm:w-[100%] md:w-[100%]  lg:w-[1920px] lg:h-[8479px] relative">
    <Bar/>
    <Header/>
    <Hero />
    <Aboutus/>

    </div>
  );
}
