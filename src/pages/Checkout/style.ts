import styled from "styled-components";

export const CheckoutForm = styled.form`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media only screen and (max-width: 72.5rem) {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 1.25rem;
    place-items: center;
    row-gap: 2rem;
  }
`
