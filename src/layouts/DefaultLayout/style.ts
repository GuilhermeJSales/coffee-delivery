import styled from 'styled-components'

export const LayoutContainer = styled.div`
  .container {
    width: 100%;
    max-width: 70rem;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 72.5rem) {
      padding: 0 6.25rem;
    }

    @media (max-width: 48rem) {
      padding: 0 3.25rem;
    }

    @media (max-width: 35rem) {
      padding: 0 1.25rem;
    }
  }
`
