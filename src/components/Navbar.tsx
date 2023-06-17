import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom'

const NavLink = ({ children, to = "/" }: { children: ReactNode, to: string }) => {
  return (
    <Link
      to={to}
      as={RouterLink}
      px={2}
      py={1}
      rounded={"md"}
      _hover={{ textDecoration: "none", bg: useColorModeValue("gray.200", "gray.700") }}>
      {children}
    </Link>
  )
}

export default function Navbar() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack spacing={8} alignItems={'center'}>
          {/* <Box>Logo</Box> */}
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
            <NavLink key={"home"} to={"/"}>Home</NavLink>
            <NavLink key={"amc"} to={"/amc"}>AMC</NavLink>
          </HStack>
        </HStack>
      </Flex>

    </Box>

  )
}
