import { PropsWithChildren, createContext, useState } from 'react'
import { Coffee } from '../pages/Home/components/CoffeeCard'
import { produce } from 'immer'

export interface CartItemsProps extends Coffee {
  quantity: number
}

interface CartContextProps {
  cartItems: CartItemsProps[]
  quantityCoffeesInCart: number
  addCoffeeInCart: (coffee: CartItemsProps) => void
}

export const CartContext = createContext<CartContextProps | null>(null)

export const CartContextProvider = ({ children }: PropsWithChildren) => {
  const [cartItems, setCartItems] = useState<CartItemsProps[]>([])
  const quantityCoffeesInCart = cartItems.length

  const addCoffeeInCart = (coffee: CartItemsProps) => {
    const itemAlreadyExistsInCart = cartItems.findIndex(
      (cart) => cart.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (itemAlreadyExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[itemAlreadyExistsInCart].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)
  }

  return (
    <CartContext.Provider
      value={{ cartItems, quantityCoffeesInCart, addCoffeeInCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
