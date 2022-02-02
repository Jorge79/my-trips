import styled from 'styled-components'

export const Content = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  height: 100vh;
  max-width: var(--container);
  margin: auto;
  text-align: center;
`

export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--large);
`

export const Body = styled.div`
  // serve para estilos do body
  // p, a, ul, li, blockquote
  p {
    font-size: var(--medium);
    line-height: var(--medium);
  }
`
