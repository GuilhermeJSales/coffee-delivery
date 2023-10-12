import styled from 'styled-components'

export const DeleteCoffee = styled.button`
  background: ${({ theme }) => theme.color['base-button']};
  font-size: ${({ theme }) => theme.fontSizes['components-button-m']};
  cursor: pointer;

  width: 100%;
  max-width: 5.6875rem;
  height: 100%;
  padding: 0.5;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  outline: none;
  border: none;

  transition: 0.4s ease;

  svg {
    color: ${({ theme }) => theme.color['theme-purple']};
  }

  &:hover {
    background: ${({ theme }) => theme.color['base-hover']};
  }
`
