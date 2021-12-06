import { FunctionComponent, useCallback, useState } from 'react'

import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import { NativeBaseProvider } from 'native-base'

import Poppins_900Black from '../../assets/fonts/Poppins-Black.ttf'
import Poppins_700Bold from '../../assets/fonts/Poppins-Bold.ttf'
import Poppins_800ExtraBold from '../../assets/fonts/Poppins-ExtraBold.ttf'
import Poppins_200ExtraLight from '../../assets/fonts/Poppins-ExtraLight.ttf'
import Poppins_300Light from '../../assets/fonts/Poppins-Light.ttf'
import Poppins_500Medium from '../../assets/fonts/Poppins-Medium.ttf'
import Poppins_400Regular from '../../assets/fonts/Poppins-Regular.ttf'
import Poppins_600SemiBold from '../../assets/fonts/Poppins-SemiBold.ttf'
import Poppins_100Thin from '../../assets/fonts/Poppins-Thin.ttf'
import { theme } from '../theme'

export const AppWrapper: FunctionComponent = ({ children }) => {
  const [isReady, setIsReady] = useState(false)

  const loadFonts = useCallback(async () => {
    try {
      await Font.loadAsync({
        Poppins_100Thin,
        Poppins_200ExtraLight,
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
        Poppins_800ExtraBold,
        Poppins_900Black
      })
    } catch (err) {}
  }, [])

  const loadResources = useCallback(async () => {
    await loadFonts()
    // other resources ...
  }, [loadFonts])

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadResources}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    )
  }

  return (
    <NativeBaseProvider
      config={{
        dependencies: {
          'linear-gradient': require('expo-linear-gradient').LinearGradient
        },
        enableRem: true,
        suppressColorAccessibilityWarning: true
      }}
      {...{ theme }}
    >
      {children}
    </NativeBaseProvider>
  )
}
