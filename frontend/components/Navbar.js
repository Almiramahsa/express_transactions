import React, { useState } from 'react';
import { Box, Container, Flex, Icon, Avatar, HStack, Link, IconButton, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useDisclosure, useColorModeValue, Stack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FiShoppingCart, FiLogOut } from 'react-icons/fi';

const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Container as={Stack} maxW={'6xl'} py={2}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton size={'md'} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={'Open Menu'} display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen} />
            <HStack spacing={8} alignItems={'center'}>
              <Box>Logo</Box>
              <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </HStack>
            </HStack>
            <Flex alignItems={'center'}>
              <Menu isOpen={isMenuOpen} onClose={() => setMenuOpen(false)}>
                <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0} onMouseEnter={() => setMenuOpen(true)} onMouseLeave={() => setMenuOpen(true)}>
                  <Avatar size={'sm'} src={'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'} />
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Link
                      _hover={{
                        textDecoration: 'none',
                        color: useColorModeValue('blue.300', 'blue.200'),
                      }}
                      href={'/signin'}
                    >
                      Profile
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      _hover={{
                        textDecoration: 'none',
                        color: useColorModeValue('blue.300', 'blue.200'),
                      }}
                      href={'/signin'}
                    >
                      Transactions
                    </Link>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Flex alignItems="center">
                      <Icon as={FiLogOut} boxSize={5} marginRight={2} />
                      <Link
                        _hover={{
                          textDecoration: 'none',
                          color: useColorModeValue('blue.300', 'blue.200'),
                        }}
                        href={'/'}
                      >
                        Logout
                      </Link>
                    </Flex>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
        </Container>
      </Box>
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </>
  );
}
