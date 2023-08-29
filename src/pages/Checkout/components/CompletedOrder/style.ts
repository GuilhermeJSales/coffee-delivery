import { styled } from 'styled-components'

export const CheckoutContainer = styled.div`
  margin-top: 2.5rem;
`

export const ContainerOrderForm = styled.form`
  width: 40rem;
  padding: 2.5rem;
  background: ${({ theme }) => theme.color['base-card']};
  border-radius: 6px;

  margin-top: 1rem;
  margin-bottom: 0.75rem;
`
