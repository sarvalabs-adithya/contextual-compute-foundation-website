import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Thesis } from "@/components/Thesis";
import { Papers } from "@/components/Papers";
import { JoinCTA } from "@/components/JoinCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Thesis />
        <Papers />
        <JoinCTA />
      </main>
      <Footer />
    </>
  );
}
