import { FunctionComponent } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackScreenProps
} from '@react-navigation/native-stack'
import { useTheme } from 'native-base'

import {
  ChangePasswordScreen,
  ForgotPasswordScreen,
  HomeScreen,
  OnboardingScreen,
  RegisterScreen,
  SignInScreen,
  VerifyCodeScreen
} from '../screens'

type RootStackParamList = {
  ChangePassword: undefined
  ForgotPassword: undefined
  Home: undefined
  Onboarding: undefined
  Register: undefined
  SignIn: undefined
  VerifyCode: undefined
}

export type RootStackScreenComponent<
  RouteName extends keyof RootStackParamList
> = FunctionComponent<NativeStackScreenProps<RootStackParamList, RouteName>>

const NativeStackNavigator = createNativeStackNavigator<RootStackParamList>()

export const RootStackNavigator: FunctionComponent = () => {
  const theme = useTheme()

  return (
    <NavigationContainer>
      <NativeStackNavigator.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          contentStyle: { backgroundColor: theme.colors.white },
          headerShown: false
        }}
      >
        <NativeStackNavigator.Screen
          component={OnboardingScreen}
          name="Onboarding"
        />
        <NativeStackNavigator.Group
          screenOptions={{
            contentStyle: { backgroundColor: theme.colors.primary[850] }
          }}
        >
          <NativeStackNavigator.Screen
            component={ChangePasswordScreen}
            name="ChangePassword"
          />
          <NativeStackNavigator.Screen
            component={ForgotPasswordScreen}
            name="ForgotPassword"
          />
          <NativeStackNavigator.Screen component={HomeScreen} name="Home" />
          <NativeStackNavigator.Screen
            component={RegisterScreen}
            name="Register"
          />
          <NativeStackNavigator.Screen component={SignInScreen} name="SignIn" />
          <NativeStackNavigator.Screen
            component={VerifyCodeScreen}
            name="VerifyCode"
          />
        </NativeStackNavigator.Group>
      </NativeStackNavigator.Navigator>
    </NavigationContainer>
  )
}
