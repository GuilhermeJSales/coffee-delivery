import styled from 'styled-components'
import backgroundBanner from '../../../../assets/background.png'
import { TitleText } from '../../../../styles/typography'

export const BannerSection = styled.section`
  width: 100%;
  height: 34rem;
  background: ${() => `url(${backgroundBanner})`} no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const BannerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`
export const BannerTitle = styled(TitleText)`
  margin-bottom: 1rem;
`
export const IconsInfoContainer = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 4.125rem;
  row-gap: 1.25rem;
`
