import { styled } from 'styled-components'

export const InputContainer = styled.div`
  position: relative;
`

export const InputError = styled.span`
  color: ${({ theme }) => theme.color.errorForm};
  font-size: ${({ theme }) => theme.fontSizes['text-s']};
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const InputDiv = styled.div`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color['base-button']};
  background: ${({ theme }) => theme.color['base-input']};
  display: flex;
  align-items: center;
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  &:focus-within {
    border-color: ${({ theme }) => theme.color['yellow-dark']};
  }
`

export const InputItem = styled.input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  padding: 0 0.75rem;
  height: 100%;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.color['base-text']};

  &::placeholder {
    color: ${({ theme }) => theme.color['base-label']};
  }
`
export const Optional = styled.span`
  color: ${({ theme }) => theme.color['base-label']};
  font-size: ${({ theme }) => theme.fontSizes['text-s']};
  font-style: italic;
  margin-right: 0.75rem;
`
