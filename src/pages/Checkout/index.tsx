import { FormProvider, useForm } from 'react-hook-form'
import { CompletedOrder } from './components/CompletedOrder'
import { CheckoutForm } from './style'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

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
  uf: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

type ConfirmOrderFormProps = zod.infer<typeof confirmOrderFormValidationSchema>

export function Checkout() {
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

  function handleCreateNewOrder(data: ConfirmOrderFormProps) {}

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
