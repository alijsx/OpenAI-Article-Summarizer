import React from 'react'
import {
    Box,
    Container,
    Stack,
    Text,
    Link,
    useColorModeValue,
  } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box className='footer'
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>
          <Link href={'#'}></Link>
          <Link href={'#'}></Link>
          <Link href={'#'}></Link>
          <Link href={'#'}></Link>
        </Stack>
        <Text>   © Copyright {new Date().getFullYear()} <a href="https://aliaalam.surge.sh/">Ali Aalam</a></Text>
      </Container>
    </Box>
  )
}
