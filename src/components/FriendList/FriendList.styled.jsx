import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #d9d9d9;
  box-shadow: 10px 11px 29px 0px rgba(0, 0, 0, 0.75);
  padding: 10px 15px;
`;
export const Item = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`;
export const Status = styled.span`
  background-color: ${props => props.$color};
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
export const Avatar = styled.img``;
export const Name = styled.p``;
