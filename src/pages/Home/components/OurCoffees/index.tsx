import { TitleText } from '../../../../styles/typography'
import { coffees } from '../../../../data/coffees'
import { CoffeeCard } from '../CoffeeCard'
import { CardContainer, OurCoffeesContainer } from './style'

export function OurCoffees() {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size={'l'} color="subtitle">
        Nossos Cafés
      </TitleText>
      <CardContainer>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CardContainer>
    </OurCoffeesContainer>
  )
}
