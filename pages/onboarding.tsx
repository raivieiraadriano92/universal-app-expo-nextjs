import { Welcome } from '@shared'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const OnboardingPage: NextPage = () => {
  const router = useRouter()

  return (
    <Welcome
      goToRegisterScreen={() => router.push('/register')}
      goToSignInScreen={() => router.push('/sign-in')}
    />
  )
}

export default OnboardingPage
