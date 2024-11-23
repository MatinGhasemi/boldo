import Image from "next/image";
import Navbar from "./components/navbar";
import url from "@/production";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <Image className="absolute top-0 right-0 -z-10" src={`${url}Ellipse 9.png`} width={600} height={600} alt="background-circle"/>
        <Image className="absolute top-0 w-full h-[700px] sm:h-[500px] md:h-[600px] -z-20" src={`${url}Rectangle 1267.png`} width={1000} height={600} alt="background"/>
        <Navbar />
        <div className="mt-10 px-4 lg:px-16 flex justify-between items-center gap-2">
          <div className="text-white xl:w-1/2">
            <h1 className="text-2xl md:text-4xl">Save time by building dast with Boldo Template</h1>
            <p className="text-sm md:text-lg text-lightGray my-4">Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>
            <div className="flex gap-2 items-center">
              <p className="cursor-pointer text-sm rounded-2xl text-darkBlue bg-greenPalet px-7 py-2">But Template</p>
              <p className="cursor-pointer text-sm border border-white text-white rounded-2xl py-2 px-5">Explore</p>
            </div>
          </div>
          <div className="hidden sm:block">
            <Image className="sm:min-w-80 sm:h-52 md:max-w-[490px] md:h-full" src={`${url}hero graphics.png`} width={400} height={400} alt="hero graphics"/>
          </div>
        </div>
        <div className="p-6 sm:hidden">
          <Image className="w-full max-h-48" src={`${url}Group 256.png`} width={400} height={180} alt="Group 256"/>
        </div>
        <div className="flex justify-around gap-1  px-6 py-6 my-10 relative">
          <Image className="absolute left-0 right-0 top-0 w-full h-full" src={`${url}Rectangle 1288.png`} width={500} height={40} alt="Rectangle 1288"/>
          <div><Image className="w-20 lg:w-24 h-full" src={`${url}LogoW.png`} width={100} height={40} alt="Group 258"/></div>
          <div><Image className="w-20 lg:w-24 h-full" src={`${url}LogoWp.png`} width={100} height={40} alt="Group 261"/></div>
          <div><Image className="w-20 lg:w-24 h-full" src={`${url}LogoW.png`} width={100} height={40} alt="Group 259"/></div>
          <div><Image className="w-20 lg:w-24 h-full" src={`${url}LogoWp.png`} width={100} height={40} alt="Group 262"/></div>
          <div className="hidden sm:block"><Image className="w-20 lg:w-24 h-full" src={`${url}LogoW.png`} width={100} height={40} alt="Group 260"/></div>
          <div className="hidden sm:block"><Image className="w-20 lg:w-24 h-full" src={`${url}LogoWp.png`} width={100} height={40} alt="Group 263"/></div>
        </div>
      </div>
    </div>
  );
}
