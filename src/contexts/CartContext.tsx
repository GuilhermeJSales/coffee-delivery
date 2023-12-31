import { PropsWithChildren, createContext } from 'react'
import { Coffee } from '../pages/Home/components/CoffeeCard'
import { produce } from 'immer'
import { useLocalStorage } from '../hooks/useLocalStorage'

export interface CartItemsProps extends Coffee {
  quantity: number
}

interface CartContextProps {
  cartItems: CartItemsProps[]
  quantityCoffeesInCart: number
  addCoffeeInCart: (coffee: CartItemsProps) => void
  changeItemCartQuantity: (
    itemId: number,
    type: 'increase' | 'decrease',
  ) => void
  removeItemToCart: (itemId: number) => void
  totalPricesCoffees: number
  handleCartClear: () => void
}

const localStorageKey = 'COFFEE_DELIVERY_ITEMS'

export const CartContext = createContext<CartContextProps | null>(null)

export const CartContextProvider = ({ children }: PropsWithChildren) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItemsProps[]>(
    localStorageKey,
    [],
  )

  const quantityCoffeesInCart = cartItems.length

  const totalPricesCoffees = cartItems.reduce((acc, cart) => {
    return acc + cart.price * cart.quantity
  }, 0)

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

  const changeItemCartQuantity = (
    itemId: number,
    type: 'increase' | 'decrease',
  ) => {
    const newCart = produce(cartItems, (draft) => {
      const coffeeAlreadyExistsInCart = cartItems.findIndex(
        (cart) => cart.id === itemId,
      )

      if (coffeeAlreadyExistsInCart >= 0) {
        const item = draft[coffeeAlreadyExistsInCart]
        item.quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(newCart)
  }

  const removeItemToCart = (itemId: number) => {
    const newCart = produce(cartItems, (draft) => {
      const coffeeAlreadyExistsInCart = cartItems.findIndex(
        (cart) => cart.id === itemId,
      )
      if (coffeeAlreadyExistsInCart >= 0)
        draft.splice(coffeeAlreadyExistsInCart, 1)
    })

    setCartItems(newCart)
  }

  const handleCartClear = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        quantityCoffeesInCart,
        addCoffeeInCart,
        changeItemCartQuantity,
        removeItemToCart,
        totalPricesCoffees,
        handleCartClear,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
