import { Trash } from '@phosphor-icons/react'
import { DeleteCoffee } from './style'

interface RemoveButtonProps {
  onRemove: () => void
}

export function RemoveButton({ onRemove }: RemoveButtonProps) {
  return (
    <DeleteCoffee onClick={onRemove}>
      <Trash size={16} />
      REMOVER
    </DeleteCoffee>
  )
}
