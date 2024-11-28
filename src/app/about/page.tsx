import Image from "next/image";
import Navbar from "../components/navbar";
import url from "@/production";
import Contact from "../components/contact";
import Footer from "../components/footer";

const About = () => {
    return ( 
        <div className="overflow-hidden">
            <div className="bg-lightDarkBlue">
                <Navbar />
                <div className="text-center pb-28 pt-10 sm:pb-32 sm:pt-14 lg:px-24 md:px-16 xl:px-36">
                    <p className="text-lightGray">About</p>
                    <p className="text-white text-2xl my-2 sm:text-4xl sm:w-[400px] sm:mx-auto">We love to make great things, things that matter</p>
                    <p className="text-lightGray text-sm sm:w-[550px] sm:mx-auto">Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>
                </div>
            </div>
            <div className="relative w-[200px] mx-auto -top-16">
                <Image className="" src={`${url}woman_lg.png`} width={200} height={600} alt="img-about3"/>
                <div className="absolute bottom-0 -right-24 sm:-right-44"><Image className="w-[160px] rounded-2xl h-[140px] object-cover" src={`${url}man.png`} width={200} height={300} alt="img-about1"/></div>
                <div className="hidden sm:block absolute top-0 -left-16 sm:-left-44"><Image className="w-[160px] rounded-2xl h-[140px] object-cover" src={`${url}Rectangle 1270.png`} width={200} height={300} alt="img-about2"/></div>
                <div className="hidden sm:block absolute top-0 -right-16 sm:-right-44"><Image className="w-[160px] rounded-2xl h-[140px] object-cover" src={`${url}Rect.png`} width={200} height={300} alt="img-about4"/></div>
                <div className="absolute -left-24 bottom-0 sm:-left-44"><Image className="w-[160px] rounded-2xl h-[140px] object-cover" src={`${url}Rectangle 1274.png`} width={200} height={300} alt="img-about5"/></div>
            </div>
            <div className="layout max-w-[1200px] mx-auto mb-14">
                <p className="text-lightLight text-sm">Our story</p>
                <p className="text-2xl md:text-3xl my-3">Handshake infographic mass market crowdfunding iteration.</p>
                <p className="text-lightLight text-sm">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer. </p>
            </div>
            <div className="bg-lightDarkBlue py-12">
                <div className="layout text-center">
                    <p className="text-lightGray text-sm">Our numbers</p>
                    <p className="text-white text-xl sm:text-3xl mt-2 mb-5">Handshake infographic mass market crowdfunding iteration.</p>
                    <div className="space-y-6 sm:space-y-0 sm:flex sm:justify-between md:justify-around">
                        <div>
                            <p className="text-lighPrimary text-4xl">120m</p>
                            <p className="text-lightGray text-sm">Cool feature title</p>
                        </div>
                        <div>
                            <p className="text-lighPrimary text-4xl">10.000</p>
                            <p className="text-lightGray text-sm">Cool feature title</p>
                        </div>
                        <div>
                            <p className="text-lighPrimary text-4xl">240</p>
                            <p className="text-lightGray text-sm">Cool feature title</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="layout max-w-[1200px] mx-auto mb-10">
                <div className="my-8">
                    <p className="text-lightLight text-sm">Our team</p>
                    <p className="my-2 text-2xl">The Leadership team</p>
                    <p className="text-lightLight text-sm">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. </p>
                </div>
                <div className="flex gap-5 justify-around">
                    <div>
                        <div><Image src={`${url}Image6.png`} width={200} height={300} alt="team1"/></div>
                        <div className="my-2">
                            <p>Dwight Schrute</p>
                            <p className="text-sm text-lightLight">General Manager</p>
                        </div>
                    </div>
                    <div>
                        <div><Image src={`${url}Image5.png`} width={200} height={300} alt="team2"/></div>
                        <div className="my-2">
                            <p>Pam Beetsley</p>
                            <p className="text-sm text-lightLight">General Manager</p>
                        </div>
                    </div>
                    <div className="hidden sm:block">
                        <div><Image src={`${url}Image4.png`} width={200} height={300} alt="team3"/></div>
                        <div className="my-2">
                            <p>Michael Scott</p>
                            <p className="text-sm text-lightLight">General Manager</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-lightDarkBlue text-white">
                <div className="layout pt-10 pb-16 max-w-[1000px] mx-auto">
                    <div className="my-8">
                        <p className="text-lightGray text-sm opacity-90">Our values</p>
                        <p className="my-3 text-2xl">Things in we believe</p>
                        <p className="text-lightGray text-sm opacity-90">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row items-center gap-5">
                            <div><Image className="w-52 h-36 sm:h-28 object-cover rounded-2xl" src={`${url}Rect.png`} width={150} height={150} alt="values"/></div>
                            <div className="space-y-2 text-center sm:text-left">
                                <p>We are commited</p>
                                <p className="text-lightGray opacity-90">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-5">
                            <div><Image className="w-52 h-36 sm:h-28 object-cover rounded-2xl" src={`${url}Rectangle 1270.png`} width={150} height={150} alt="values1"/></div>
                            <div className="space-y-2 text-center sm:text-left">
                                <p>We are responsible</p>
                                <p className="text-lightGray opacity-90">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-5">
                            <div><Image className="w-52 h-36 sm:h-28 object-cover rounded-2xl" src={`${url}Rectangle 1272.png`} width={150} height={150} alt="values2"/></div>
                            <div className="space-y-2 text-center sm:text-left">
                                <p>We aim for progress</p>
                                <p className="text-lightGray opacity-90">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-16">
                <Contact />
            </div>
            <Footer />
        </div>
     );
}
 
export default About;