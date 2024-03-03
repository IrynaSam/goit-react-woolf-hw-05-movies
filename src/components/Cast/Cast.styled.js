import styled from 'styled-components';
export const CastSection = styled.section`
  padding: 20px;
  background-color: #f3f3f3;
`;

export const CastList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CastItem = styled.li`
  width: 100px;
  margin: 10px;
  text-align: center;
`;

export const ActorImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ActorName = styled.h4`
  font-size: 14px;
  margin-top: 8px;
  color: #333;
`;

export const CharacterName = styled.p`
  font-size: 12px;
  color: #666;
`;
