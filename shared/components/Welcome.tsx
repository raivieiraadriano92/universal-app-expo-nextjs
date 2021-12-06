import { FunctionComponent } from 'react'

import {
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Text,
  useBreakpointValue,
  VStack
} from 'native-base'

import { Illustrations } from './Illustrations'

type Props = {
  goToRegisterScreen(): void
  goToSignInScreen(): void
}

export const Welcome: FunctionComponent<Props> = ({
  goToRegisterScreen,
  goToSignInScreen
}) => {
  const isMdScreenOrLess = useBreakpointValue({ base: true, lg: false })

  return (
    <VStack alignItems="center" flex={1} p={6} safeArea>
      <Container flex={1} maxW="md" w="full">
        <VStack flex={1} space={10} w="full">
          {!isMdScreenOrLess && (
            <Center>
              <Illustrations.Logo size={158} />
            </Center>
          )}
          <Center alignItems={{ base: 'flex-start', lg: 'center' }} flex={1}>
            <Illustrations.Hi size={427} />
          </Center>
          <VStack space={4} w="full">
            {isMdScreenOrLess && <Illustrations.LogoIcon size={48} />}
            <HStack
              flexWrap="wrap"
              justifyContent={{
                base: 'flex-start',
                lg: 'center'
              }}
            >
              <Heading size="4xl">{`Welcome to `}</Heading>
              <HStack>
                <Heading size="4xl">Shop</Heading>
                <Heading color="primary.500" size="4xl">
                  per
                </Heading>
              </HStack>
            </HStack>
            <Text
              color="gray.500"
              textAlign={{ base: 'left', lg: 'center' }}
              variant="body2"
            >
              {
                "Make it your own. As you're setting up your online store, you have the ability to customize."
              }
            </Text>
          </VStack>
          <VStack space={3} w="full">
            <Button colorScheme="secondary" onPress={goToSignInScreen}>
              Sign In
            </Button>
            <Button
              colorScheme="secondary"
              onPress={goToRegisterScreen}
              variant="outline"
            >
              Register
            </Button>
          </VStack>
        </VStack>
      </Container>
    </VStack>
  )
}
