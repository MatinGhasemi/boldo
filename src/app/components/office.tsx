import url from "@/production";
import Image from "next/image";

const Office = () => {
    return (
        <div className="py-10 px-6 lg:px-24 md:px-16 xl:px-36">
            <div>
                <Image className="w-full" src={`${url}image.png`} width={1000} height={200} alt="office"/>
                <div className="sm:flex sm:items-center sm:justify-between sm:gap-4 mt-6">
                    <p className="sm:w-1/2 lg:w-1/3 text-2xl lg:text-3xl">We connect our customers with the best, and help them keep up-and stay open.</p>
                    <div className="sm:w-1/2 lg:w-1/3 mt-4 sm:mt-0">
                        <div className="flex justify-between border-b-2 py-2">
                            <p className="text-sm text-lightDarkBlue">We connect our customers with the best?</p>
                            <svg width="18" height="18" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="14" cy="14" r="14" fill="#0A2640"/>
                            <path d="M8 12L14 18L20 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className="flex justify-between border-b-2 py-2">
                            <p className="text-sm text-lightDarkBlue">Android research & development rockstar? </p>
                            <svg width="18" height="18" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="14" cy="14" r="14" fill="#0A2640"/>
                            <path d="M8 12L14 18L20 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-16">
                <p className="text-lightLight text-center">Our Blog</p>
                <p className="text-center mt-4 mb-14">Value proposition accelerator product management venture</p>
                <div className="sm:flex sm:gap-2 md:gap-10 lg:gap-20 xl:gap-32">
                    <div className="hidden sm:block sm:h-[424px] sm:w-1/3">
                        <div className="w-full">
                            <Image className="w-full h-64 object-cover rounded-3xl" src={`${url}Rectangle 1270.png`} width={300} height={100} alt="woman_xl"/>    
                            <div>
                                <p className="my-2">Category <span className="ml-3 text-lightLight">November 22,2021</span></p>
                                <p>Pitch termsheet backing validation focus release.</p>
                                <div className="flex gap-3 items-center my-3">
                                    <Image className="w-8 h-8 rounded-full object-cover" src={`${url}Ellipse1.png`} width={300} height={100} alt="woman_xl"/>    
                                    <p>Chandler Bing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:h-[424px] sm:w-1/3">
                        <div className="w-full">
                            <Image className="w-full h-64 object-cover rounded-3xl" src={`${url}woman_sm.png`} width={300} height={100} alt="woman_xl"/>    
                            <div>
                                <p className="my-2">Category <span className="ml-3 text-lightLight">November 22,2021</span></p>
                                <p>Seed round direct mailing non-disclosure agreement graphical user interface rockstar.</p>
                                <div className="flex gap-3 items-center my-3">
                                    <Image className="w-8 h-8 rounded-full object-cover" src={`${url}Ellipse.png`} width={300} height={100} alt="woman_xl"/>    
                                    <p>Rachel Green</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:block sm:h-[424px] sm:w-1/3">
                        <div className="w-full">
                            <Image className="w-full h-64 object-cover rounded-3xl" src={`${url}Rect.png`} width={300} height={100} alt="woman_xl"/>    
                            <div>
                                <p className="my-2">Category <span className="ml-3 text-lightLight">November 22,2021</span></p>
                                <p>Beta prototype sales iPad gen-z marketing network effects value proposition.</p>
                                <div className="flex gap-3 items-center my-3">
                                    <Image className="w-8 h-8 rounded-full object-cover" src={`${url}Ellipse3.png`} width={300} height={100} alt="woman_xl"/>    
                                    <p>Monica Geller</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center my-8">
                    <button className="border-darkBlue border-2 text-darkBlue px-6 py-2 rounded-3xl hover:bg-darkBlue hover:text-lightGray">Load More</button>
                </div>
            </div>
        </div>
    );
}
 
export default Office;