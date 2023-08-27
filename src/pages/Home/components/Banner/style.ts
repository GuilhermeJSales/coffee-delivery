import styled from 'styled-components'
import backgroundBanner from '../../../../assets/background.svg'
import { TitleText } from '../../../../styles/typography'

export const BannerSection = styled.section`
  width: 100%;
  height: 34rem;
  background: ${() => `url(${backgroundBanner})`} no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 72.5rem) {
    height: auto;
    padding-top: 3.25rem;
  }
`

export const BannerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  img {
    display: block;
    max-width: 100%;
  }

  @media only screen and (max-width: 72.5rem) {
    flex-direction: column;
    justify-content: center;
  }
`
export const BannerTitle = styled(TitleText)`
  margin-bottom: 1rem;

  @media only screen and (max-width: 54rem) {
    font-size: ${({ theme }) => theme.fontSizes['title-l']};
  }
`
export const IconsInfoContainer = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 4.125rem;
  row-gap: 1.25rem;

  @media only screen and (max-width: 40.75rem) {
    grid-template-columns: 1fr;
  }
`
