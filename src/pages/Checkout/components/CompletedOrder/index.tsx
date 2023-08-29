import { MapPinLine } from '@phosphor-icons/react'
import { TitleText } from '../../../../styles/typography'
import { IconFormTitle } from '../IconFormTitle'
import { ContainerOrderForm, CheckoutContainer } from './style'
import { useTheme } from 'styled-components'

export function CompletedOrder() {
  const { color } = useTheme()
  return (
    <CheckoutContainer className="container">
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
      </ContainerOrderForm>
    </CheckoutContainer>
  )
}
