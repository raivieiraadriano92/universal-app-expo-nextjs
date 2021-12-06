import { ChangePasswordScreenTemplate } from '@shared'
import { RootStackScreenComponent } from 'navigation'

export const ChangePasswordScreen: RootStackScreenComponent<
  'ChangePassword'
> = ({ navigation }) => {
  return (
    <ChangePasswordScreenTemplate
      goBack={() => navigation.goBack()}
      goToSignIn={() => navigation.navigate('SignIn')}
    />
  )
}
