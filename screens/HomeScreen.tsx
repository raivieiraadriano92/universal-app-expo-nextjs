import { TabBar } from '@shared'
import { Box } from 'native-base'
import { RootStackScreenComponent } from 'navigation'

export const HomeScreen: RootStackScreenComponent<'Home'> = ({
  navigation
}) => (
  <Box bg="gray.300" flex={1} justifyContent="flex-end">
    <TabBar activeKey="home" onPress={() => {}} />
  </Box>
)
