import ContentBlock from "@/components/main/ContentBlock";
import CopyBlock from "@/components/main/CopyBlock";
import Intro from "@/components/main/Intro";
import StoryBlock from "@/components/main/StoryBlock";
import { mainPageData } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kobaco AISAC",
  description: "Kobaco Ai analysis System for Ad Creation",
};

const MainPage = async () => {
  return (
    <>
      <Intro />
      <ContentBlock
        title={mainPageData[0].title}
        description={mainPageData[0].description}
        card={mainPageData[0].card}
      />
      <ContentBlock
        title={mainPageData[1].title}
        description={mainPageData[1].description}
        card={mainPageData[1].card}
      />
      <CopyBlock />
      <StoryBlock />
    </>
  );
};

export default MainPage;
