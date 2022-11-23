import NextLink from 'next/link';
import React from 'react';

import {
  Box,
  Button,
  chakra,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  Link,
  Spacer,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';

import { AiFillHome, AiOutlineInbox, AiOutlineMenu } from 'react-icons/ai';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import { FaMoon, FaSun } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import FeaturesDropDown from './FeaturesDropDown';

export interface IMainHeader {
  logoText: string;
  children?: React.ReactNode;
}

const MainHeader = ({ logoText }: IMainHeader) => {
  const bg = useColorModeValue('white', 'gray.800');
  const cl = useColorModeValue('gray.800', 'white');
  const mobileNav = useDisclosure();
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? 'flex' : 'none'}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
        Dashboard
      </Button>
      <Button
        w="full"
        variant="solid"
        colorScheme="brand"
        leftIcon={<AiOutlineInbox />}
      >
        Inbox
      </Button>
      <Button w="full" variant="ghost" leftIcon={<BsFillCameraVideoFill />}>
        Videos
      </Button>
    </VStack>
  );

  return (
    <React.Fragment>
      <chakra.header
        h="full"
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <NextLink href="/" passHref legacyBehavior>
            <Link
              display="flex"
              alignItems="center"
              _hover={{ textDecoration: 'none' }}
            >
              {/* <Logo /> */} {logoText}
            </Link>
          </NextLink>

          <Box
            display={{
              base: 'none',
              md: 'inline-flex',
            }}
          >
            <HStack spacing={1}>
              <Box role="group">
                <Button
                  bg={bg}
                  color="gray.500"
                  alignItems="center"
                  fontSize="md"
                  _hover={{
                    color: cl,
                  }}
                  _focus={{
                    boxShadow: 'none',
                  }}
                  rightIcon={<IoIosArrowDown />}
                >
                  Features
                </Button>
                <Box
                  pos="absolute"
                  left={0}
                  w="full"
                  display="none"
                  _groupHover={{
                    display: 'block',
                  }}
                >
                  <FeaturesDropDown />
                </Box>
              </Box>
              <NextLink href="/blog" passHref legacyBehavior>
                <Button
                  as={Link}
                  bg={bg}
                  color="gray.500"
                  display="inline-flex"
                  alignItems="center"
                  fontSize="md"
                  _hover={{
                    color: cl,
                    textDecoration: 'none',
                  }}
                  _focus={{
                    boxShadow: 'none',
                  }}
                >
                  Blog
                </Button>
              </NextLink>
              <Button
                bg={bg}
                color="gray.500"
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                _hover={{
                  color: cl,
                }}
                _focus={{
                  boxShadow: 'none',
                }}
              >
                Pricing
              </Button>
            </HStack>
          </Box>
          <Spacer />
          <Box display="flex" alignItems="center">
            <HStack spacing={1}>
              <Button colorScheme="brand" variant="ghost" size="sm">
                Sign in
              </Button>
              <Button colorScheme="brand" variant="solid" size="sm">
                Sign up
              </Button>
            </HStack>
            <IconButton
              size="md"
              fontSize="lg"
              aria-label={`Switch to ${text} mode`}
              variant="ghost"
              color="current"
              ml={{
                base: '0',
                md: '3',
              }}
              onClick={toggleMode}
              icon={<SwitchIcon />}
            />
            <IconButton
              display={{
                base: 'flex',
                md: 'none',
              }}
              aria-label="Open menu"
              fontSize="20px"
              color="gray.800"
              _dark={{
                color: 'inherit',
              }}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />
          </Box>
        </Flex>

        {MobileNavContent}
      </chakra.header>
    </React.Fragment>
  );
};

export default MainHeader;
