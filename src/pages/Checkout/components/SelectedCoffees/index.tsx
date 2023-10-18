import { QuantityInput } from '../../../../components/QuantityInput'
import { RemoveButton } from '../../../../components/RemoveButton/Index'
import { CartItemsProps } from '../../../../contexts/CartContext'
import { useCart } from '../../../../hooks/useCart'
import { RegularText } from '../../../../styles/typography'
import { formatMoney } from '../../../../utils/formatMoney'
import {
  ButtonsContainer,
  SelectedContainer,
  SelectedImage,
  SelectedInfosContainer,
} from './style'

interface SelectedCoffeesProps {
  cartItems: CartItemsProps
}

export function SelectedCoffees({ cartItems }: SelectedCoffeesProps) {
  const { changeItemCartQuantity, removeItemToCart } = useCart()
  const totalPrice = cartItems.price * cartItems.quantity
  const formatPrice = formatMoney(totalPrice)

  const handleIncrease = () => {
    changeItemCartQuantity(cartItems.id, 'increase')
  }

  const handleDecrease = () => {
    changeItemCartQuantity(cartItems.id, 'decrease')
  }

  const handleRemove = () => {
    removeItemToCart(cartItems.id)
  }

  return (
    <SelectedContainer>
      <SelectedImage>
        <img src={`/coffees/${cartItems.photo}`} alt="" />
      </SelectedImage>
      <div>
        <SelectedInfosContainer>
          <RegularText color="subtitle">{cartItems.name}</RegularText>
          <RegularText color="text" weight="bold">
            {`R$ ${formatPrice}`}
          </RegularText>
        </SelectedInfosContainer>
        <ButtonsContainer>
          <QuantityInput
            increase={handleIncrease}
            decrease={handleDecrease}
            quantity={cartItems.quantity}
            $size={'small'}
          />
          <RemoveButton onRemove={handleRemove} />
        </ButtonsContainer>
      </div>
    </SelectedContainer>
  )
}
