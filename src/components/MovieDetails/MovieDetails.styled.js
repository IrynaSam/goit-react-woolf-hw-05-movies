import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;
export const Wrapper = styled.div`
  display: flex;
`;

export const MoviePoster = styled.img`
  flex: 0 0 auto;
  width: 300px;
  height: 450px;
  margin-right: 20px;
  background: url(${props => props.src}) center center / cover no-repeat;
  border-radius: 8px;
  position: relative;
`;
export const MovieContent = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

export const MovieTitle = styled.h2`
  font-size: 24px;
  margin-top: 0;
`;

export const UserScore = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const MovieOverview = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const GenreList = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const AdditionalInfo = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const InfoTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
`;

export const InfoItem = styled.li`
  margin-right: 10px;
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  height: 40px;
  margin-top: 20px;
  padding: 10px 15px;
  border-radius: 5px;
  text-align: center;
  background-color: #e7e481;
  color: #333;
  text-decoration: none;
  &:hover {
    background-color: #cfcfcf;
  }
`;
