import { useCart } from '../../../../hooks/useCart'
import { RegularText } from '../../../../styles/typography'
import { formatMoney } from '../../../../utils/formatMoney'
import { ConfirmationSectionContainer } from './style'

const DELIVERY_PRICE = 3.5
export function ConfirmationSection() {
  const { totalPricesCoffees, quantityCoffeesInCart } = useCart()
  const cartTotal = totalPricesCoffees + DELIVERY_PRICE

  const coffeesFormatPrice = formatMoney(totalPricesCoffees)
  const deliveryFormatPrice = formatMoney(DELIVERY_PRICE)
  const totalFormatPrice = formatMoney(cartTotal)

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText size="m">
          R$ {quantityCoffeesInCart <= 0 ? '0,00' : coffeesFormatPrice}
        </RegularText>
      </div>

      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText size="m">R$ {deliveryFormatPrice}</RegularText>
      </div>

      <div>
        <RegularText size="l" weight="bold">
          Total
        </RegularText>
        <RegularText size="l" weight="bold">
          R$ {totalFormatPrice}
        </RegularText>
      </div>

      <button disabled={quantityCoffeesInCart <= 0}>Confirmar Pedido</button>
    </ConfirmationSectionContainer>
  )
}
