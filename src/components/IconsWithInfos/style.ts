import { styled } from 'styled-components'

export const IconsWithInfosContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface IconContainerProps {
  $iconBg: string
}

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  color: ${({ theme }) => theme.color.white};
  background: ${({ $iconBg }) => $iconBg};
`
