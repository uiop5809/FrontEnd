"use client";

import ContentBlock from "@/components/main/ContentBlock";
import CopyBlock from "@/components/main/CopyBlock";
import Intro from "@/components/main/Intro";
import StoryBlock from "@/components/main/StoryBlock";
import { mainPageData } from "@/lib/data";

const MainPage = () => {
  const adData = mainPageData[0];
  const trendData = mainPageData[1];
  return (
    <>
      <Intro />
      <ContentBlock
        title={adData.title}
        description={adData.description}
        card={adData.card}
        isTrend={false}
      />
      <ContentBlock
        title={trendData.title}
        description={trendData.description}
        card={trendData.card}
        isTrend={true}
      />
      <CopyBlock />
      <StoryBlock />
    </>
  );
};

export default MainPage;
