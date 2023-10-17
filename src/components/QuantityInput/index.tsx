import { Minus, Plus } from '@phosphor-icons/react'
import { IconWrapper, QuantityInputContainer } from './style'

interface QuantityInputProps {
  $size?: 'medium' | 'small'
  increase: () => void
  decrease: () => void
  quantity: number
}

export function QuantityInput({
  increase,
  decrease,
  quantity,
  $size = 'medium',
}: QuantityInputProps) {
  return (
    <QuantityInputContainer $size={$size}>
      <IconWrapper disabled={quantity <= 1} onClick={decrease}>
        <Minus size={14} />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={increase}>
        <Plus size={14} />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
