import { FormProvider, useForm } from 'react-hook-form'
import { CompletedOrder } from './components/CompletedOrder'
import { CheckoutForm } from './style'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().min(1, 'UF'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

export type ConfirmOrderFormProps = zod.infer<
  typeof confirmOrderFormValidationSchema
>

export function Checkout() {
  const { handleCartClear } = useCart()
  const confirmOrderForm = useForm<ConfirmOrderFormProps>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      uf: '',
      paymentMethod: undefined,
    },
  })

  const { handleSubmit } = confirmOrderForm
  const navigate = useNavigate()

  function handleCreateNewOrder(data: ConfirmOrderFormProps) {
    navigate('/success', {
      state: data,
    })
    handleCartClear()
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CheckoutForm
        className="container"
        onSubmit={handleSubmit(handleCreateNewOrder)}
      >
        <CompletedOrder />
      </CheckoutForm>
    </FormProvider>
  )
}
