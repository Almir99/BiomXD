import {FC, } from "react";
import {Body, Button, Container, Items, Content, ImageWrapper, TextWrapper} from "./ProductHighlights.styled";
import {Text, SlideShowWrapper} from "../UI";
export const ProductHighlights: FC = () => {

  return (
    <Container>
      <TextWrapper>
        <SlideShowWrapper startScrollAnimation={"center"} animationDuration={3} endScrollAnimation={70}
                          startAnimation={700} endAnimation={400} endValue={450} direction={"y"}>
          <Text fontSize={"225px"} $letterSpacing={"-5.63px"} $fontWeight={"700"}>meet biom</Text>
        </SlideShowWrapper>
      </TextWrapper>
      <ImageWrapper>
        <img src="./assets/images/ProductHighlights/Mask_Group_12.png" alt="mask_group_12"/>
      </ImageWrapper>
      <Body>
        <Text $letterSpacing={"2.1px"} fontSize={"14px"}>THE BIOM DISPENSER</Text>
        <Text $fontWeight={"700"} chronicle={true} $margin={"8px 0 12px 0"} fontSize={"36px"}>Redefine your experience
          of clean.</Text>
        <Text>A quality engineered wipes dispenser that looks beautiful in your home, making better habits for your home
          and planet always within reach.</Text>
        <Content>
          <Items> <img src="./assets/icons/ProductHighlights/beautiful design icon.png" alt="beautiful_design"/><Text>Beautiful
            design,
            fit for your home</Text> </Items>
          <Items> <img src="./assets/icons/ProductHighlights/durable stainless icon.png" alt="durable_stainless"/><Text>Durable
            stainless
            steel exterior</Text> </Items>
          <Items> <img src="./assets/icons/ProductHighlights/non toxic icon.png" alt="non_toxic"/><Text>Non-toxic, BPA
            free</Text>
          </Items>
        </Content>
        <Button><Text $textAlign={"center"} $fontWeight={"900"} fontSize={"13px"}>SHOP NOW</Text></Button>
      </Body>
    </Container>
  )
}