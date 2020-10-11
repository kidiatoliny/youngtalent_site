import styled from 'styled-components';
export const Container = styled.div`
  display:flex;
  max-width:1330px;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;

`

export const PartnerCard = styled.div`
  display:flex;
  background:var(--color-primary);
  height:150px;
  width:150px;
  margin:30px 40px;
  border-radius:50%;
  cursor:pointer;
  transition: 0.5s transform cubic-bezier(0.5, 0, 0, 1);
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  &:hover{
    transform:scale(1.1)
  }

  @media(max-width:656px){
    margin:30px 0;
  }

  @media(max-width:724px){
    margin:30px 14px;
  }
`

export const PartnerCardImg= styled.img`
  width:100%;
  border-radius:50%;
`