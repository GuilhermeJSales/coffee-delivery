import {
  BannerDiv,
  BannerSection,
  BannerTitle,
  IconsInfoContainer,
} from './style'
import BannerCoffee from '../../../../assets/banner-coffee.png'
import { RegularText } from '../../../../styles/typography'
import IconsWithInfos from '../../../../components/IconsWithInfos'
import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

export function Banner() {
  const { color } = useTheme()
  return (
    <BannerSection>
      <BannerDiv className="container">
        <div>
          <BannerTitle size="xl">
            Encontre o café perfeito para qualquer hora do dia
          </BannerTitle>
          <RegularText size="l" color="subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </RegularText>

          <IconsInfoContainer>
            <li>
              <IconsWithInfos
                icon={<ShoppingCart weight="fill" />}
                text="Compra simples e segura"
                $iconBg={color['yellow-dark']}
              />
            </li>
            <li>
              <IconsWithInfos
                icon={<Package weight="fill" />}
                text="Embalagem mantém o café intacto"
                $iconBg={color['base-text']}
              />
            </li>
            <li>
              <IconsWithInfos
                icon={<Timer weight="fill" />}
                text="Entrega rápida e rastreada"
                $iconBg={color['theme-yellow']}
              />
            </li>
            <li>
              <IconsWithInfos
                icon={<Coffee weight="fill" />}
                text="O café chega fresquinho até você"
                $iconBg={color['theme-purple']}
              />
            </li>
          </IconsInfoContainer>
        </div>

        <div>
          <img src={BannerCoffee} alt="" />
        </div>
      </BannerDiv>
    </BannerSection>
  )
}
