import { FunctionComponent, useCallback, useState } from 'react'

import {
  Button,
  Center,
  Heading,
  HStack,
  IconButton,
  Input,
  VStack
} from 'native-base'

import { AuthScreenTemplate } from './AuthScreenTemplate'
import Icons from './Icons'

type Props = {
  goBack(): void
  goToSignIn(): void
}

export const ChangePasswordScreenTemplate: FunctionComponent<Props> = ({
  goBack,
  goToSignIn
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const toggleShowPassword = useCallback(
    () => setShowPassword(!showPassword),
    [showPassword]
  )

  const toggleShowConfirmPassword = useCallback(
    () => setShowConfirmPassword(!showConfirmPassword),
    [showConfirmPassword]
  )

  return (
    <AuthScreenTemplate>
      <HStack alignItems="center">
        <IconButton
          borderRadius="full"
          colorScheme="gray"
          icon={<Icons.Back size={5} />}
          mr={2}
          onPress={goBack}
        />
        <Center flex={1}>
          <Heading size="lg">Change Password</Heading>
        </Center>
      </HStack>
      <VStack space={4}>
        <Input
          InputLeftElement={<Icons.Lock ml={4} size={5} />}
          InputRightElement={
            <IconButton
              borderRadius="full"
              colorScheme="gray"
              icon={<Icons.Eye hide={showPassword} size={5} />}
              mr={2}
              onPress={toggleShowPassword}
            />
          }
          placeholder="Password"
          type={showPassword ? 'text' : 'password'}
        />
        <Input
          InputLeftElement={<Icons.Lock ml={4} size={5} />}
          InputRightElement={
            <IconButton
              borderRadius="full"
              colorScheme="gray"
              icon={<Icons.Eye hide={showConfirmPassword} size={5} />}
              mr={2}
              onPress={toggleShowConfirmPassword}
            />
          }
          placeholder="Confirm Password"
          type={showConfirmPassword ? 'text' : 'password'}
        />
      </VStack>
      <Button onPress={goToSignIn}>Save Change</Button>
    </AuthScreenTemplate>
  )
}
