import { styled } from 'styled-components'

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

export const SubTitleForm = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes['title-xs']};
  font-weight: bold;
  color: ${({ theme }) => theme.color['base-subtitle']};
  line-height: 130%;
`

export const ContainerOrderForm = styled.div`
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const FormDiv = styled.div`
  background: ${({ theme }) => theme.color['base-card']};
  width: 100%;
  padding: 2.5rem;
  border-radius: 6px;
`

export const ContainerSelectedCoffees = styled(ContainerOrderForm)`
  border-radius: 6px 44px 6px 44px;
  max-width: 28rem;
  width: 100%;

  @media only screen and (max-width: 72.5rem) {
    max-width: 40rem;
  }
`

export const FormContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: minmax(9.4rem, 12.5rem) minmax(12.5rem, 17.25rem) 3.75rem;
  row-gap: 1rem;
  column-gap: 0.75rem;

  .cep {
    grid-column: 1/-1;
    max-width: 12.5rem;
  }

  .street {
    grid-column: 1/-1;
  }

  .complement {
    grid-column: 2/-1;
  }

  @media only screen and (max-width: 39rem) {
    grid-template-columns: 1fr;

    .cep,
    .street,
    .complement {
      grid-column: 1/-1;
      max-width: 100%;
    }
  }
`

export const GridPaymentButton = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 0.75rem;

  @media only screen and (max-width: 52rem) {
    grid-template-columns: 1fr;
  }
`
