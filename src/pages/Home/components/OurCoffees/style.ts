import styled from 'styled-components'

export const OurCoffeesContainer = styled.main`
  margin-top: 2rem;
  margin-bottom: 9.8125rem;
  width: 100%;

  @media only screen and (max-width: 39.75rem) {
    text-align: center;
    margin-top: 3.2rem;
  }
`

export const CardContainer = styled.div`
  width: 100%;
  margin-top: 3.375rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  place-items: center;

  @media only screen and (max-width: 72.5rem) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1.25rem;
    row-gap: 2rem;
  }

  @media only screen and (max-width: 63rem) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.125rem;
    row-gap: 1.25rem;
  }

  @media only screen and (max-width: 39.75rem) {
    grid-template-columns: 1fr;
    place-items: center;
    column-gap: 0;
    row-gap: 2rem;
  }
`
