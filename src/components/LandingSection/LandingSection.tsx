import {FC} from "react";
import {Container, Body, Button} from "./LandingSection.styled";
import {Text} from "../UI";
export const LandingSection:FC = () => {
  return(
    <Container>
      <div className={"image"}/>
      <Body>
        <Text  $fontWeight={"700"} chronicle={true} fontSize={"56px"}>So fresh. <br/> So green.</Text>
        <Text $fontWeight={"300"} $padding={"14px 0 24px 0"} fontSize={"20px"}>We believe that a more eco-friendly everyday makes a happier you and me. We’re on a mission to put sustainability in reach with better-for-the-planet wipes that are easy, effective, and plastic-free.</Text>
        <Button><Text $textAlign={"center"} $fontWeight={"900"} fontSize={"13px"}>Get started</Text></Button>
      </Body>
    </Container>
  )
}
