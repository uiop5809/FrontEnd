import { styled } from "styled-components";
import Image from "next/image";

interface RelatedContentProps {
  title: string;
  src: string;
  date: string;
}

const RelatedContent = (props: RelatedContentProps) => {
  const { title, src, date } = props;

  return (
    <Layout>
      <TopBox>
        <Image src="trend/content.svg" alt="content" width={100} height={100} />
      </TopBox>
      <BottomBox>
        <Title>{title}</Title>
        <DescriptionBox>
          <SrcButton>{src}</SrcButton>
          <DateText>{date}</DateText>
        </DescriptionBox>
      </BottomBox>
    </Layout>
  );
};

export default RelatedContent;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 14px 14px 0 0;
  img {
    width: 100%;
    height: 100%;
  }
`;

const BottomBox = styled.div`
  background: #252525;
  border-radius: 0 0 14px 14px;
  padding: 1rem;
`;

const Title = styled.div`
  font-size: 0.9rem;
`;

const DescriptionBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const SrcButton = styled.button`
  padding: 0.5rem 0.8rem;
  border-radius: 30px;
  font-size: 0.8rem;
  border: none;
  background: ${({ theme }) => theme.colors.main};
`;

const DateText = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.grey1};
`;
