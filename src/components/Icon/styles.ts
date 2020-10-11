import styled from 'styled-components';

export const Container = styled.div`
margin:10px;
> a img{
  /* width:48px;
  height:48px; */
  cursor:pointer;
  margin:5px;
  transition: 0.4s transform cubic-bezier(0.5, 0, 0, 1);
  &:hover{
    transform:scale(1.2);
    filter:none;
  }
}
`;
