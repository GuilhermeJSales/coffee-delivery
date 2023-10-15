import { RegularText, TitleText } from '../../styles/typography'
import { IconsContainer, MainContainer, SuccessContainer } from './style'
import illustrationSuccessPage from '../../assets/Illustration.webp'
import IconWithInfos from '../../components/IconsWithInfos'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

export function Success() {
  const { color } = useTheme()

  return (
    <MainContainer className="container">
      <TitleText size="l">Uhu! Pedido confirmado</TitleText>
      <RegularText size="l" color="subtitle">
        Agora é só aguardar que logo o café chegará até você
      </RegularText>

      <SuccessContainer>
        <IconsContainer>
          <IconWithInfos
            icon={<MapPin weight="fill" />}
            text={
              <RegularText>
                <strong>Entrega em Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
              </RegularText>
            }
            $iconBg={color['theme-purple']}
          />

          <IconWithInfos
            icon={<Timer weight="fill" />}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20min - 30min</strong>
              </RegularText>
            }
            $iconBg={color['theme-yellow']}
          />

          <IconWithInfos
            icon={<CurrencyDollar />}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>Cartão de crédito</strong>
              </RegularText>
            }
            $iconBg={color['yellow-dark']}
          />
        </IconsContainer>
        <img src={illustrationSuccessPage} alt="" />
      </SuccessContainer>
    </MainContainer>
  )
}
