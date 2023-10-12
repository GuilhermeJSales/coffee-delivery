import { Input } from '../../../../components/Input'

export function OrderAddressForm() {
  return (
    <>
      <Input placeholder="CEP" type="number" className="cep" />
      <Input placeholder="Rua" type="text" className="street" />
      <Input placeholder="Número" type="text" className="number" />
      <Input
        placeholder="Complemento"
        className="complement"
        optional={'opcional'}
        type="text"
      />
      <Input placeholder="Bairro" type="text" className="neighborhood" />
      <Input placeholder="Cidade" type="text" className="city" />
      <Input placeholder="UF" type="" className="uf" />
    </>
  )
}
