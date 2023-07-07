import {
  Box,
  ChakraProvider,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabProps,
} from '@chakra-ui/react'
import { MyButtons } from './MyButtons'
import { MySpinners } from './MySpinners'
import { MyModal } from './MyModal'

const tabStyle: TabProps = {
  fontWeight: 'bold',
  fontSize: 'xl',
}

export const MyApp = () => {
  return (
    <ChakraProvider>
      <Box bgColor={'#fff'} p={8}>
        <Tabs variant='enclosed' colorScheme={'teal'}>
          <TabList justifyContent={'center'} mb={4}>
            <Tab {...tabStyle}>Buttons</Tab>
            <Tab {...tabStyle}>Spinners</Tab>
            <Tab {...tabStyle}>Modal</Tab>
          </TabList>

          <Box textAlign={'center'}>
            Bootstrap + jQueryな環境の中で
            <br />
            chakra-ui/reactを利用可能にしています
          </Box>

          <TabPanels>
            <TabPanel>
              <MyButtons />
            </TabPanel>
            <TabPanel>
              <MySpinners />
            </TabPanel>
            <TabPanel>
              <MyModal />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </ChakraProvider>
  )
}
