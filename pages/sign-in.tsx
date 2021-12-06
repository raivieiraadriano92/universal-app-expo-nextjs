import { SignInScreenTemplate } from '@shared'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const SignInPage: NextPage = () => {
  const router = useRouter()

  return (
    <SignInScreenTemplate
      goToForgotPassword={() => router.push('/forgot-password')}
      goToRegister={() => router.push('/register')}
    />
  )
}

export default SignInPage
