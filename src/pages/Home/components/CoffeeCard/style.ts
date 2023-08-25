import { styled } from 'styled-components'
import { RegularText, TitleText } from '../../../../styles/typography'

export const CoffeeCardContainer = styled.div`
  background: ${({ theme }) => theme.color['base-card']};

  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px;
  padding: 1.25rem;
  padding-top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    margin-top: -1.125rem;
    width: 7.5rem;
    height: 7.5rem;
  }
`

export const Tags = styled.span`
  margin-top: 0.75rem;
  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  gap: 4px;

  > span {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${({ theme }) => theme.fontSizes['components-tag']};
    text-transform: uppercase;
    line-height: 130%;
    font-weight: bold;

    border-radius: 100px;
    color: ${({ theme }) => theme.color['yellow-dark']};
    background: ${({ theme }) => theme.color['yellow-light']};

    padding: 4px 8px;
  }
`
export const CardTitle = styled(TitleText).attrs({
  size: 's',
  color: 'subtitle',
})`
  font-weight: bold;
  margin-bottom: 0.5rem;
`

export const Description = styled(RegularText).attrs({
  size: 's',
  color: 'label',
})`
  margin-bottom: 2rem;
`

export const FooterCard = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  > div {
    display: flex;
    align-items: center;
    gap: 3px;

    p {
      line-height: 0.75rem;
    }
  }
`

export const AddCartWrapper = styled.div`
  width: 7.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > button {
    width: 2.375rem;
    height: 2.375rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.color['purple-dark']};
    color: ${({ theme }) => theme.color['base-card']};
    cursor: pointer;
    border: none;
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: 0.4s;

    &:hover {
      background: ${({ theme }) => theme.color['theme-purple']};
    }
  }
`
