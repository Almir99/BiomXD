import {FC, useEffect, useState} from "react";
import {Container, HamburgerMenu, Logo, MobileMenu, Navigation, SideMenu, UserPanel, EmptyContainer} from "./Nav.styled";
import {Link, Text} from "../UI";
import {useToggle, useWindowSize} from "usehooks-ts";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import AnimateHeight from 'react-animate-height';

export const Nav: FC = () => {
  const [items] = useState(0)
  const [value, toggle, setValue] = useToggle(false)
  const {width} = useWindowSize()

  useEffect(()=>{
    if(width>1200){
      setValue(false)
    }
  },[width, setValue])

  return (
    width > 1200 ? <Container>
        <Navigation>
          <Link href="#">SHOP</Link>
          <Link href="#">WHY BIOM</Link>
          <Link href="#">SCENTS</Link>
        </Navigation>
        <Logo>
          <img src="./assets/images/logo.png" alt="logo"/>
        </Logo>
        <UserPanel>
          <Link href="#">SING IN</Link>
          <div className={"cart"}>
            <Link href="#">CART</Link>
            <div className={"items"}>
              <Link href="#"><img src="./assets/images/cart.png" alt="cart"/></Link>
              <div>
                <Text $padding={"1px 0 0 0.8px"} fontSize={"8px"}>{items}</Text>
              </div>
            </div>
          </div>
        </UserPanel>
      </Container> :
      <div style={{  position: "sticky", top: "0", zIndex: "20", height:"68px"}}>
        <MobileMenu>
          <div className={"menu"}>
            <HamburgerMenu onClick={toggle}>
              <FontAwesomeIcon icon={faBars}/>
            </HamburgerMenu>
            <Logo>
              <img src="./assets/images/logo.png" alt="logo"/>
            </Logo>
            <UserPanel>
              <div className={"cart"}>
                <div className={"items"}>
                  <Link href="#"><img src="./assets/images/cart.png" alt="cart"/></Link>
                  <div>
                    <Text $padding={"1px 0 0 0.8px"} fontSize={"8px"}>{items}</Text>
                  </div>
                </div>
              </div>
            </UserPanel>
          </div>

          <AnimateHeight
            data-testid="animate-height"
            aria-expanded={value}
            duration={800}
            height={value ? 'auto' : 0}>
            <SideMenu>
              <Link href="#">SHOP</Link>
              <Link href="#">WHY BIOM</Link>
              <Link href="#">SCENTS</Link>
              <Link href="#">SING IN</Link>
            </SideMenu>
          </AnimateHeight>
          {value &&
            <div style={{position:"relative"}}>
              <EmptyContainer onClick={() => setValue(false)}/>
            </div>
          }
        </MobileMenu>
      </div>
  )
}
