import Head from "next/head";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { Advantages } from "@/components/Advandages/Advandages";
import { Francgizing } from "@/components/Franchizing/Franchizing";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Advantages />
        <Francgizing />
      </main>
    </>
  );
}
