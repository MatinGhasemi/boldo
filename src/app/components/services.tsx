import url from "@/production";
import Image from "next/image";

const Services = () => {
    return ( 
        <div className="mt-10 p-6 lg:px-16 md:px-12">
            <div className="flex flex-col items-center">
                <div className="flex-col flex items-center sm:flex-row lg:w-full">
                    <div className="relative lg:mx-auto">
                        <Image src={`${url}man.png`} alt="man-on-phone" width={200} height={400}/>
                        <Image className="absolute -bottom-10 right-2" src={`${url}Group 209.png`} alt="graph" width={100} height={200}/>
                    </div>
                    <div className="mt-10 sm:w-1/2 sm:ml-auto lg:mr-auto lg:w-[450px]">
                        <p className="mb-4">We connect our customers with the best, and help them keep up-and stay open.</p>
                        <div className="space-y-3">
                            <div className="flex gap-3 items-center">
                                <svg width="18" height="18" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18" cy="18" r="18" fill="#0A2640"/>
                                <path d="M26 12L15 23L10 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p className="text-sm">We connect our customers with the best.</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <svg width="18" height="18" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18" cy="18" r="18" fill="#0A2640"/>
                                <path d="M26 12L15 23L10 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p className="text-sm">Advisor success customer launch party.</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <svg width="18" height="18" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18" cy="18" r="18" fill="#0A2640"/>
                                <path d="M26 12L15 23L10 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p className="text-sm">Bussiness-to-consumer long tail.</p>
                            </div>
                        </div>
                        <div className="mt-4 cursor-pointer bg-darkBlue text-lightGray text-sm w-32 h-8 flex justify-center items-center rounded-3xl">
                            <p>Start now</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row-reverse items-center lg:w-full">
                    <div className="relative mt-10 lg:mx-auto">
                        <Image src={`${url}woman_sm.png`} alt="man-on-phone" width={200} height={400}/>
                        <Image className="absolute -bottom-10 right-2" src={`${url}Group 222.png`} alt="graph" width={100} height={200}/>
                    </div>
                    <div className="mt-10 sm:w-1/2 sm:mr-auto lg:mx-auto lg:w-[450px]">
                        <p className="mb-4">We connect our customers with the best, and help them keep up-and stay open.</p>
                        <div className="space-y-3">
                            <div className="bg-darkBlue text-lightGray flex px-2 py-3 gap-3 items-center rounded-md">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.24 12.24C21.3658 11.1142 21.9983 9.58722 21.9983 7.99504C21.9983 6.40285 21.3658 4.87588 20.24 3.75004C19.1142 2.62419 17.5872 1.9917 15.995 1.9917C14.4028 1.9917 12.8758 2.62419 11.75 3.75004L5 10.5V19H13.5L20.24 12.24Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16 8L2 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M17.5 15H9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p className="text-sm">We connect our customer with the best.</p>
                            </div>
                            <div className="text-lightDarkBlue flex px-2 py-3 rounded-md gap-3 items-center shadow-2xl">
                                <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_62_553)">
                                    <path d="M1.77502 12.6543C1.77502 12.6543 5.77502 4.6543 12.775 4.6543C19.775 4.6543 23.775 12.6543 23.775 12.6543C23.775 12.6543 19.775 20.6543 12.775 20.6543C5.77502 20.6543 1.77502 12.6543 1.77502 12.6543Z" stroke="#0A2640" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12.775 15.6543C14.4319 15.6543 15.775 14.3112 15.775 12.6543C15.775 10.9974 14.4319 9.6543 12.775 9.6543C11.1182 9.6543 9.77502 10.9974 9.77502 12.6543C9.77502 14.3112 11.1182 15.6543 12.775 15.6543Z" stroke="#0A2640" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_62_553">
                                    <rect width="24" height="24" fill="white" transform="translate(0.775024 0.654297)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                                <p className="text-sm">Advisor success customer launch party.</p>
                            </div>
                            <div className="text-lightDarkBlue flex px-2 py-3 rounded-md gap-3 items-center shadow-2xl">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_62_578)">
                                    <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="#0A2640" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 1V3" stroke="#0A2640" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 21V23" stroke="#0A2640" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M4.22 4.21997L5.64 5.63997" stroke="#0A2640" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M18.36 18.3601L19.78 19.7801" stroke="#0A2640" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M1 12H3" stroke="#0A2640" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M21 12H23" stroke="#0A2640" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M4.22 19.7801L5.64 18.3601" stroke="#0A2640" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M18.36 5.63997L19.78 4.21997" stroke="#0A2640" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_62_578">
                                    <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                                <p className="text-sm">Business-to-consumer long tail.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Services;