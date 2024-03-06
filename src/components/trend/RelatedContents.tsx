import { styled } from "styled-components";

import Container from "../common/Container";
import RelatedContent from "./RelatedContent";

const relatedContentData = [
  {
    id: 1,
    title:
      "[#떡상ing] 대배우 이병헌? 놉! 아랑곳하지 않는 이민정ㅋㅋㅋ😁 20분 내내 끊임없이 소환되는 남편 이병헌과의 티키타카.....",
    src: "유튜브",
    date: "2022.03.01",
  },
  {
    id: 2,
    title:
      "[#떡상ing] 대배우 이병헌? 놉! 아랑곳하지 않는 이민정ㅋㅋㅋ😁 20분 내내 끊임없이 소환되는 남편 이병헌과의 티키타카.....",
    src: "블로그",
    date: "2022.03.01",
  },
  {
    id: 3,
    title:
      "[#떡상ing] 대배우 이병헌? 놉! 아랑곳하지 않는 이민정ㅋㅋㅋ😁 20분 내내 끊임없이 소환되는 남편 이병헌과의 티키타카.....",
    src: "네이버 기사",
    date: "2022.03.01",
  },
  {
    id: 4,
    title:
      "[#떡상ing] 대배우 이병헌? 놉! 아랑곳하지 않는 이민정ㅋㅋㅋ😁 20분 내내 끊임없이 소환되는 남편 이병헌과의 티키타카.....",
    src: "유튜브",
    date: "2022.03.01",
  },
  {
    id: 5,
    title:
      "[#떡상ing] 대배우 이병헌? 놉! 아랑곳하지 않는 이민정ㅋㅋㅋ😁 20분 내내 끊임없이 소환되는 남편 이병헌과의 티키타카.....",
    src: "유튜브",
    date: "2022.03.01",
  },
  {
    id: 6,
    title:
      "[#떡상ing] 대배우 이병헌? 놉! 아랑곳하지 않는 이민정ㅋㅋㅋ😁 20분 내내 끊임없이 소환되는 남편 이병헌과의 티키타카.....",
    src: "유튜브",
    date: "2022.03.01",
  },
];

const RelatedContents = () => {
  return (
    <Container>
      <div>관련 콘텐츠</div>
      <RelatedContentBox>
        {relatedContentData.map((relatedContent) => (
          <RelatedContent
            id={relatedContent.id}
            title={relatedContent.title}
            src={relatedContent.src}
            date={relatedContent.date}
          />
        ))}
      </RelatedContentBox>
    </Container>
  );
};

export default RelatedContents;

const RelatedContentBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
