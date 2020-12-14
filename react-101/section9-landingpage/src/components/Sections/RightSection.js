import {
  Component,
  Wrapper,
  SubHeader,
  Header,
  PlaceHolderImage,
  Text,
  Item
} from "./Components";

const RightSection = () => {
  return (
    <Component>
      <Wrapper row>
        <Item right mr>
          <PlaceHolderImage></PlaceHolderImage>
          <Text>Super Hero To-do List</Text>
        </Item>
        <SubHeader> Incredible Features</SubHeader>
        <Header>Universal app to manager your tasks</Header>
      </Wrapper>
    </Component>
  );
};

export default RightSection;
