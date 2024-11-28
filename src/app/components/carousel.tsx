'use client'

import url from "@/production";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Users{
    img_url:string,
    username:string,
    title:string,
    description:string,
}

const Carousel = () => {
    const users:Users[] = [
        {img_url:`${url}Ellipse3.png`,username:"Albus Dumbledore",title:"Manager @ Hogwarts",description:"“Buyer buzz partner network disruptive non-disclosure agreement business”"},
        {img_url:`${url}Ellipse2.png`,username:"Severus Snape",title:"Manager @ Slytherin",description:"“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”"},
        {img_url:`${url}Ellipse 4.png`,username:"Harry Potter",title:"Team Leader @ Gryffindor",description:"“Release facebook responsive web design business model canvas seed money monetization.”"}
    ]

    const [count,setCount] = useState(1);
    const [touchStartX,setTouchStartX] = useState(0);
    const [android,setAndroid] = useState(true);

    const carousel = useRef<HTMLDivElement|null>(null); 
    
    const getDeviceType = (): string => {
        const userAgent = navigator.userAgent;
    
        if (/android/i.test(userAgent)) {
            return "Android";
        } else if (/iPad|iPhone|iPod/.test(userAgent)) {
            return "iOS";
        }else{
            setAndroid(false);
            return 'Unknown';
        }
    };
    
    useEffect(()=>{
        getDeviceType()
    },[])

    let w:number;
    if (carousel.current){
        w = carousel.current.offsetWidth;
    }

    const next = ()=>{
        if (carousel.current){
            setCount(count+1);
            if (count===users.length)
                setCount(1)

            carousel.current.scrollLeft = count !== users.length ? w*count : 0 ;
        }
    }
    const prev = ()=>{
        if (carousel.current){
            if (count===1){
                setCount(users.length);
                carousel.current.scrollLeft = (users.length - 1) * w ;
            }else{
                setCount(count-1);
                carousel.current.scrollLeft = (count-2) * w ;
            }
        }
    }

    const handleTouchStart = (e:React.TouchEvent<HTMLDivElement>)=>{
        setTouchStartX(e.touches[0].clientX);
    }
    const handleTouchEnd = (e:React.TouchEvent<HTMLDivElement>)=>{
        const touchEnd:number = e.changedTouches[0].clientX;
        const detailX = touchEnd - touchStartX;

        if (detailX > 0)
            prev()
        else 
            next();
    }

    return ( 
        <div className="py-10 px-6 lg:px-16 md:px-12 bg-darkBlue my-5">
            <div className="flex justify-center">
                <p className="text-lightGray mb-10 text-lg">An enterprise template to ramp up your company website</p>
                <div style={android ? {display:"none"} : {display:"flex"}} className="items-center gap-2">
                    <svg className="mt-3" onClick={prev} width="26" height="26" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="36" cy="36" r="36" transform="rotate(-180 36 36)" fill="white"/>
                    <path d="M46.5 35L25.5 35" stroke="#0A2640" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M36 45.5L25.5 35L36 24.5" stroke="#0A2640" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <svg onClick={next} className="rotate-180 mt-3" width="26" height="26" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="36" cy="36" r="36" transform="rotate(-180 36 36)" fill="white"/>
                    <path d="M46.5 35L25.5 35" stroke="#0A2640" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M36 45.5L25.5 35L36 24.5" stroke="#0A2640" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
            <div onTouchEnd={(e:React.TouchEvent<HTMLDivElement>)=>handleTouchEnd(e)}
                 onTouchStart={(e:React.TouchEvent<HTMLDivElement>)=>handleTouchStart(e)}
                ref={carousel} className="flex scroll-smooth max-w-96 mx-auto overflow-hidden">
                {users.map((user,i)=>{
                    return (
                        <div key={i} className="bg-lightGray min-w-full text-black p-5 rounded-lg">
                            <p>{user.description}</p>
                            <div className="flex gap-3 items-center mt-2">
                                <div><Image className="w-10 h-10 rounded-full" src={user.img_url} width={100} height={100} alt={`user-rounded-${i}`}/></div>
                                <div>
                                    <p>{user.username}</p>
                                    <p className="text-lightLight">{user.title}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
     );
}
 
export default Carousel;