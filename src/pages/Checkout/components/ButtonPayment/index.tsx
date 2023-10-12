import { ReactNode } from 'react'
import { PaymentButton, PaymentIcon } from './style'
import { Bank, CreditCard, Money } from '@phosphor-icons/react'

interface PaymentMethodsProps {
  id: number
  icon: ReactNode
  label: string
}

const paymentMethods: { [key: string]: PaymentMethodsProps } = {
  credit: {
    id: 1,
    icon: <CreditCard size={16} />,
    label: 'Cartão de Crédito',
  },
  debit: {
    id: 2,
    icon: <Bank size={16} />,
    label: 'Cartão de Débito',
  },
  money: {
    id: 3,
    icon: <Money size={16} />,
    label: 'Dinheiro',
  },
}

export function ButtonPayment() {
  return (
    <>
      {Object.values(paymentMethods).map(({ id, icon, label }) => (
        <PaymentButton key={id}>
          <PaymentIcon>{icon}</PaymentIcon>
          {label}
        </PaymentButton>
      ))}
    </>
  )
}
