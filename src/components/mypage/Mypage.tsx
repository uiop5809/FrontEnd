import { styled } from "styled-components";
import MyIndex from "./MyIndex";
import ServiceBox from "./ServiceBox";
import ServiceResult from "./ServiceResult";

const Mypage = () => {
  return (
    <Layout>
      <Title>마이 페이지</Title>
      <MyIndex />
      <ServiceContent>
        <ServiceBox />
        <ServiceResult />
      </ServiceContent>
    </Layout>
  );
};

export default Mypage;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5.5rem 6% 0 6%;
  gap: 1.5rem;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  font-weight: 500;
  margin-left: 1rem;
`;

const ServiceContent = styled.div`
  display: inline-flex;
  width: 100%;
`;
