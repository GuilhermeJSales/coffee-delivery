import { MapPinLine } from '@phosphor-icons/react'
import { TitleText } from '../../../../styles/typography'
import { IconFormTitle } from '../IconFormTitle'
import { ContainerOrderForm, CheckoutContainer, FormContainer } from './style'
import { useTheme } from 'styled-components'
import { Input } from '../../../../components/Input'

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
        <FormContainer>
          <Input placeholder="CEP" type="number" className="cep" />
          <Input placeholder="Rua" type="text" className="street" />
          <Input placeholder="Número" type="text" className="number" />
          <Input
            placeholder="Complemento"
            className="complement"
            optional={'opcional'}
            type="text"
          />
          <Input placeholder="Bairro" type="text" className="neighborhood" />
          <Input placeholder="Cidade" type="text" className="city" />
          <Input placeholder="UF" type="" className="uf" />
        </FormContainer>
      </ContainerOrderForm>
    </CheckoutContainer>
  )
}
