import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  height: 100vh;

  > h1 {
    color: ${({ theme }) => theme.color['yellow-dark']};
  }

  @media only screen and (max-width: 72.5rem) {
    > h1 {
      text-align: center;
    }
    > p {
      text-align: center;
    }
  }
`

export const SuccessContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.5rem;

  @media only screen and (max-width: 72.5rem) {
    justify-content: center;
    > img {
      display: none;
    }
  }
`
export const IconsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background: ${({ theme }) => theme.color.background};
  max-width: 32rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
    border-radius: 7px 37px 7px 37px;
  }

  @media only screen and (max-width: 32rem) {
    div:has(div) {
      display: grid;
      align-items: start;
      justify-content: center;
      grid-template-columns: 32px 1fr;
    }
  }
`
