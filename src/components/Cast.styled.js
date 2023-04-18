import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  padding: 0;
  justify-content: space-between;
`;

export const CastElement = styled.li`
  margin: 10px;
  list-style: none;
  width: calc(15% - 20px);
`;

export const CastImg = styled.img`
  width: 100%;
`;
