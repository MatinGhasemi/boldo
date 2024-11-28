import Image from "next/image";
import Navbar from "./components/navbar";
import url from "@/production";
import Services from "./components/services";
import Carousel from "./components/carousel";
import Office from "./components/office";
import Contact from "./components/contact";
import Footer from "./components/footer";

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
      <div className="mt-32">
        <p className="text-center text-sm text-lightLight">Our Services</p>
        <p className="text-lg mt-2 mb-6 w-80 mx-auto text-center">Handshake infographic mass market crowdfunding iteration.</p>
        <div className="space-y-5 sm:space-y-0 sm:flex sm:justify-center sm:flex-wrap sm:gap-x-10 md:gap-20 lg:gap-32 xl:gap-48 sm:gap-y-5">
          <div className="w-52 mx-auto lg:mx-0">
            <div><Image src={`${url}Rectangle 1270.png`} width={200} height={400} alt="png cover1"/></div>
            <div>
              <p>Cool Feature Title</p>
              <p className="text-lightLight">Learning curve network effects return on investment.</p>
              <div className="flex items-center gap-2 mt-2 border-b-2 w-fit border-darkBlue">
                <p className="text-darkBlue cursor-pointer">Explore Page</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#0A2640" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-52 mx-auto lg:mx-0">
            <div><Image src={`${url}Rectangle 1271.png`} width={200} height={400} alt="png cover2"/></div>
            <div>
              <p>Even Cooler Feature</p>
              <p className="text-lightLight">Learning curve network effects return on investment.</p>
              <div className="flex items-center gap-2 mt-2 border-b-2 w-fit border-darkBlue">
                <p className="text-darkBlue cursor-pointer">Explore Page</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#0A2640" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-52 mx-auto lg:mx-0">
            <div><Image src={`${url}Rectangle 1272.png`} width={200} height={400} alt="png cover3"/></div>
            <div>
              <p>Cool Feature Title</p>
              <p className="text-lightLight">Learning curve network effects return on investment.</p>
              <div className="flex items-center gap-2 mt-2 border-b-2 w-fit border-darkBlue">
                <p className="text-darkBlue cursor-pointer">Explore Page</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#0A2640" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <Carousel />
      <Office />
      <Contact />
      <Footer />
    </div>
  );
}
