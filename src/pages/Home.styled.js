import styled from 'styled-components';

export const TitleHome = styled.h1`
  margin: 20px;
`;

export const MovieItem = styled.li`
  margin: 10px;
  list-style: none;
  width: calc(15% - 20px);
`;

export const MovieList = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin: 20px;
  padding: 0;
  justify-content: space-between;
`;

export const ChooseText = styled.p`
margin: 20px;
font-weight: 500;
`

export const ChooseBtn = styled.button`
margin-left: 20px;
font-size: 14px;
font-weight: 600;
background-color: greenyellow;
`