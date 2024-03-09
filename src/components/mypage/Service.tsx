import { colors } from "@/styles/theme";
import { styled } from "styled-components";

interface ServiceProps {
  button1: string;
  button2: string;
  content: string;
}

const Service = (props: ServiceProps) => {
  const { button1, button2, content } = props;

  return (
    <CopyWrapper>
      <TagWrapper>
        <Tag color={colors.secondary} background={colors.secondaryLight3}>
          {button1}
        </Tag>
        <Tag color={colors.grey1} background={colors.grey5}>
          {button2}
        </Tag>
      </TagWrapper>
      {content}
    </CopyWrapper>
  );
};

export default Service;

const CopyWrapper = styled.div`
  display: flex;
  width: 49%;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.875rem;
  background: ${colors.grey0};
  padding: 1rem 1rem 3rem 1rem;
  color: var(--Basic-White, #fff);
  text-align: center;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
  margin-bottom: 2%;
`;
const TagWrapper = styled.div`
  display: inline-flex;
  gap: 0.5rem;
  margin-bottom: 3rem;
`;
const Tag = styled.div<{ color: string; background: string }>`
  padding: 0.375rem 0.875rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.375rem;
  border: 1px solid ${(props) => props.color};
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
