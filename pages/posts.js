import {Heading, Container, SimpleGrid, GridItem} from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'
import ThumbPost01 from '../public/images/posts/eye_catch_post_01.png'
import ThumbPost02 from '../public/images/posts/eye_catch_post_02.png'
import { Post01GridItem,Post02GridItem } from '../components/grid-item'

const Posts = () => {
    return (
        <Container>
            <Heading as = 'h3' fontSize={20} mb = {4}>
                Posts
            </Heading>
            <SimpleGrid column={[0,0,0]} gap = {6}>
          
                <Section>
                    <Post02GridItem id='post02' title = 'Google Cloud Platform Events' thumbnail={ThumbPost02}></Post02GridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}


export default Posts