import { SignInScreenTemplate } from '@shared'
import { RootStackScreenComponent } from 'navigation'

export const SignInScreen: RootStackScreenComponent<'SignIn'> = ({
  navigation
}) => (
  <SignInScreenTemplate
    goToForgotPassword={() => navigation.navigate('ForgotPassword')}
    goToRegister={() => navigation.navigate('Register')}
  />
)
