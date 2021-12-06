import { FunctionComponent } from 'react'

import { Box, HStack, IconButton } from 'native-base'

import Icons from './Icons'

type TabBarKeyItem = 'home' | 'search' | 'cart' | 'order' | 'account'

type TabBarItem = {
  key: TabBarKeyItem
  icon: keyof typeof Icons
}

type Props = {
  activeKey: TabBarKeyItem
  onPress(key: TabBarKeyItem): void
}

const items: TabBarItem[] = [
  { key: 'home', icon: 'Home' },
  { key: 'search', icon: 'Search' },
  { key: 'cart', icon: 'Cart' },
  { key: 'order', icon: 'List' },
  { key: 'account', icon: 'User' }
]

export const TabBar: FunctionComponent<Props> = ({ activeKey, onPress }) => (
  <Box bg="white" borderTopRadius="3xl" safeAreaBottom>
    <HStack justifyContent="space-between" p={4}>
      {items.map((item) => {
        const IconComponent = Icons[item.icon]

        return (
          <IconButton
            {...(activeKey === item.key ? { bg: 'primary.500' } : {})}
            borderRadius="full"
            icon={
              <IconComponent
                {...(activeKey === item.key ? { color: 'white' } : {})}
                size={5}
              />
            }
            key={item.key}
            onPress={() => onPress(item.key)}
            _hover={{
              bg: 'primary.500',
              _icon: { color: 'white' }
            }}
          />
        )
      })}
    </HStack>
  </Box>
)
