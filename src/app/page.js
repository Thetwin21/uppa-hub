import FourthLayer from "@/components/FourthLayer";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import SecondLayer from "@/components/SecondLayer";
import Slidecomps from "@/components/Slidecomps";
import ThirdLayer from "@/components/ThirdLayer";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <main className="flex items-center justify-center">
      <Wrapper>
        <Navbar />
        <Main />
        <SecondLayer />
        <ThirdLayer />
        <FourthLayer />
        <Slidecomps />
      </Wrapper>
    </main>
  );
}
