import EndlessMarquee from "@/components/Animation";
import Community from "@/components/Community";
import Footer from "@/components/Footer";
import FourthLayer from "@/components/FourthLayer";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
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

      <EndlessMarquee text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <Slidecomps />
      <Community />
    </Wrapper>
    </main>
  );
}
