import { RegularText } from '../../../../styles/typography'
import { ConfirmationSectionContainer } from './style'

export function ConfirmationSection() {
  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText size="m">R$ 29,70</RegularText>
      </div>

      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText size="m">R$ 3,50</RegularText>
      </div>

      <div>
        <RegularText size="l" weight="bold">
          Total
        </RegularText>
        <RegularText size="l" weight="bold">
          R$ 33,20
        </RegularText>
      </div>

      <button>Confirmar Pedido</button>
    </ConfirmationSectionContainer>
  )
}
