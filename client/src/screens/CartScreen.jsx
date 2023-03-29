import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
  Spinner,
  Alert,
  AlertTitle,
  AlertIcon,
  AlertDescription,
  Wrap,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import CartOrderSummary from '../components/CartOrderSummary';

const CartScreen = () => {
  const cartInfo = useSelector((state) => state.cart);
  const { loading, error, cart } = cartInfo;

  const getHeadingContent = () => (cart.length === 1 ? '(1 Article)' : `(${cart.length} Articles)`);

  return (
    <Wrap spacing='30px' justify='center' minHeight='100vh'>
      {loading ? (
        <Stack direction='row' spacing={4}>
          <Spinner mt={20} thickness='2px' speed='0.65s' emptyColor='gray.200' color='orange.500' size='xl' />
        </Stack>
      ) : error ? (
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>Nous sommes désolé!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : cart.length <= 0 ? (
        <Alert status='warning'>
          <AlertIcon />
          <AlertTitle>Vous n'avez pas encore de produits dans votre panier .</AlertTitle>
          <AlertDescription>
            <Link as={ReactLink} to='/produits'>
              Cliquez ici pour voir nos produits.
            </Link>
          </AlertDescription>
        </Alert>
      ) : (
        <Box
          maxW={{ base: '3xl', lg: '7xl' }}
          mx='auto'
          px={{ base: '4', md: '8', lg: '12' }}
          py={{ base: '6', md: '8', lg: '12' }}>
          <Stack
            direction={{ base: 'column', lg: 'row' }}
            align={{ lg: 'flex-start' }}
            spacing={{ base: '8', md: '16' }}>
            <Stack spacing={{ base: '8', md: '10' }} flex='2'>
              <Heading fontSize='2xl' fontWeight='extrabold'>
              Panier d'achat {getHeadingContent()}
              </Heading>

              <Stack spacing='6'>
                {cart.map((cartItem) => (
                  <CartItem key={cartItem.id} cartItem={cartItem} />
                ))}
              </Stack>
            </Stack>
            <Flex direction='column' align='center' flex='1'>
              <CartOrderSummary />

              <HStack mt='6' fontWeight='semibold'>
                <p>or</p>
                <Link as={ReactLink} to='/produits' color={mode('orange.500', 'orange.200')}>
                  Continuer vos achats
                </Link>
              </HStack>
            </Flex>
          </Stack>
        </Box>
      )}
    </Wrap>
  );
};

export default CartScreen;