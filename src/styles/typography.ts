import { styled } from 'styled-components'

export interface TitleTextProps {
  color?: 'title' | 'text'
  size?: 'xl' | 'l' | 'm' | 's' | 'xs'
  weight?: string | number
}

export interface RegularTextProps {
  color?: 'subtitle' | 'text'
  size?: 'l' | 'm' | 's' | 'xs'
  weight?: string | number
}

export const TitleText = styled.h1<TitleTextProps>`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme, size }) => theme.fontSizes[`title-${size ?? 'm'}`]};
  font-weight: ${({ weight }) => weight ?? 800};
  color: ${({ theme, color }) => theme.color[`base-${color ?? 'title'}`]};
  line-height: 130%;
`

export const RegularText = styled.p<RegularTextProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme, size }) => theme.fontSizes[`text-${size ?? 'm'}`]};
  font-weight: ${({ weight }) => weight ?? 400};
  color: ${({ theme, color }) => theme.color[`base-${color ?? 'text'}`]};
  line-height: 130%;
`
