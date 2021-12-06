import { FunctionComponent, useCallback, useState } from 'react'

import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Input,
  Text,
  VStack
} from 'native-base'
import { TouchableOpacity } from 'react-native'

import { AuthScreenTemplate } from './AuthScreenTemplate'
import Icons from './Icons'

type Props = {
  goToForgotPassword(): void
  goToRegister(): void
}

export const SignInScreenTemplate: FunctionComponent<Props> = ({
  goToForgotPassword,
  goToRegister
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = useCallback(
    () => setShowPassword(!showPassword),
    [showPassword]
  )

  return (
    <AuthScreenTemplate useSignSocial>
      <HStack justifyContent="space-between" px={{ base: 5, lg: 10 }}>
        <Box
          bg={{
            linearGradient: {
              colors: ['pink.500', 'white', 'white', 'white'],
              start: [1, 1],
              end: [1, 0]
            }
          }}
        >
          <Heading size="xl">Sign in</Heading>
        </Box>
        <TouchableOpacity onPress={goToRegister}>
          <Box
            bg={{
              linearGradient: {
                colors: ['pink.500', 'white', 'white', 'white'],
                start: [1, 1],
                end: [1, 0]
              }
            }}
          >
            <Heading color="gray.500" opacity={0.5} size="xl">
              Register
            </Heading>
          </Box>
        </TouchableOpacity>
      </HStack>
      <VStack space={4}>
        <Input
          InputLeftElement={<Icons.Email ml={4} size={5} />}
          placeholder="Email"
        />
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
        <TouchableOpacity onPress={goToForgotPassword}>
          <Text textAlign="right" variant="caption1">
            Forgot password?
          </Text>
        </TouchableOpacity>
      </VStack>
      <Button onPress={() => {}}>Sign In</Button>
    </AuthScreenTemplate>
  )
}
