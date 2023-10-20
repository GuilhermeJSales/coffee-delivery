import { forwardRef, InputHTMLAttributes } from 'react'
import {
  InputContainer,
  InputDiv,
  InputError,
  InputItem,
  Optional,
} from './style'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  optional?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ optional, error, className, ...props }, ref) => {
    return (
      <InputContainer className={className}>
        <InputDiv>
          <InputItem {...props} ref={ref} />
          {optional && <Optional>{optional}</Optional>}
        </InputDiv>
        {error && <InputError>{error}</InputError>}
      </InputContainer>
    )
  },
)

Input.displayName = 'Input'

export default Input
