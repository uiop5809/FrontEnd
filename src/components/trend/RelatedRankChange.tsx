import { styled } from "styled-components";

const rankData = [
  {
    id: 1,
    title: "오브제",
    count: 3,
    updown: true,
  },
  {
    id: 2,
    title: "러그",
    count: 1,
    updown: false,
  },
  {
    id: 3,
    title: "테이블",
    count: 3,
    updown: false,
  },
  {
    id: 4,
    title: "의자",
    count: 1,
    updown: true,
  },
  {
    id: 5,
    title: "셀프 인테리어",
    count: 2,
    updown: true,
  },
];

const RelatedRankChange = () => {
  return (
    <>
      <Label>2월 3주차</Label>
    </>
  );
};

export default RelatedRankChange;

const Label = styled.div`
  color: ${({ theme }) => theme.colors.grey5};
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-left: 0.78rem;
`;
