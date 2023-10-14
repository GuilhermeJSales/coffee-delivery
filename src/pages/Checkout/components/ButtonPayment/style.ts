import { styled } from 'styled-components'

export const PaymentButton = styled.div`
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

  @media only screen and (max-width: 52rem) {
    justify-content: center;
  }
`

export const PaymentIcon = styled.i`
  color: ${({ theme }) => theme.color['theme-purple']};
`
