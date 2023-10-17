import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  display: flex;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const UlHeader = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
interface HeaderButtonProps {
  $variant: 'purple' | 'yellow'
}

export const HeaderLi = styled.li<HeaderButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  height: 2.375rem;
  border: none;
  padding: 0 0.5rem;
  border-radius: 6px;
  font-size: ${({ theme }) => theme.fontSizes['text-s']};
  position: relative;

  ${({ $variant, theme }) => css`
    background: ${theme.color[`${$variant}-light`]};
    color: ${theme.color[`${$variant}-dark`]};
  `}
  ${({ $variant, theme }) =>
    $variant === 'purple' &&
    css`
      svg {
        color: ${theme.color[`theme-${$variant}`]};
      }
    `};
`

export const QuantitySpan = styled.span`
  font-size: ${({ theme }) => theme.fontSizes['text-s']};
  font-weight: bold;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color['yellow-dark']};
  border-radius: 50%;
  width: 1.25rem;
  height: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: calc(-1.25rem / 2);
  right: calc(-1.25rem / 2);
`
