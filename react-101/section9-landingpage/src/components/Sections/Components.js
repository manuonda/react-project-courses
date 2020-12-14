import styled from 'styled-components'

export const Component =  styled.div`
  display: flex;
  border: 1px solid red;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  padding: 2 rem;
  ming-height: 25hv;
  backgroun-color: ${(props) => (props.bg ? '#f9fafb': '#fff')}
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: ${(props) => (props.row ? 'row': 'column')};
  align-items: center;
`


export const SubHeader = styled.h4`
  margin: 0 0 1rem 0px;
  font-weigth: 400;
  font-size: 0.9rem;
  color: #a0aec0;

`
export const Header = styled.h4`
 margin: 0 0 2rem 0;
 font-family: 'Raleway', sans-serif;
`

export const PlaceHolderImage = styled.h3`
  width: 400px;
  height: 200px;
  border: 1px solid #cbd5e0;
  border-radius: 0.75rem;
  box-shadow: 0 5px 10px 0 rgba(0,0,0,0.15);
  background-color: #fff;
`

export const Text = styled.p`
  margin: 2rem 0 0 0 ;
  color : #a0aec0;
  font-size: 0.9rem;
  text-align: center;
`

export const Item= styled.div`
border: 1px solid red;
display: flex;
flex-direction: column;
align-items: ${ props => props.center ? 'center':'flex-start'}
margin-rigth: ${props => props.mr ? '2rem' : 0 };
margin-left : ${props => props.ml ? '2rem' : 0 };
`

