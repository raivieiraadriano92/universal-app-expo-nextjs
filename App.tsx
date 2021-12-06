import { FunctionComponent } from 'react'

import { AppWrapper } from '@shared'
import { StatusBar } from 'expo-status-bar'

import { RootStackNavigator } from './navigation'

const App: FunctionComponent = () => {
  return (
    <AppWrapper>
      <RootStackNavigator />
      <StatusBar style="light" />
    </AppWrapper>
  )
}

export default App
