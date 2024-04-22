'use client'
import Community from "@/components/Community";
import Ecosystem from "@/components/Ecosystem";
import Main from "@/components/Main";
import SecondLayer from "@/components/SecondLayer";
import Slidecomps from "@/components/Slidecomps";
import ThirdLayer from "@/components/ThirdLayer";
import Wrapper from "@/components/Wrapper";
import AOS from "aos";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])
  
  return (
    <main className="px-2">
      <Wrapper>
        <Main />
        <SecondLayer />
        <ThirdLayer />
        <Slidecomps />
        <Ecosystem /> 
        <Community />
       </Wrapper>
    </main>
  );
}
