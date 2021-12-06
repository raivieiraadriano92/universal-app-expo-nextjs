import { FunctionComponent, useCallback, useState } from 'react'

import {
  Box,
  Button,
  Checkbox,
  Heading,
  HStack,
  IconButton,
  Input,
  Select,
  Text,
  VStack
} from 'native-base'
import { TouchableOpacity } from 'react-native'

import { AuthScreenTemplate } from './AuthScreenTemplate'
import Icons from './Icons'

type Props = {
  goToSignIn(): void
}

const countries = [
  { label: 'United State', value: 'USA' },
  { label: 'Brazil', value: 'BR' }
]

export const RegisterScreenTemplate: FunctionComponent<Props> = ({
  goToSignIn
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = useCallback(
    () => setShowPassword(!showPassword),
    [showPassword]
  )

  return (
    <AuthScreenTemplate>
      <HStack justifyContent="space-between" px={{ base: 5, lg: 10 }}>
        <TouchableOpacity onPress={goToSignIn}>
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
              Sign in
            </Heading>
          </Box>
        </TouchableOpacity>
        <Box
          bg={{
            linearGradient: {
              colors: ['pink.500', 'white', 'white', 'white'],
              start: [1, 1],
              end: [1, 0]
            }
          }}
        >
          <Heading size="xl">Register</Heading>
        </Box>
      </HStack>
      <VStack space={4}>
        <Input
          InputLeftElement={<Icons.Email ml={4} size={5} />}
          placeholder="Email"
        />
        <Input
          InputLeftElement={<Icons.Phone ml={4} size={5} />}
          placeholder="Phone number"
        />
        <Select
          dropdownIcon={<Icons.Dropdown mr={4} size={5} />}
          placeholder="Country"
          _selectedItem={{
            bg: 'gray.100'
          }}
        >
          {countries.map((country) => (
            <Select.Item
              key={country.value}
              label={country.label}
              value={country.value}
            />
          ))}
        </Select>
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
        <HStack alignItems="center">
          <Checkbox value="ok" my={2}>
            I accepted
          </Checkbox>
          <TouchableOpacity>
            <Text variant="caption1">{' Terms & Privacy Policy'}</Text>
          </TouchableOpacity>
        </HStack>
      </VStack>
      <Button onPress={() => {}}>Register</Button>
    </AuthScreenTemplate>
  )
}
