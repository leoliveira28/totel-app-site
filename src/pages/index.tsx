import { Flex, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Caroussel from '../components/Caroussel/Caroussel'
import CaptionCarousel from '../components/Caroussel/Caroussel'
import Example from '../components/Example/Example'
import Features from '../components/features/Features'
import Hero from '../components/hero/Hero'
import Video from '../components/video/Video'

const Home: NextPage = () => {
  return (
    <>
    <Flex h='100vh'>
      <Hero />
    </Flex>
    <Flex h='100vh'>
        <Features />
      </Flex>
     <Flex h='100vh'>
      <Video />
      </Flex> 
      <Flex>
        <Caroussel />
      </Flex>
      <Flex h='100vh'>
        <Example />
      </Flex>

      </>
  )
}

export default Home
