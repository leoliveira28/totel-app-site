import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { IoPlayOutline } from 'react-icons/io5'
  
  export default function CallToActionWithVideo() {
    return (
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: '#657ADC',
                  zIndex: -1,
                }}>
                You chose,
              </Text>
              <br />
              <Text as={'span'} color={'#657ADC'}>
                how much you will pay!
              </Text>
            </Heading>
            <Text color={'gray.500'}>
              Find the right accommodation for you when traveling,
              while minimizing costs when sharing.
              Totel App was made just right for this. 
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Box
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <IconButton
                aria-label={'Play Button'}
                variant={'ghost'}
                _hover={{ bg: 'transparent' }}
                icon={<Icon as={IoPlayOutline} />}
                size={'lg'}
                color={'white'}
                position={'absolute'}
                left={'50%'}
                top={'50%'}
                transform={'translateX(-50%) translateY(-50%)'}
              />
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  'https://i.ibb.co/10y2pGf/mockrocket-capture.png'
                }
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    );
  }