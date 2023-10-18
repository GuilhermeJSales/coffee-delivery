import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import { TitleText } from '../../../../styles/typography'
import { IconFormTitle } from '../IconFormTitle'
import {
  ContainerOrderForm,
  CheckoutForm,
  FormContainer,
  GridPaymentButton,
  ContainerSelectedCoffees,
  SubTitleForm,
  FormDiv,
} from './style'
import { useTheme } from 'styled-components'
import { ButtonPayment } from '../ButtonPayment'
import { OrderAddressForm } from '../OrderAddressForm'
import { SelectedCoffees } from '../SelectedCoffees'
import { ConfirmationSection } from '../ConfirmationSection'
import { useCart } from '../../../../hooks/useCart'

export function CompletedOrder() {
  const { color } = useTheme()
  const { cartItems } = useCart()
  return (
    <CheckoutForm className="container">
      <ContainerOrderForm>
        <TitleText size="xs" color="subtitle">
          Complete seu pedido
        </TitleText>

        <FormDiv>
          <IconFormTitle
            titleForm="Endereço de Entrega"
            text="Informe o endereço onde deseja receber seu pedido"
            icon={<MapPinLine size={22} />}
            $iconColor={color['yellow-dark']}
          />

          <FormContainer>
            <OrderAddressForm />
          </FormContainer>
        </FormDiv>

        <FormDiv>
          <IconFormTitle
            titleForm="Pagamento"
            text="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            icon={<CurrencyDollar size={22} />}
            $iconColor={color['theme-purple']}
          />
          <GridPaymentButton>
            <ButtonPayment />
          </GridPaymentButton>
        </FormDiv>
      </ContainerOrderForm>

      <ContainerSelectedCoffees>
        <SubTitleForm>Cafés selecionados</SubTitleForm>
        <FormDiv>
          {cartItems.map((cart) => (
            <SelectedCoffees key={cart.id} cartItems={cart} />
          ))}
          <ConfirmationSection />
        </FormDiv>
      </ContainerSelectedCoffees>
    </CheckoutForm>
  )
}
