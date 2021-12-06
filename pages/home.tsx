import { TabBar } from '@shared'
import { Box } from 'native-base'
import type { NextPage } from 'next'

const HomePage: NextPage = () => (
  <Box bg="gray.300" flex={1} justifyContent="flex-end">
    <TabBar activeKey="home" onPress={() => {}} />
  </Box>
)

export default HomePage
