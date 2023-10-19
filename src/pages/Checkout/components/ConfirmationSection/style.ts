import styled from 'styled-components'

export const ConfirmationSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  > button {
    background: ${({ theme }) => theme.color['theme-yellow']};
    font-size: ${({ theme }) => theme.fontSizes['components-button-g']};
    font-weight: bold;
    color: ${({ theme }) => theme.color.white};
    text-transform: uppercase;
    cursor: pointer;
    max-width: 100%;
    border: none;
    outline: none;
    border-radius: 6px;
    padding: 0.75rem;
    margin-top: 1.5rem;
    transition: 0.4s ease;

    &:disabled {
      opacity: 0.5;
      cursor: no-drop;
    }

    &:hover {
      background: ${({ theme }) => theme.color['yellow-dark']};
    }
  }
`
