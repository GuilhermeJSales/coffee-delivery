import { useEffect } from 'react'
import { RegularText, TitleText } from '../../styles/typography'
import { IconsContainer, MainContainer, SuccessContainer } from './style'
import illustrationSuccessPage from '../../assets/Illustration.webp'
import IconWithInfos from '../../components/IconsWithInfos'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import { ConfirmOrderFormProps } from '../Checkout'
import { paymentMethods } from '../Checkout/components/ButtonPayment'
import { capitalizeFirstLetters } from '../../utils/captlizeFirstLetters'

interface LocationProps {
  state: ConfirmOrderFormProps
}

export function Success() {
  const { color } = useTheme()
  const { state } = useLocation() as unknown as LocationProps
  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [state, navigate])

  if (!state) return <></>

  const formatStreetValue = capitalizeFirstLetters(state.street)
  const formatNeighborhoodValue = capitalizeFirstLetters(state.neighborhood)
  const formatCityValue = capitalizeFirstLetters(state.city)
  const formatUFValue = capitalizeFirstLetters(state.uf).toUpperCase()
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
                Entrega em{' '}
                <strong>
                  {formatStreetValue}, {state.number}
                </strong>
                <br />
                {formatNeighborhoodValue} - {formatCityValue}, {formatUFValue}
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
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
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
