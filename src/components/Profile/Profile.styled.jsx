import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  background-color: #8fa5a5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 500px;
  border-radius: 10px;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Image = styled.img`
  display: block;

  width: 100px;
  background-color: grey;
  border-radius: 50%;
`;
export const Username = styled.p`
  font-size: 20px;
`;
export const Tag = styled.p`
  font-size: 14px;
  margin-top: 15px;
`;
export const Location = styled.p`
  font-size: 16px;
  margin-top: 10px;
`;
export const Stats = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin-top: 35px;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 10px;
`;
export const Label = styled.span`
  font-weight: 700;
`;
export const Quantity = styled.span``;
