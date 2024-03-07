import { styled } from "styled-components";
import RelatedContent from "./RelatedContent";
import { relatedContentData } from "@/lib/trend/trendData";

const RelatedContents = () => {
  return (
    <RelatedContentBox>
      {relatedContentData.map((relatedContent) => (
        <RelatedContent
          title={relatedContent.title}
          src={relatedContent.src}
          date={relatedContent.date}
        />
      ))}
    </RelatedContentBox>
  );
};

export default RelatedContents;

const RelatedContentBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
