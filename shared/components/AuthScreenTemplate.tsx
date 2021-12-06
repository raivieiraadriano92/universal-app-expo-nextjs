import { FunctionComponent } from 'react'

import {
  Center,
  Container,
  HStack,
  IconButton,
  Text,
  VStack
} from 'native-base'

import Icons from './Icons'
import { Illustrations } from './Illustrations'

type Props = {
  useSignSocial?: boolean
}

export const AuthScreenTemplate: FunctionComponent<Props> = ({
  children,
  useSignSocial
}) => (
  <VStack alignItems="center" bg="primary.850" flex={1} px={5} safeArea>
    <Container
      flex={1}
      mb={{ base: 7, lg: 12 }}
      mt={{ base: 12, lg: 6 }}
      maxW="container.md"
      w="full"
    >
      <Center w="full">
        <Illustrations.Logo size={191} white />
      </Center>
      <Center
        bg="white"
        borderRadius="2xl"
        mt={{ base: 16, lg: 24 }}
        py={{ base: 8, lg: 10 }}
        px={5}
        w="full"
      >
        <VStack maxW="md" space={16} w="full">
          {children}
        </VStack>
      </Center>
      {useSignSocial && (
        <Center mt={10} w="full">
          <Text
            color="gray.50"
            opacity={0.6}
            textAlign="center"
            variant="caption1"
          >
            Or sign in with
          </Text>
          <HStack mt={5} space={4}>
            <IconButton
              borderRadius="full"
              colorScheme="gray"
              icon={<Icons.Facebook color="white" size={6} />}
            />
            <IconButton
              borderRadius="full"
              colorScheme="gray"
              icon={<Icons.Twitter color="white" size={6} />}
            />
          </HStack>
        </Center>
      )}
    </Container>
  </VStack>
)
