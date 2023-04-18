import {FC} from "react";
import {Button, ButtonContainer, Container, Content, Items, TextContainer} from "./ProductColorSelector.styled";
import {Text} from "../UI";
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export const ProductColorSelector:FC = () => {
  return(
    <Container>
      <TextContainer>
        <Text chronicle={true} $fontWeight={"700"} fontSize={"36px"}>Ready to start wiping out waste?</Text>
      </TextContainer>
      <ButtonContainer>
        <Text $padding={"0 15px"} $fontWeight={"900"} fontSize={"13px"} $letterSpacing={"1.3px"}>CHOOSE YOUR VESSEL COLOR</Text>
        <Button><FontAwesomeIcon icon={faArrowRightLong} /></Button>
      </ButtonContainer>
      <Items className={"firstItem"}>
        <img src="./assets/images/ProductColorSelector/Green_1.png" alt="green_model"/>
        <Content>
          <Text chronicle={true} $fontWeight={"700"} fontSize={"22px"} $letterSpacing={"2.2px"}>Biom Dispenser</Text>
          <Text $fontWeight={"300"} fontSize={"14px"} $letterSpacing={"1.4px"}>OCEAN TEAL</Text>
        </Content>
      </Items>
      <Items className={"secondItem"}>
        <img src="./assets/images/ProductColorSelector/Biom fn .20.png" alt="white_model"/>
        <Content>
          <Text chronicle={true} $fontWeight={"700"} fontSize={"22px"} $letterSpacing={"2.2px"}>Biom Dispenser</Text>
          <Text $fontWeight={"300"} $padding={"12px 0 0 0"} fontSize={"14px"} $letterSpacing={"1.4px"}>WHITE</Text>
        </Content>
      </Items>
      <Items className={"thirdItem"}>
        <img src="./assets/images/ProductColorSelector/Black_2.png" alt="black_model"/>
        <Content>
          <Text chronicle={true} $fontWeight={"700"} fontSize={"22px"} $letterSpacing={"2.2px"}>Biom Dispenser</Text>
          <Text $fontWeight={"300"} $padding={"12px 0 0 0"} fontSize={"14px"} $letterSpacing={"1.4px"}>INK BLACK</Text>
        </Content>
      </Items>
    </Container>
  )
}