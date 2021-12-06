import { RegisterScreenTemplate } from '@shared'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const RegisterPage: NextPage = () => {
  const router = useRouter()

  return <RegisterScreenTemplate goToSignIn={() => router.push('sign-in')} />
}

export default RegisterPage
