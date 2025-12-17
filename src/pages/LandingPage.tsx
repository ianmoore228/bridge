import { Hero } from "@/components/Hero";
import { SectionFirst } from "@/components/SectionFirst";
import { SectionSecond } from "@/components/SectionSecond";
import { SectionThird } from "@/components/SectionThird";
import { SectionFourth } from "@/components/SectionFourth";
import { SectionFifth } from "@/components/SectionFifth";
import { SectionSixth } from "@/components/SectionSixth";
import { SectionSeventh } from "@/components/SectionSeventh";
import { Footer } from "@/components/Footer";

export const LandingPage = () => {
  return (
    <>
      <Hero />
      <SectionFirst />
      <SectionSecond />
      <SectionThird />
      <SectionFourth />
      <SectionFifth />
      <SectionSixth />
      <SectionSeventh />
      <Footer />
    </>
  );
};
