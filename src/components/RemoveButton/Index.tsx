import { Trash } from '@phosphor-icons/react'
import { DeleteCoffee } from './style'

export function RemoveButton() {
  return (
    <DeleteCoffee>
      <Trash size={16} />
      REMOVER
    </DeleteCoffee>
  )
}
