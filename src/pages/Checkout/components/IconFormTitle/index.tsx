import { RegularText } from '../../../../styles/typography'
import { IconContainer, TitleContainer } from './style'
import { ReactNode } from 'react'

interface IconTitleProps {
  titleForm: string
  text: string
  icon: ReactNode
  $iconColor: string
}

export function IconFormTitle({
  titleForm,
  icon,
  text,
  $iconColor,
}: IconTitleProps) {
  return (
    <TitleContainer>
      <IconContainer $iconColor={$iconColor}>{icon}</IconContainer>
      <div>
        <RegularText size="m" color="subtitle">
          {titleForm}
        </RegularText>
        <RegularText size="s" color="text">
          {text}
        </RegularText>
      </div>
    </TitleContainer>
  )
}
