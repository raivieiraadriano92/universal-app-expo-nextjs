import { FunctionComponent } from 'react'

import {
  Button,
  Center,
  Heading,
  HStack,
  IconButton,
  Input,
  Text,
  VStack
} from 'native-base'

import { AuthScreenTemplate } from './AuthScreenTemplate'
import Icons from './Icons'

type Props = {
  goBack(): void
  goToVerifyCode(): void
}

export const ForgotPasswordScreenTemplate: FunctionComponent<Props> = ({
  goBack,
  goToVerifyCode
}) => (
  <AuthScreenTemplate>
    <VStack space={3}>
      <HStack alignItems="center">
        <IconButton
          borderRadius="full"
          colorScheme="gray"
          icon={<Icons.Back size={5} />}
          onPress={goBack}
          mr={2}
        />
        <Center flex={1}>
          <Heading size="lg">Forgot Password</Heading>
        </Center>
      </HStack>
      <Text color="gray.500" px={5} textAlign="center" variant="body2">
        Please enter your email, we will send an verify code.
      </Text>
    </VStack>
    <Input
      InputLeftElement={<Icons.Email ml={4} size={5} />}
      placeholder="Email"
    />
    <Button onPress={goToVerifyCode}>Verify</Button>
  </AuthScreenTemplate>
)
