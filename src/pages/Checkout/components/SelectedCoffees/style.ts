import styled from 'styled-components'

export const SelectedImage = styled.div`
  > img {
    max-width: 4rem;
    width: 100%;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;

  height: 2rem;

  > div {
    height: 100%;
    max-width: 4.5rem;
  }
`

export const SelectedInfosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`

export const SelectedContainer = styled.div`
  display: grid;
  grid-template-columns: 4rem 1fr;
  align-items: center;
  gap: 1.25rem;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  border-bottom: 1px solid ${({ theme }) => theme.color['base-button']};
`
