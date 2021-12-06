import { FunctionComponent, useCallback, useRef, useState } from 'react'

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
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData
} from 'react-native'

import { AuthScreenTemplate } from './AuthScreenTemplate'
import Icons from './Icons'

type Props = {
  goBack(): void
  goToChangePassword(): void
}

export const VerifyCodeScreenTemplate: FunctionComponent<Props> = ({
  goBack,
  goToChangePassword
}) => {
  const refInput0 = useRef<TextInput>()

  const refInput1 = useRef<TextInput>()

  const refInput2 = useRef<TextInput>()

  const refInput3 = useRef<TextInput>()

  const [code, setCode] = useState<string[]>([])

  const handleChange = useCallback(
    (index: number, value: string) => {
      const copyCode = [...code]

      copyCode[index] = value

      setCode(copyCode)

      if (value) {
        switch (index) {
          case 0:
            refInput1.current && refInput1.current.focus()

            return

          case 1:
            refInput2.current && refInput2.current.focus()

            return

          case 2:
            refInput3.current && refInput3.current.focus()
        }
      }
    },
    [code]
  )

  const handleKeyPress = useCallback(
    (e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
      if (e.nativeEvent.key === 'Backspace' && !code[index]) {
        switch (index) {
          case 1:
            refInput0.current && refInput0.current.focus()

            return

          case 2:
            refInput1.current && refInput1.current.focus()

            return

          case 3:
            refInput2.current && refInput2.current.focus()
        }
      }
    },
    [code]
  )

  return (
    <AuthScreenTemplate>
      <VStack space={3}>
        <HStack alignItems="center">
          <IconButton
            borderRadius="full"
            colorScheme="gray"
            icon={<Icons.Back size={5} />}
            mr={2}
            onPress={goBack}
          />
          <Center flex={1}>
            <Heading size="lg">Verify Code</Heading>
          </Center>
        </HStack>
        <Text color="gray.500" px={5} textAlign="center" variant="body2">
          Please enter verify code that we’ve sent to your email.
        </Text>
      </VStack>
      <HStack justifyContent="center" space={3}>
        <Input
          flex={1}
          keyboardType="number-pad"
          maxLength={1}
          maxW={13}
          onChangeText={(value) => handleChange(0, value)}
          ref={refInput0}
          textAlign="center"
          value={code[0] || ''}
        />
        <Input
          flex={1}
          keyboardType="number-pad"
          maxLength={1}
          maxW={13}
          onChangeText={(value) => handleChange(1, value)}
          onKeyPress={(e) => handleKeyPress(e, 1)}
          ref={refInput1}
          textAlign="center"
          value={code[1] || ''}
        />
        <Input
          flex={1}
          keyboardType="number-pad"
          maxLength={1}
          maxW={13}
          onChangeText={(value) => handleChange(2, value)}
          onKeyPress={(e) => handleKeyPress(e, 2)}
          ref={refInput2}
          textAlign="center"
          value={code[2] || ''}
        />
        <Input
          flex={1}
          keyboardType="number-pad"
          maxLength={1}
          maxW={13}
          onChangeText={(value) => handleChange(3, value)}
          onKeyPress={(e) => handleKeyPress(e, 3)}
          ref={refInput3}
          textAlign="center"
          value={code[3] || ''}
        />
      </HStack>
      <Button onPress={goToChangePassword}>Verify</Button>
    </AuthScreenTemplate>
  )
}
