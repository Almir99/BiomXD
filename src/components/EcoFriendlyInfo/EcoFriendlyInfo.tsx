import {FC} from "react";
import {
  Container,
  ImageContainerOne,
  ImageContainerTwo,
  Body,
  Button,
  Content,
  Items,
  EmptyContainer
} from "./EcoFriendlyInfo.styled";
import {Text} from "../UI";

export const EcoFriendlyInfo: FC = () => {
  return (
    <Container>
      <ImageContainerOne>
        <img src="./assets/images/EcoFriendlyInfo/Preview.png" alt="Preview"/>
      </ImageContainerOne>
      <ImageContainerTwo>
        <img src="./assets/images/EcoFriendlyInfo/Refill Packaging_Mockup_2.png" alt="Refill Packaging"/>
      </ImageContainerTwo>
      <Body>
        <Text $letterSpacing={"2.1px"} fontSize={"14px"}>BIOM WIPES</Text>
        <Text $fontWeight={"700"} chronicle={true} $margin={"8px 0 12px 0"} fontSize={"36px"}>Better for you, and the planet.</Text>
        <Text $padding={"0 41px 0 0"}>The experience of clean should feel amazing. In a time when we’re constantly sanitizing, it can be damaging to our hands and skins. We decided to load our wipes with Aloe to take care of you, while you take care of your home.</Text>
        <Content>
          <Items> <img src="./assets/icons/EcoFriendlyInfo/biodegradable icon.png" alt="biodegradable"/><Text>100% biodegradable</Text> </Items>
          <Items> <img src="./assets/icons/EcoFriendlyInfo/plastic free icon.png" alt="plastic_free"/><Text>Plastic-free</Text> </Items>
          <Items> <img src="./assets/icons/EcoFriendlyInfo/plant based icon.png" alt="plant_based"/><Text>100% plant-based</Text> </Items>
        </Content>
        <Button><Text $textAlign={"center"} $fontWeight={"900"} fontSize={"13px"}>SUBSCRIBE NOW</Text></Button>
      </Body>
      <EmptyContainer/>
    </Container>
  )
}
