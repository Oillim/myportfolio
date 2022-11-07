import { Button, Container, Box, Heading, chakra, Link, SingleGrid, List, ListItem,  useColorModeValue } from "@chakra-ui/react"
import Image from 'next/image'
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import NextLink from "next/link"    
import { ChevronRightIcon } from "@chakra-ui/icon"
import { BioSection, BioYear } from "../components/bio"
import { GridItem } from "../components/grid-item"
import { IoLogoTiktok, IoLogoInstagram, IoLogoGithub, IoLogoFacebook, IoLogoYoutube } from "react-icons/io5"
import { DetailProjects, Projects } from "../components/project"





const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width','height','src','alt'].includes(prop)
})
const Page = () => {
    return (
        <Container>
            <Box borderRadius = 'lg' bg = {useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p = {3} mb={6} align = 'center'>
                Hello, I&apos;m a student from University of Science! 
            </Box>
            <Box display= {{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as = 'h2' variant = 'page-title'>
                        Oillim
                    </Heading>
                <p>Student has a strong passion with games, code and girls :D</p>        
                        </Box>
            
                        <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Box
                    borderColor="whiteAlpha.800"
                    borderWidth={2}
                    borderStyle="solid"
                    w="100px"
                    h="100px"
                    display="inline-block"
                    borderRadius="full"
                    overflow="hidden"
                    >
                    <ProfileImage
                        src="/images/oillim.jpg"
                        alt="Profile image"
                        borderRadius="full"
                        width="100%"
                        height="100%"
                    />
                    </Box>
                </Box>
                </Box>
            <Section delay={0.1}>
                <Heading as ='h3' variant ='section-title'>
                    Works
                </Heading>
                <Paragraph>Oillim (realname is Nguyen Minh Vu) is a student from University of Science.
                     He loves coding, playing games and dreaming having a girlfriend 
                     during his life-time in University. This is his first project about 
                     creating a website that inspired by Youtuber "devaslife".
                </Paragraph>


                <Box align = 'center' my={4}>
                    <NextLink href='/works'  passHref scroll={false}>
                        <Button rightIcon={<ChevronRightIcon />} colorScheme ="teal">
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>


            <Section delay = {0.2}>
                <Heading as='h3' variant = "section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2003</BioYear>
                    Born in Ho Chi Minh City, Vietnam.
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear>
                    Successfully applied in University of Science, 
                    Artificial Intelligent speciality with 
                    949 points from Competency Test organized by 
                    Vietnam National University, Ho Chi Minh
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    Projects:
                    <Projects>
                        <DetailProjects>
                            <NextLink href = '/tradingbot'>
                                <Button variant = 'ghost' colorScheme='teal' >01</Button>
                            </NextLink>
                        </DetailProjects>
                        A live trading crypto bot using Python
                    </Projects>
                    <Projects>
                        <DetailProjects>
                            <NextLink href = '/portfolioweb'>
                                <Button variant = 'ghost' colorScheme='teal'>02</Button> 
                            </NextLink>
                        </DetailProjects>
                        A portfolio website using node.js, next.js, three.js, chakra-ui,...
                    </Projects>
                    <Projects>
                        <DetailProjects>
                            <NextLink href = '/billiards'>
                                <Button variant = 'ghost' colorScheme='teal'>03</Button>
                            </NextLink>
                        </DetailProjects>
                            A billiards carom game (working) 
                    </Projects>
                </BioSection>
            </Section>
            
            <Section delay = {0.3}>
                <Heading as ='h3' variant = 'section-title'>
                    Interests:
                </Heading>
                <Paragraph>
                    Art, Music, Drawing, Sports, Coding (webs, games, AIs,...), Gaming
                </Paragraph>

            </Section>

            <Section delay = {0.4}>
                <Heading as ='h3' variant = 'section-title'>
                    On the web:
                </Heading>
                <List>
                    <ListItem>
                        <Link href = "https://github.com/Oillim" target = 'blank'>
                            <Button variant="ghost" colorScheme='teal' leftIcon = {<IoLogoGithub />}>@Oillim</Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href = "https://www.facebook.com/Oillims" target = 'blank'>
                            <Button variant="ghost" colorScheme = 'teal' leftIcon = {<IoLogoFacebook /> }>Oillims</Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link  href = "https://www.youtube.com/channel/UCXeFe22KL4TNThSGBX9yd-Q" target = 'blank'>
                            <Button variant = 'ghost' colorScheme = 'teal' leftIcon = {<IoLogoYoutube/>}>Oillim</Button> 
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href = "https://www.instagram.com/nm.vu2983/" target= "blank">
                            <Button variant = 'ghost' colorScheme="teal" leftIcon= {<IoLogoInstagram/>}>nm.vu2983</Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href = "https://www.tiktok.com/@oillimmm" target = 'blank'>
                            <Button variant = 'ghost' colorScheme= 'teal' leftIcon = {<IoLogoTiktok/>}>@oillimmm</Button>
                        </Link>
                    </ListItem>
                </List>
            </Section>
 
        </Container>
    )
}
export default Page
export { getServerSideProps } from '../components/chakra'