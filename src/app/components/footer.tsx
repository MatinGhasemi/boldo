import url from "@/production";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="py-20 px-6 lg:px-24 md:px-16 xl:px-36 sm:flex sm:gap-4 sm:justify-between sm:items-center">
            <div className="lg:w-1/3">
                <div>
                    <Image className="w-44" src={`${url}logoF.png`} width={300} height={100} alt="logofooter"/>
                </div>
                <p className="my-5">Social Media Validation business model canvas graphical user interface launch party creative facebook iPad twitter</p>
                <p>All right reserved</p>
            </div>
            <div className="flex justify-between mt-5 sm:mt-0 sm:gap-4 lg:w-1/3">
                <div>
                    <p className="text-lightDarkBlue font-bold text-lg">Landings</p>
                    <div className="text-lightLight">
                        <p className="hover:text-lightDarkBlue cursor-pointer">Home</p>
                        <p className="hover:text-lightDarkBlue cursor-pointer">Products</p>
                        <p className="hover:text-lightDarkBlue cursor-pointer">Services</p>
                    </div>
                </div>
                <div>
                    <p className="text-lightDarkBlue font-bold text-lg">Company</p>
                    <div className="text-lightLight">
                        <p className="hover:text-lightDarkBlue cursor-pointer">Home</p>
                        <div><span className="mr-2 hover:text-lightDarkBlue cursor-pointer">Careers</span><span className="bg-lighPrimary cursor-pointer text-black p-[6px] rounded-3xl">hiring!</span></div>
                        <p className="hover:text-lightDarkBlue cursor-pointer">Services</p>
                    </div>
                </div>
            </div>
            <div className="hidden sm:block">
                <p className="text-lightDarkBlue font-bold text-lg">Resources</p>
                <div className="text-lightLight">
                    <p className="hover:text-lightDarkBlue cursor-pointer">Blog</p>
                    <p className="hover:text-lightDarkBlue cursor-pointer">Products</p>
                    <p className="hover:text-lightDarkBlue cursor-pointer">Services</p>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;