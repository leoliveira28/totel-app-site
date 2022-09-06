import {
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    Image,
  } from '@chakra-ui/react';

  
  export default function Hero() {
    return (
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Discover millions of possibilities choose from {' '}
            <Text as={'span'} color={'#F26465'}>
              unique accommodations
            </Text>
            </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
          Find vacation rentals, cabins, beach houses,
         accommodations and unique experiences around the world — hosts make it happen on Totel.
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'blue'}
              bg={'#657ADC'}
              _hover={{ bg: '#F39B9C' }}>
              Get started
            </Button>
            <Button rounded={'full'} px={6}>
              Learn more
            </Button>
          </Stack>

        </Stack>
      </Container>
    );
  }