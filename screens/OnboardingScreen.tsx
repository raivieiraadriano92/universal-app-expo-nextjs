import { Welcome } from '@shared'
import { RootStackScreenComponent } from 'navigation'

export const OnboardingScreen: RootStackScreenComponent<'Onboarding'> = ({
  navigation
}) => (
  <Welcome
    goToRegisterScreen={() => navigation.navigate('Register')}
    goToSignInScreen={() => navigation.navigate('SignIn')}
  />
)
