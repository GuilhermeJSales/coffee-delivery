import { styled } from 'styled-components'

export const CheckoutForm = styled.form`
  margin-top: 2.5rem;
`

export const ContainerOrderForm = styled.div`
  width: 40rem;
  padding: 2.5rem;
  background: ${({ theme }) => theme.color['base-card']};
  border-radius: 6px;
  margin-bottom: 0.75rem;
`

export const ContainerSelectedCoffees = styled(ContainerOrderForm)`
  border-radius: 6px 44px 6px 44px;
`

export const FormContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
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
`

export const GridPaymentButton = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 0.75rem;
`
