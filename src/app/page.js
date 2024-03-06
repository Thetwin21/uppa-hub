'use client'
import Community from "@/components/Community";
import FaqItem from "@/components/Faq";
import FourthLayer from "@/components/FourthLayer";
import Main from "@/components/Main";
import SecondLayer from "@/components/SecondLayer";
import Slidecomps from "@/components/Slidecomps";
import ThirdLayer from "@/components/ThirdLayer";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <main className="">
      <Wrapper>
        <Main />
        <SecondLayer />
        <ThirdLayer />
        <FourthLayer />
        <Slidecomps />
        <Community />
       </Wrapper>
    </main>
  );
}
