import { css, styled } from 'styled-components'

export const PaymentMethodContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${({ theme }) => css`
      background: ${theme.color['purple-light']};
      border-color: ${theme.color['theme-purple']};

      &:hover {
        background: ${theme.color['purple-light']};
      }
    `}
  }
`

export const ContentContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['components-button-m']};
  text-transform: uppercase;
  background: ${({ theme }) => theme.color['base-button']};
  color: ${({ theme }) => theme.color['base-text']};

  border: 1px solid ${({ theme }) => theme.color['base-button']};
  border-radius: 6px;

  padding: 0 1rem;
  height: 3rem;

  outline: none;
  cursor: pointer;
  transition: 0.4s;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  &:hover {
    background: ${({ theme }) => theme.color['base-hover']};
  }

  svg {
    color: ${({ theme }) => theme.color['theme-purple']};
  }

  user-select: none;

  @media only screen and (max-width: 52rem) {
    justify-content: center;
  }
`

export const ErrorSpan = styled.p`
  color: ${({ theme }) => theme.color.errorForm};
  font-size: ${({ theme }) => theme.fontSizes['text-s']};
  font-family: ${({ theme }) => theme.fonts.regular};
  grid-column: 1/-1;
`
