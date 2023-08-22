import { ReactNode } from 'react'
import { IconContainer, IconsWithInfosContainer } from './style'

interface iconWithInfosProps {
  icon: ReactNode
  text: string | ReactNode
  iconBg: string
}

export default function iconWithInfos({
  icon,
  text,
  iconBg,
}: iconWithInfosProps) {
  return (
    <IconsWithInfosContainer>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </IconsWithInfosContainer>
  )
}
