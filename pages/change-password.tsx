import { ChangePasswordScreenTemplate } from '@shared'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const ChangePasswordPage: NextPage = () => {
  const router = useRouter()

  return (
    <ChangePasswordScreenTemplate
      goBack={() => router.back()}
      goToSignIn={() => router.push('sign-in')}
    />
  )
}

export default ChangePasswordPage
