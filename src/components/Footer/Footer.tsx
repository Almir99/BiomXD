import {FC} from "react";
import {
  BottomContent,
  Container,
  Content,
  SocialMedia,
  TextContent,
  Button,
  FormContainer,
  EmptyContainer,
  Subscription,
  Form,
  Input,
  SubmitButton
} from "./Footer.styled";
import {Link, Text} from "../UI";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'

export const Footer:FC = () => {
  return(
    <Container>
      <FormContainer>
        <Subscription>
          <Text chronicle={true} $fontWeight={"700"} fontSize={"30px"}>Get the latest news delivered to your inbox.</Text>
          <Text $margin={"13px 0 18px 0"}>Get access to the exciting stuff — exclusive new deals, product launches and more. Plus, get a 10% discount on your next order.</Text>
          <Form>
            <Input placeholder={"Enter your email address"}/>
            <SubmitButton><FontAwesomeIcon icon={faArrowRightLong} /></SubmitButton>
          </Form>
        </Subscription>
        <img src="./assets/images/Footer/Biom_wipe_2.png" alt="Biom_wipe_2"/>
      </FormContainer>
      <Content>
        <Link href="#">SHOP</Link>
        <Link href="#">WHY BIOM</Link>
        <Link href="#">SCENTS</Link>
        <img src="./assets/images/logo.png" alt="logo"/>
        <Link href="#">FAQS</Link>
        <Link href="#">ACCOUNT</Link>
        <Link href="#">HELP</Link>
      </Content>
      <BottomContent>
        <TextContent>
          <Text>
            © 2021 biom. All rights reserved
          </Text>
          <Link href="#">• Privacy Policy</Link>
          <Link href="#">• Terms of Service</Link>
        </TextContent>
        <SocialMedia>
          <Button>
            <Text $padding={"0.5px 0 0 0.8px"} $textAlign={"center"}>
              <FontAwesomeIcon icon={faInstagram} />
            </Text>
          </Button>
          <Button>
            <Text $textAlign={"center"}>
              <FontAwesomeIcon icon={faFacebookF} />
            </Text>
          </Button>
        </SocialMedia>
      </BottomContent>
      <EmptyContainer/>
    </Container>
  )
}
