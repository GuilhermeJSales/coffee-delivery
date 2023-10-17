import { ShoppingCart } from '@phosphor-icons/react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText, TitleText } from '../../../../styles/typography'
import {
  AddCartWrapper,
  CardTitle,
  CoffeeCardContainer,
  Description,
  FooterCard,
  Tags,
} from './style'
import { formatMoney } from '../../../../utils/formatMoney'
import { useCart } from '../../../../hooks/useCart'
import { useState } from 'react'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const { addCoffeeInCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const formattedPrice = formatMoney(coffee.price)

  const handleIncreaseCoffeeInCart = () => {
    setQuantity((state) => state + 1)
  }

  const handleDecreaseCoffeeInCart = () => {
    setQuantity((state) => state - 1)
  }

  const handleAddItemToCart = () => {
    const newCoffeeCart = {
      ...coffee,
      quantity,
    }
    addCoffeeInCart(newCoffeeCart)
  }

  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} alt="" />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <CardTitle as="h3">{coffee.name}</CardTitle>

      <Description>{coffee.description}</Description>
      <FooterCard>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput
            increase={handleIncreaseCoffeeInCart}
            decrease={handleDecreaseCoffeeInCart}
            quantity={quantity}
          />
          <button onClick={handleAddItemToCart}>
            <ShoppingCart size={20} weight="fill" />
          </button>
        </AddCartWrapper>
      </FooterCard>
    </CoffeeCardContainer>
  )
}
