import { styled } from 'styled-components'

export const CheckoutContainer = styled.div`
  margin-top: 2.5rem;
`

export const ContainerOrderForm = styled.div`
  width: 40rem;
  padding: 2.5rem;
  background: ${({ theme }) => theme.color['base-card']};
  border-radius: 6px;

  margin-top: 1rem;
  margin-bottom: 0.75rem;
`

export const FormContainer = styled.form`
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
