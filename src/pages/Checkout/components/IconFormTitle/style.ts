import { styled } from 'styled-components'

export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`
interface IconContainerProps {
  $iconColor: string
}

export const IconContainer = styled.div<IconContainerProps>`
  color: ${({ $iconColor }) => $iconColor};
`
