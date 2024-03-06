import { styled } from "styled-components";
import Image from "next/image";

interface RecentSearchContentProps {
  name: string;
}

const RecentSearchContent = ({ name }: RecentSearchContentProps) => {
  return (
    <Box>{name} 
      <Image
        src="/common/cross.svg"
        alt="cross"
        width={25}
        height={25}
      />
    </Box>
  )
};

export default RecentSearchContent;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;

  border-radius: 100px;
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  background: #232323;
`;
