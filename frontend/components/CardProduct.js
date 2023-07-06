'use client';

import { Flex, Box, Image, Badge, useColorModeValue, Icon, Tooltip } from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
const data = {
  isNew: true,
  imageURL: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
  name: 'Wayfarer Classic',
  price: 450.0,
};

function Product() {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box bg={useColorModeValue('white', 'gray.400')} maxW="sm" borderWidth="1px" rounded="lg" shadow="lg" position="relative">
        <Image src={data.imageURL} alt={`Picture of ${data.name}`} roundedTop="lg" />

        <Box p="6">
          <Flex mt="1" justifyContent="space-between" alignItems="center">
            <Box fontSize="2xl" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
              {data.name}
            </Box>
            <Tooltip label="Add to cart" bg="white" placement={'top'} color={'gray.800'} fontSize={'1.2em'}>
              <a href={'#'} style={{ display: 'flex' }}>
                <Icon
                  _hover={{
                    color: useColorModeValue('blue.300', 'blue.200'),
                  }}
                  as={FiShoppingCart}
                  h={7}
                  w={7}
                  alignSelf={'center'}
                />
              </a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="md" pr={4}>
                Rp
              </Box>
              {data.price.toFixed(3)}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default Product;
