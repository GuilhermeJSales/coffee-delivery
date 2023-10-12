import { styled, css } from 'styled-components'

interface QuantityInputContainerProps {
  $size: string
}

export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
  flex: 1;
  background: ${({ theme }) => theme.color['base-button']};

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  padding: 0.5rem;

  ${({ $size }) =>
    $size === 'medium' &&
    css`
      padding: 0.5rem;
    `}

  ${({ $size }) =>
    $size === 'small' &&
    css`
      padding: 0.34375rem 0.5rem;
    `}

  input {
    background: none;
    color: ${({ theme }) => theme.color['base-title']};
    font-size: ${({ theme }) => theme.fontSizes['text-m']};
    border: none;
    text-align: center;
    width: 100%;

    &::focus {
      outline: none;
    }
  }
`

export const IconWrapper = styled.button.attrs({
  type: 'button',
})`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  cursor: pointer;
  color: ${({ theme }) => theme.color['theme-purple']};
  transition: 0.4s;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.color['purple-dark']};
  }
`
