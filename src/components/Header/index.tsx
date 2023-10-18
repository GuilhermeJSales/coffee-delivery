import { NavLink } from 'react-router-dom'
import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { HeaderContainer, HeaderLi, QuantitySpan, UlHeader } from './style'

import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { quantityCoffeesInCart } = useCart()
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={coffeeDeliveryLogo} alt="" />
        </NavLink>

        <nav>
          <UlHeader>
            <HeaderLi $variant="purple">
              <MapPin weight="fill" size={22} />
              <span>São Paulo, SP</span>
            </HeaderLi>
            <NavLink to="/checkout">
              <HeaderLi $variant="yellow">
                {quantityCoffeesInCart >= 1 ? (
                  <QuantitySpan>{quantityCoffeesInCart}</QuantitySpan>
                ) : (
                  <QuantitySpan>0</QuantitySpan>
                )}
                <ShoppingCart weight="fill" size={22} />
              </HeaderLi>
            </NavLink>
          </UlHeader>
        </nav>
      </div>
    </HeaderContainer>
  )
}
