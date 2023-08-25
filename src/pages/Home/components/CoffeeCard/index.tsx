import { ShoppingCart } from '@phosphor-icons/react'
import { Input } from '../../../../components/Input'
import { RegularText, TitleText } from '../../../../styles/typography'
import {
  AddCartWrapper,
  CardTitle,
  CoffeeCardContainer,
  Description,
  FooterCard,
  Tags,
} from './style'

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
            {coffee.price}
          </TitleText>
        </div>

        <AddCartWrapper>
          <Input />
          <button>
            <ShoppingCart size={20} weight="fill" />
          </button>
        </AddCartWrapper>
      </FooterCard>
    </CoffeeCardContainer>
  )
}
