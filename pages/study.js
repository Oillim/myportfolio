import {Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'


const Studies = () => {
    return (
        <Container>
            <Heading as ='h3' fontSize={20} mb= {4}>
                Studies
            </Heading>
        </Container>
    )
}
export default Studies