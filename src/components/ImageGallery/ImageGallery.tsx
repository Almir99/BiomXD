import {FC} from "react";
import {Container, Content, Items, SlideShow, Button, ButtonContainer, TextContainer} from "./ImageGallery.styled";
import {Text, SlideShowWrapper} from "../UI";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";

export const ImageGallery: FC = () => {

  return (
    <Container>
      <TextContainer>
        <Text chronicle={true} fontSize={"36px"} $fontWeight={"700"} $margin={"0 0 50px 0"}>#cleanwithbiom</Text>
      </TextContainer>
      <Content>
        <SlideShowWrapper startScrollAnimation={550} animationDuration={2} endScrollAnimation={110}
                          startAnimation={150} endAnimation={-100} endValue={50} direction={"x"}>
          <SlideShow>
            <Items>
              <img src="./assets/images/ImageGallery/Preview2.png" alt="preview2"/>
            </Items>
            <Items>
              <img src="./assets/images/ImageGallery/Biom_wipe_6.png" alt="biom_wipe"/>
            </Items>
            <Items>
              <img src="./assets/images/ImageGallery/kitchen_counter_low res.png" alt="kitchen_counter"/>
            </Items>
            <Items>
              <img src="./assets/images/ImageGallery/Green-Gold.png" alt="green-gold"/>
            </Items>
            <Items>
              <img src="./assets/images/ImageGallery/Biom fn .23.png" alt="biom"/>
            </Items>
            <Items>
              <img src="./assets/images/ImageGallery/Hands.png" alt="hands"/>
            </Items>
          </SlideShow>
        </SlideShowWrapper>
      </Content>
      <ButtonContainer>
        <Text $padding={"0 15px"} $fontWeight={"900"} fontSize={"13px"} $letterSpacing={"1.3px"}>FOLLOW US ON
          INSTAGRAM</Text>
        <Button><FontAwesomeIcon icon={faInstagram}/></Button>
      </ButtonContainer>
    </Container>
  )
}
