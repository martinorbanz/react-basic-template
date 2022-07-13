import React from 'react'
import styled from 'styled-components'

const View = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const App: React.FC = () => {
  return (
    <View>
      <h1>Greetings, humans.</h1>
    </View>
  )
}
