import styled from '@emotion/styled'
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  height: 68px;
  max-width: 1440px;
  background-color: var(--white-075);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  color:var(--black);
  font-weight: bold;
  letter-spacing: 1.5px;
  z-index: 20;
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1/-1;
  grid-row: 1;
`

export const Navigation = styled.div`
  display: flex;
  gap:40px;
  padding-left: 50px;
  grid-column: 1/5;
  grid-row: 1;
`
export const UserPanel = styled.div`
  display: flex;
  justify-content: end;
  gap: 40px;
  align-items: center;
  padding-right: 50px;
  grid-column: 11/-1;
  grid-row: 1;

  .cart {
    display: flex;
    align-items: center;
    gap: 12.21px;
  }

  .items {
    position: relative;


    div {
      pointer-events: none;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      position: absolute;
      right: -5px;
      top: -5px;
      width: 14px;
      height: 14px;
      border: 1px solid var(--slightly-less-white);
      background-color: var(--yellow);
      color: var(--slightly-less-white);
    }
  }
`
export const MobileMenu = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 20;
  background-color: var(--white-075);
  backdrop-filter: blur(10px);
  
  .menu{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const HamburgerMenu = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 26px;
  top: 0;
  color: var(--black);
  padding-left: 50px;
  position: sticky;
  height: 68px;
  z-index: 20;
`
export const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px 30px 50px;
  gap: 20px;
  width: inherit;
  height: 100%;
  z-index: 20;
`
export const EmptyContainer = styled.div`
  background-color: transparent;
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: inherit;
  height: 100vh;
  z-index: 1;
`