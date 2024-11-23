import url from "@/production";
import Image from "next/image";

const Navbar = () => {
    return ( 
        <div className="z-10 p-6 lg:px-16 md:px-12 flex justify-between items-center">
            <div><Image src={`${url}Logo.png`} width={100} height={40} alt="Logo1"/></div>
            <div className="hidden sm:flex items-center gap-8 text-white">
                <p>Product</p>
                <p>Services</p>
                <p>About</p>
                <p className="bg-white text-darkBlue px-6 py-1 rounded-2xl">Login</p>
            </div>
        </div>
     );
}
 
export default Navbar;