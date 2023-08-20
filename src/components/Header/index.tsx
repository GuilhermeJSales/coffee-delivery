import { NavLink } from 'react-router-dom'
import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { HeaderContainer, HeaderLi, UlHeader } from './style'

import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <NavLink to="/">
          <img src={coffeeDeliveryLogo} alt="" />
        </NavLink>
      </div>

      <nav>
        <UlHeader>
          <HeaderLi variant="purple">
            <MapPin weight="fill" size={22} />
            <span>Porto Alegre, RS</span>
          </HeaderLi>
          <NavLink to="/checkout">
            <HeaderLi variant="yellow">
              <ShoppingCart weight="fill" size={22} />
            </HeaderLi>
          </NavLink>
        </UlHeader>
      </nav>
    </HeaderContainer>
  )
}
