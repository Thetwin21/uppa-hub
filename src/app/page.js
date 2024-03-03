'use client'
import Community from "@/components/Community";
import FourthLayer from "@/components/FourthLayer";
import Main from "@/components/Main";
import SecondLayer from "@/components/SecondLayer";
import Slidecomps from "@/components/Slidecomps";
import ThirdLayer from "@/components/ThirdLayer";
import Wrapper from "@/components/Wrapper";
import { useRef } from "react";

export default function Home() {
  let slideRef = useRef();
  return (
    <main ref={slideRef} className="">
      <Wrapper>
        <Main />
        <SecondLayer />
        <ThirdLayer />
        <FourthLayer />
        <Slidecomps slideRef={slideRef} />
        <Community />
      </Wrapper>
    </main>
  );
}
