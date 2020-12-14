import {
    Component,
    Wrapper,
    SubHeader,
    Header,
    PlaceHolderImage,
    Text,
    Item
  } from "./Components";
  
  const LeftSection = () => {
    return (
      <Component>
        <Wrapper row>
          <Item right>
            <SubHeader>Amazing collaboration</SubHeader>
            <Header>Connet to everyone you need</Header>
          </Item>
          <Item center ml>
            <PlaceHolderImage>
            </PlaceHolderImage>
            <Text>Heroes of Amazona</Text>
          </Item>
       </Wrapper>
      </Component>
    );
  };
  
  export default LeftSection;
  