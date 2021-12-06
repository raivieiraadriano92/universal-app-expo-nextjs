import { VerifyCodeScreenTemplate } from '@shared'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const VerifyCodePage: NextPage = () => {
  const router = useRouter()

  return (
    <VerifyCodeScreenTemplate
      goBack={() => router.back()}
      goToChangePassword={() => router.push('change-password')}
    />
  )
}

export default VerifyCodePage
