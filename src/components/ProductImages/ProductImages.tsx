import {FC} from "react";
import {Container, Content, Items, SlideShow, SlideShowContent, TextContainer} from "./ProductImages.styled";
import {Text, SlideShowWrapper} from "../UI";
export const ProductImages: FC = () => {

  return (
    <Container>
      <TextContainer>
        <Text fontSize={"16px"} $letterSpacing={"2.4px"} $textAlign={"center"}>
          WHERE YOU NEED IT,
        </Text>
        <Text chronicle={true} $letterSpacing={"-0.78px"} $fontWeight={"700"} fontSize={"78px"} $textAlign={"center"}>
          when you need it.
        </Text>
      </TextContainer>
      <SlideShow>
        <SlideShowWrapper startScrollAnimation={500} animationDuration={2} endScrollAnimation={55}
                          startAnimation={350} endAnimation={"start"} endValue={775} direction={"x"} endToStart={true}>
          <SlideShowContent>
            <Items className={"item"}>
              <img src="./assets/images/ProductImages/Living Room_1.png" alt="living_room"/>
              <Content>
                <Text chronicle={true} fontSize={"22px"} $fontWeight={"600"}>living room</Text>
              </Content>
            </Items>
            <Items className={"item"}>
              <img src="./assets/images/ProductImages/office.png" alt="office"/>
              <Content>
                <Text chronicle={true} fontSize={"22px"} $fontWeight={"600"}>office</Text>
              </Content>
            </Items>
            <Items className={"item"}>
              <img src="./assets/images/ProductImages/Kitchen Shot_3.png" alt="kitchen"/>
              <Content>
                <Text chronicle={true} fontSize={"22px"} $fontWeight={"600"}>kitchen</Text>
              </Content>
            </Items>
            <Items className={"item"}>
              <img src="./assets/images/ProductImages/bathroom_white on counter.png" alt="bathroom"/>
              <Content>
                <Text chronicle={true} fontSize={"22px"} $fontWeight={"600"}>bathroom</Text>
              </Content>
            </Items>
          </SlideShowContent>
        </SlideShowWrapper>
      </SlideShow>
    </Container>
  )
}