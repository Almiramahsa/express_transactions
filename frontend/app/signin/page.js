'use client';
import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Link as ChakraLink, Button, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function SimpleCard() {
  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <ChakraLink color={'blue.400'}>features</ChakraLink> ✌️
          </Text>
        </Stack>
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <NextLink href={'/forgot-password'}>
                  <ChakraLink color={'blue.400'}>Forgot password?</ChakraLink>
                </NextLink>
              </Stack>
              <NextLink href={'/mainpage'}>
                <Button
                  as={ChakraLink}
                  href={'/mainpage'}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                >
                  Sign in
                </Button>
              </NextLink>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
