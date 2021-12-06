import { ForgotPasswordScreenTemplate } from '@shared'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const ForgotPasswordPage: NextPage = () => {
  const router = useRouter()

  return (
    <ForgotPasswordScreenTemplate
      goBack={() => router.back()}
      goToVerifyCode={() => router.push('/verify-code')}
    />
  )
}

export default ForgotPasswordPage
