import { RegisterScreenTemplate } from '@shared'
import { RootStackScreenComponent } from 'navigation'

export const RegisterScreen: RootStackScreenComponent<'Register'> = ({
  navigation
}) => (
  <RegisterScreenTemplate goToSignIn={() => navigation.navigate('SignIn')} />
)
