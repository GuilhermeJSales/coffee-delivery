import { useFormContext } from 'react-hook-form'
import Input from '../../../../components/Input'

export interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function OrderAddressForm() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

  return (
    <>
      <Input
        id="cep"
        placeholder="CEP"
        type="text"
        className="cep"
        {...register('cep')}
        error={errors.cep?.message}
      />
      <Input
        id="street"
        placeholder="Rua"
        type="text"
        className="street"
        {...register('street')}
        error={errors.street?.message}
      />
      <Input
        id="number"
        placeholder="Número"
        type="text"
        className="number"
        {...register('number')}
        error={errors.number?.message}
      />
      <Input
        id="complement"
        placeholder="Complemento"
        className="complement"
        optional={'opcional'}
        type="text"
        {...register('complement')}
      />
      <Input
        id="neighborhood"
        placeholder="Bairro"
        type="text"
        className="neighborhood"
        {...register('neighborhood')}
        error={errors.neighborhood?.message}
      />
      <Input
        id="city"
        placeholder="Cidade"
        type="text"
        className="city"
        {...register('city')}
        error={errors.city?.message}
      />
      <Input
        id="uf"
        placeholder="UF"
        type="text"
        className="uf"
        {...register('uf')}
        error={errors.uf?.message}
      />
    </>
  )
}
