import { ForgotPasswordScreenTemplate } from '@shared'
import { RootStackScreenComponent } from 'navigation'

export const ForgotPasswordScreen: RootStackScreenComponent<
  'ForgotPassword'
> = ({ navigation }) => (
  <ForgotPasswordScreenTemplate
    goBack={() => navigation.goBack()}
    goToVerifyCode={() => navigation.navigate('VerifyCode')}
  />
)
