import { QuantityInput } from '../../../../components/QuantityInput'
import { RemoveButton } from '../../../../components/RemoveButton/Index'
import { RegularText } from '../../../../styles/typography'
import {
  ButtonsContainer,
  SelectedContainer,
  SelectedImage,
  SelectedInfosContainer,
} from './style'

export function SelectedCoffees() {
  return (
    <SelectedContainer>
      <SelectedImage>
        <img src={`/coffees/tradicional.png`} alt="" />
      </SelectedImage>
      <div>
        <SelectedInfosContainer>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <RegularText color="text" weight="bold">
            R$ 9,90
          </RegularText>
        </SelectedInfosContainer>
        <ButtonsContainer>
          <QuantityInput $size={'small'} />
          <RemoveButton />
        </ButtonsContainer>
      </div>
    </SelectedContainer>
  )
}
