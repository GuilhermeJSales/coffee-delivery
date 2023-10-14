import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import { TitleText } from '../../../../styles/typography'
import { IconFormTitle } from '../IconFormTitle'
import {
  ContainerOrderForm,
  CheckoutForm,
  FormContainer,
  GridPaymentButton,
  ContainerSelectedCoffees,
  DivContainer,
  SubTitleForm,
} from './style'
import { useTheme } from 'styled-components'
import { ButtonPayment } from '../ButtonPayment'
import { OrderAddressForm } from '../OrderAddressForm'
import { SelectedCoffees } from '../SelectedCoffees'
import { ConfirmationSection } from '../ConfirmationSection'

export function CompletedOrder() {
  const { color } = useTheme()
  return (
    <CheckoutForm className="container">
      <div>
        <TitleText size="xs" color="subtitle">
          Complete seu pedido
        </TitleText>

        <ContainerOrderForm>
          <IconFormTitle
            titleForm="Endereço de Entrega"
            text="Informe o endereço onde deseja receber seu pedido"
            icon={<MapPinLine size={22} />}
            $iconColor={color['yellow-dark']}
          />

          <FormContainer>
            <OrderAddressForm />
          </FormContainer>
        </ContainerOrderForm>

        <ContainerOrderForm>
          <IconFormTitle
            titleForm="Pagamento"
            text="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            icon={<CurrencyDollar size={22} />}
            $iconColor={color['theme-purple']}
          />
          <GridPaymentButton>
            <ButtonPayment />
          </GridPaymentButton>
        </ContainerOrderForm>
      </div>

      <DivContainer>
        <SubTitleForm>Cafés selecionados</SubTitleForm>
        <ContainerSelectedCoffees>
          <SelectedCoffees />
          <SelectedCoffees />
          <ConfirmationSection />
        </ContainerSelectedCoffees>
      </DivContainer>
    </CheckoutForm>
  )
}
