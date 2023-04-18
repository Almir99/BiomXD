import {FC, useState} from "react";
import {Button, ButtonContainer, Container} from "./Reviews.styled";
import {Text} from "../UI";
export const Reviews:FC = () => {
  const [active, setActive] = useState<number>(0)

  const data =  [
    {
      review: "Cleaning and sanitizing are now more important than ever and these wipes make it so easy. They’re great because they don’t dry my skin out and I love knowing that buying their products are better for the environment.",
      author:"RACHAEL H"
    },
    {
      review: "The Dispensers are fantastic! They make it so easy to keep my kitchen organized and my cooking supplies easily accessible. I highly recommend them to anyone looking for a storage solution.",
      author:"Mark J"
    },
    {
      review: "I've been using the Dispensers for a few weeks now and I'm impressed by how much space they've saved me in my pantry. They're sturdy, easy to use, and look great too. Definitely worth the investment!",
      author:"Rachel L"
    },
    {
      review: "I'm so happy I found the Dispensers! They've made a huge difference in my daily routine and have saved me so much time and hassle. They're also very easy to clean and maintain. Thanks, Dispensers!",
      author:"Thomas A"
    },
  ]

  return(
    <Container>
      <Text fontSize={"14px"} $letterSpacing={"2.1px"} $textAlign={"center"} style={{gridArea:"t"}}>
        WHAT PEOPLE ARE SAYING
      </Text>
      {data.map((reviews, index) => (
        <>
          <Text className={active === index ? "show" : "hide"} chronicle={true} fontSize={"25px"} $fontWeight={"600"} $textAlign={"center"} $margin={"26px 0"} style={{gridArea:"r"}}>
            “{reviews.review}”
          </Text>
          <Text className={active === index ? "show" : "hide"} fontSize={"14px"} $letterSpacing={"2.1px"} $textTransform={"uppercase"} $textAlign={"center"} $margin={"0 0 50px"} style={{gridArea:"a"}}>
            - {reviews.author}.
          </Text>
        </>
      ))}
      <ButtonContainer style={{gridArea:"b"}}>
        <Button onClick={() => setActive(0)} className={active === 0 ? "active" : ""}/>
        <Button onClick={() => setActive(1)} className={active === 1 ? "active" : ""}/>
        <Button onClick={() => setActive(2)} className={active === 2 ? "active" : ""}/>
        <Button onClick={() => setActive(3)} className={active === 3 ? "active" : ""}/>
      </ButtonContainer>
    </Container>
  )
}
