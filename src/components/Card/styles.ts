import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  background:var(--color-primary);
  height:300px;
  width:400px;
  margin:30px 10px;
  border-radius:16px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  @media(max-width:656px){
    margin:30px 0;
  }

`

export const CardHeader = styled.div`
display:flex;
flex-direction:column;
padding:10px;
margin:20px 0 0 10px;
justify-content:center;
align-items:center;
text-align:center;

`

export const Mentor = styled.p`
display:flex;
text-align:center;
margin-top:5px;
margin-right:30px;
font-size:14px;
align-items:center;
/* justify-content:flex-end; */
color:var(--color-secondary);
i{
  margin-left:2px;
  text-transform:capitalize
}
@media(max-width:656px){
font-size:12px

}


`

export const CardTitle = styled.h2`
  color:var(--color-tertiary);
  font-size:18px;
  font-weight:normal;

  text-transform:uppercase;

`

export const CardBody = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:200px;
padding:0 20px;
margin:15px auto;
`
export const CardImg = styled.img`

width:150px;
overflow:hidden;

`


export const CardFooter = styled.div`
width:100%;
height:50px;
bottom: 0;
display:flex;
justify-content:center;
align-items:center;
padding:30px;
`

export const CardButton = styled.a`
  display:flex;
  justify-content:center;
  align-items:center;
  height:40px;
  width:100%;
  margin:30px 20px 30px 0;
  border:none;
  border-radius:8px;
  background:var(--color-tertiary);
  color:var(--color-primary);
  text-transform:uppercase;
  font-weight:normal;
  cursor:pointer;
  text-decoration:none;
  > img{
    width:18px;
    margin-right:5px;
  }
  &:hover{
    background:var(--color-secondary);
  }

`
export const CardIcon= styled.img``