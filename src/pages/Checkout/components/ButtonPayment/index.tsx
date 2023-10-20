import { ComponentProps, ReactNode, forwardRef } from 'react'
import { ContentContainer, ErrorSpan, PaymentMethodContainer } from './style'
import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import { useFormContext } from 'react-hook-form'

interface PaymentMethodsProps {
  icon: ReactNode
  label: string
}

type ButtonPaymentProps = ComponentProps<'input'>

const paymentMethods: { [key: string]: PaymentMethodsProps } = {
  credit: {
    icon: <CreditCard size={16} />,
    label: 'Cartão de Crédito',
  },
  debit: {
    icon: <Bank size={16} />,
    label: 'Cartão de Débito',
  },
  money: {
    icon: <Money size={16} />,
    label: 'Dinheiro',
  },
}

const ButtonPayment = forwardRef<HTMLInputElement, ButtonPaymentProps>(
  (props, ref) => {
    const {
      formState: { errors },
    } = useFormContext()

    const paymentMethodError = errors?.paymentMethod
      ?.message as unknown as string
    return (
      <>
        {Object.entries(paymentMethods).map(([key, { icon, label }]) => (
          <PaymentMethodContainer key={key}>
            <input type="radio" value={key} id={key} {...props} ref={ref} />
            <label htmlFor={key}>
              <ContentContainer>
                {icon}
                {label}
              </ContentContainer>
            </label>
          </PaymentMethodContainer>
        ))}

        {paymentMethodError && <ErrorSpan>{paymentMethodError}</ErrorSpan>}
      </>
    )
  },
)

ButtonPayment.displayName = 'ButtonPayment'

export default ButtonPayment
