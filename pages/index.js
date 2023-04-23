import { Box, Stack, StackDivider, Container, Heading, Image, VStack, HStack, Button, IconButton} from "@chakra-ui/react";
import { Card,CardHeader, CardBody, Text, Flex, List, ListItem, ListIcon, MdCheckCircle } from '@chakra-ui/react';
import Head from "next/head";
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaGithub,
  FaNodeJs,
  FaNpm,
  FaReact,
  FaAngular,
  FaHtml5,
  FaJs,
  FaPhp,
  FaWordpress,
  FaBlackTie
} from 'react-icons/fa';
import { EmailIcon, HamburgerIcon, AddIcon,  } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/react";
import { 
  Menu,
  MenuButton,
  MenuList,
  MenuItem

} from "@chakra-ui/react";



export default function Home(){
  return(
    <Box >

      <Head>
        <title>My Portfolio</title>
        <link href="favicon.ico" rel="icon" sizes="32x32" type="image/icon"/>
      </Head>

      <header>
        <Box boxShadow='sm' position='relative' bgGradient='linear(to-l, #7928CA, #FF0080)'>
          <Flex justifyContent='center'>
            <Box position='absolute' left={0} top='50%' transform='translateY(-50%)' zIndex={4}>
              <Menu>
                <MenuButton
                  height='14'
                  width='14'
                  as={IconButton}
                  m={5}
                  fontSize='30px'
                  aria-label='Options'
                  icon={<HamburgerIcon />}
                  variant='ghost'
                />
                <MenuList>
                <MenuItem as='a' fontSize={14} href='mamoso_mark_anthony_v.pdf' icon={<FaBlackTie size='2em' />} minH='48px'>
                    My Resume
                  </MenuItem>
                  
                </MenuList>
              </Menu>
            </Box>
            <Text
              textAlign='center'
              fontSize='6xl'
              fontWeight='extrabold'
              color='white'
            >
              My Portfolio
            </Text>
          </Flex>
        </Box>
      </header>

      <Flex flexDirection={['column', 'column','row']} justifyContent='center'>
        
          <Card m={5}>
            <CardBody>
              <Container  centerContent>
            
                  <VStack
                    align="center"
                  >
                    <HStack 
                      bgGradient='linear(to-l, #7928CA, #FF0080)'
                      backgroundSize='cover' 
                      w='100%' 
                      justifyContent='center'
                      borderRadius='full'
                      
                      >
                        <HStack
                        bgColor='#ffffffAA'
                        borderRadius='full'
                          w='100%'
                          justifyContent='end'
                          m={2}
                        >
                    <HStack justifyContent='center'>
                      <Heading
                        as='h1'
                        size="4xl"
                        bgGradient='linear(to-l, #7928CA, #FF0080)'
                        bgClip='text'
                        textAlign='center'
                        noOfLines={1}
                        >Caught!</Heading>
                    </HStack>
                          <Box m={2}>
                            <Image
                            m={2}
                            p={2}
                            borderRadius='full'
                            boxSize='150px'
                            src='profile.jpg'
                            alt='Mark Anthony V. Mamoso'
                            border='dotted 8px #7928CA'
                            
                            
                                                    />
                          </Box>
                        </HStack>

                    </HStack>
                    

                    
                    <Box>
                      <Text fontSize='2xl' m={5} align='center'>
                        Hi, I'm Mark Anthony Mamoso - Full Stack Web Developer in the Philippines
                        with expertise in front-end and back-end web development, as well as database design and management.
                        I specialize in creating robust, scalable web applications that are optimized for speed, performance and user experience.
                      </Text>
                    </Box>

                    
                  </VStack>

            
              </Container>
            </CardBody>
          </Card>
        

        
          <Box flexGrow={1}>
            <Card m={5}>
              <CardHeader>
                <Heading size='md'>Key Skills</Heading>
              </CardHeader>

              <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Font-End
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      HTML/CSS, JavaScript, React.js, Angular
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Back-End
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      JavaScript, Node.js, PHP, MySQL
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Tools
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      NPM, Git, VS Code, Terminal
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>


            <Card m={5}>
              <CardHeader>
                <Heading size='md'>Keep In Touch</Heading>
              </CardHeader>

              <CardBody>
                <HStack>
                  <Link href='https://www.linkedin.com/in/mark-anthony-mamoso-6b26b5171/' target='_blank'><IconButton variant='solid' fontSize='25px' colorScheme='linkedin' icon={<FaLinkedin />} size='sm' /></Link>
                  <IconButton variant='solid' fontSize='25px' colorScheme='teal' icon={<EmailIcon />} size='sm' />
                  <Text fontSize='20px'>
                    mamosomarkanthony@gmail.com
                </Text>
                  
                  
                </HStack>
                

              
              </CardBody>
            </Card>
          </Box>
        

      </Flex>

      <Box>
        <Card m={5}>
        <CardHeader>
                <Heading size='3xl' textAlign='center'>Technologies</Heading>
              </CardHeader>
          <CardBody>

            <HStack spacing='5px' justify='center'>
              <Box>
                <FaGithub size='4em' />
              </Box>
              <Box>
                <FaNodeJs size='4em' />
              </Box>
              <Box>
                <FaNpm size='4em' />
              </Box>
              <Box>
                <FaReact size='4em' />
              </Box>
              <Box>
                <FaAngular size='4em' />
              </Box>
              <Box>
                <FaHtml5 size='4em' />
              </Box>
              <Box>
                <FaJs size='4em' />
              </Box>
              <Box>
                <FaPhp size='4em' />
              </Box>

              <Box>
                <FaWordpress size='4em' />
              </Box>
            </HStack>

          </CardBody>
        </Card>
      </Box>
      
      


      
    </Box>
  );
}