import url from "@/production";
import Image from "next/image";

const Contact = () => {
    return ( 
        <div className="px-3 mx-6 lg:mx-16 md:mx-12 relative py-10 lg:py-20 overflow-hidden rounded-xl shadow-2xl">
            <Image className="absolute h-96 w-screen top-0 left-0 right-0 -z-20" src={`${url}Rectangle 1267.png`} width={1000} height={400} alt="bg2"/>
            <Image className="absolute -top-36 right-0 -rotate-12 -z-10" src={`${url}Ellipse 9.png`} width={400} height={400} alt="bg3"/>
            <div className="max-w-[500px] mx-auto">
                <p className="text-lightGray text-center text-xl lg:text-2xl">An enterprise template to ramp up your company website</p>
                <div className="flex gap-3 px-2 mt-5">
                    <div className="w-full"><input className="bg-lightGray w-full py-2 placeholder:px-5 rounded-3xl focus:outline-none" placeholder="Your email address"/></div>
                    <div><input className="cursor-pointer text-darkBlue bg-lighPrimary px-2 sm:px-5 py-2 rounded-3xl" type="button" value={"Start now"} /></div>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;