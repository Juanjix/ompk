import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CollectionIntro } from "@/components/CollectionIntro";
import { Editorial } from "@/components/Editorial";
import { ShopGrid } from "@/components/ShopGrid";
import { RadioTeaser } from "@/components/RadioTeaser";
import { ArchiveList } from "@/components/ArchiveList";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CollectionIntro />
      <Editorial />
      <ShopGrid />
      <RadioTeaser />
      <ArchiveList />
      <Footer />
    </>
  );
}
