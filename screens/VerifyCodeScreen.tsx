import { VerifyCodeScreenTemplate } from '@shared'
import { RootStackScreenComponent } from 'navigation'

export const VerifyCodeScreen: RootStackScreenComponent<'VerifyCode'> = ({
  navigation
}) => (
  <VerifyCodeScreenTemplate
    goBack={() => navigation.goBack()}
    goToChangePassword={() => navigation.navigate('ChangePassword')}
  />
)
