import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    IoCalendarClearOutline,
    IoPersonAddSharp,
    IoMapOutline,
  } from 'react-icons/io5';
  import { ReactElement } from 'react';
  
  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function SplitWithImage() {
    return (
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('#E9E9EE', '#151530')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Who are we
            </Text>
            <Heading>We are a community</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            Totel is an online community 
            service for people to advertise, discover and book accommodations.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <Icon as={IoCalendarClearOutline} color={'##151530'} w={5} h={5} />
                }
                iconBg={useColorModeValue('#F9D9D9', '#F26465')}
                text={'Online since 2020'}
              />
              <Feature
                icon={<Icon as={IoPersonAddSharp} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'More than 4 million of hosts on Totel'}
              />
              <Feature
                icon={
                  <Icon as={IoMapOutline} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'100 thousand cities and counties with active listings on Totel'}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://cloudbeds-fcfc.kxcdn.com/wp-content/uploads/2022/03/Airbnb-competitors.jpg'
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }