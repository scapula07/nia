// components/SignInModal.tsx
import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input as ChakraInput,
  Button,
  VStack,
  Text,
  Link,
  Box,
  Image,
} from '@chakra-ui/react';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Handle sign-in logic here
    console.log('Email:', email);
    console.log('Password:', password);
    onClose(); // Close modal after signing in
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Image
            src="/nia_logo.png"
            alt="Nia Logo"
            width="100px"
            mx="auto"
            mb={4}
          />
          Sign In
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack  align="start">
            {/* Email Input */}
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <ChakraInput
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                borderColor="gray.300"
              />
            </FormControl>

            {/* Password Input */}
            <FormControl isRequired>
              <FormLabel htmlFor="password">Password</FormLabel>
              <ChakraInput
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                borderColor="gray.300"
              />
            </FormControl>

            {/* Forgot Password Link */}
            <Link href="#" color="blue.500" fontSize="sm">
              Forgot your password?
            </Link>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" width="100%" onClick={handleSignIn}>
            Sign In
          </Button>
        </ModalFooter>

        <Box textAlign="center" mb={4}>
          <Text fontSize="sm" color="gray.600">
            Don’t have an account?{' '}
            <Link href="/sign-up" color="blue.500">
              Sign Up
            </Link>
          </Text>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default SignInModal;
