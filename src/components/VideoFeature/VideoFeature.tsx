import  {FC} from "react";
import {Body, Button, Container, EmptyContainer} from "./VideoFeature.styled";
import {Text} from "../UI";
export const VideoFeature:FC = () => {
  return(
    <Container>
      <video  autoPlay loop muted>
        <source src="./assets/videos/video.mp4" type="video/mp4" />
      </video>
      <Body>
        <Text $textAlign={"center"} $fontWeight={"300"} fontSize={"14px"} $letterSpacing={"2.1px"}>CLEANING OUR OCEANS WITH EVERY WIPE</Text>
        <Text $textAlign={"center"} $fontWeight={"700"} chronicle={true} $padding={"6px 0 10px 0"}  fontSize={"36px"}>Wipes have plastic in them. We don’t.</Text>
        <Text $textAlign={"center"} $fontWeight={"300"} fontSize={"18px"}>We reinvented wipes to cut out all the bad stuff —like single-use plastic that hurts the environment, and toxic chemicals that don’t belong in our oceans (or in our homes).</Text>
        <Button><Text $textAlign={"center"} $fontWeight={"900"} fontSize={"13px"}>LEARN MORE</Text></Button>
      </Body>
      <EmptyContainer/>
    </Container>
  )
}
