import { Box, BoxProps, Spinner, Stack } from '@chakra-ui/react'
import React from 'react'

const DemoBox = (props: BoxProps) => {
  return (
    <Box
      border={'1px solid #ddd'}
      borderColor={'gray.200'}
      rounded={'lg'}
      p={8}
    >
      {props.children}
    </Box>
  )
}
export const MySpinners = () => {
  return (
    <Stack spacing={8}>
      <DemoBox>
        <Spinner />
      </DemoBox>
      <DemoBox>
        <Spinner color='red.500' />
      </DemoBox>

      <DemoBox>
        <Stack direction='row' spacing={4}>
          <Spinner size='xs' />
          <Spinner size='sm' />
          <Spinner size='md' />
          <Spinner size='lg' />
          <Spinner size='xl' />
        </Stack>
      </DemoBox>

      <DemoBox>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      </DemoBox>
    </Stack>
  )
}
