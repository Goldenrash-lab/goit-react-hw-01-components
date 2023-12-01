import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: grey;
  padding: 10px 0;
`;
export const Heading2 = styled.h2`
  font-size: 25px;
  color: white;

  width: 100%;
  text-align: center;
  padding: 10px;
`;
export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid white;
  border-top: 1px solid white;
`;
export const StatItem = styled.li`
  font-size: 14px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.$color};
  align-items: center;
  border-right: 1px solid white;
`;
export const Label = styled.span`
  font-size: 16px;
  font-weight: 700;
`;
export const Percentage = styled.span``;
