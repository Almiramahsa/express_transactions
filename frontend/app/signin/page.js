'use client';
import { useState, useEffect } from 'react';
import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Button, Heading, Text, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router'; // Menggunakan useRouter dari next/router

import api from '../../services/api';

const Signin = () => {
  const [show, setShow] = useState(false);
  const [passwordType, setPasswordType] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const schema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const handleCheckbox = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleLogin = async (email, password) => {
    try {
      const response = await api.loginUser(email, password);
      const data = response.data.data;

      toast({
        title: 'Login Success, redirecting...',
        status: 'success',
        position: 'top',
        isClosable: true,
        duration: 1500,
      });

      // Store user token
      Cookies.set('token', data.token);

      setTimeout(() => {
        router.push('/mainpage');
      }, 2000);
    } catch (error) {
      toast({
        title: 'Login failed, please try again.',
        status: 'error',
        position: 'top',
        isClosable: true,
        duration: 1500,
      });
    }
  };

  const onSubmit = (data) => {
    handleLogin(data.email, data.password);
  };

  useEffect(() => {
    if (localStorage.email) {
      setEmail(localStorage.email);
      setPassword(localStorage.password);
      setIsChecked(localStorage.isChecked === 'true');
    }

    // Check if user is already logged in
    if (Cookies.get('token')) {
      toast({
        position: 'top',
        title: 'You are already logged in',
        status: 'warning',
        duration: '2000',
        isClosable: true,
      });
      router.push('/mainpage');
    }
  }, []);

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={'gray.50'}>
      <Box rounded={'lg'} bg={'white'} boxShadow={'lg'} p={8} w={'md'}>
        <Stack spacing={4}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <Text fontSize={'md'} color={'gray.600'}>
            Unlock a shopping experience like no other!✌️
          </Text>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl id="email" isInvalid={!!errors.email}>
              <FormLabel>Email address</FormLabel>
              <Input type="email" {...register('email')} value={email} onChange={(e) => setEmail(e.target.value)} />
              {errors.email && (
                <Text fontSize="sm" color="red.500">
                  {errors.email.message}
                </Text>
              )}
            </FormControl>

            <FormControl id="password" isInvalid={!!errors.password}>
              <FormLabel>Password</FormLabel>
              <Input type={show ? 'text' : 'password'} {...register('password')} value={password} onChange={(e) => setPassword(e.target.value)} />
              {errors.password && (
                <Text fontSize="sm" color="red.500">
                  {errors.password.message}
                </Text>
              )}
            </FormControl>

            <Checkbox isChecked={isChecked} onChange={handleCheckbox}>
              Remember me
            </Checkbox>

            <Button type="submit" colorScheme="blue" size="lg" fontSize={'md'}>
              Sign In
            </Button>
          </form>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Signin;
