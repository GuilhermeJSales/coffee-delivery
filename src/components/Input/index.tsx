import { InputHTMLAttributes } from 'react'
import { InputContainer, InputItem, Optional } from './style'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  optional?: string
}

export function Input({ optional, className, ...props }: InputProps) {
  return (
    <InputContainer className={className}>
      <InputItem {...props} />
      {optional && <Optional>{optional}</Optional>}
    </InputContainer>
  )
}
