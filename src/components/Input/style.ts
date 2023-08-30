import { styled } from 'styled-components'

export const InputContainer = styled.div`
  position: relative;
`

export const Optional = styled.span`
  color: ${({ theme }) => theme.color['base-label']};
  font-size: ${({ theme }) => theme.fontSizes['text-s']};
  font-style: italic;
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
`

export const InputItem = styled.input`
  font-size: ${({ theme }) => theme.fontSizes['text-s']};
  font-weight: 400;
  line-height: 130%;
  background: ${({ theme }) => theme.color['base-input']};
  color: ${({ theme }) => theme.color['base-text']};
  border: 1px solid ${({ theme }) => theme.color['base-button']};
  border-radius: 4px;
  padding: 0.75rem;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.color['base-label']};
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.color['yellow-dark']};
    border: 1px solid ${({ theme }) => theme.color['yellow-dark']};
  }

  &:focus::placeholder {
    color: transparent;
  }
`
