import {Container, Heading, SimpleGrid, Divider, List,ListItem, UnorderedList} from '@chakra-ui/react'
import Layout from '../components/layouts/article'

import Section from '../components/section'
import { ListSection, ListTitle } from '../components/list'
const Studies = () => {
    return (
        <Container>
            <Heading as ='h3' fontSize={20} mb = {4}>
                Studies
            </Heading>
            <Section>
                <ListSection>
                    <ListTitle>Specialization:</ListTitle>
                    Artificial Intelligent
                </ListSection>
                <ListSection>
                    <ListTitle>Place:</ListTitle>
                    University of Science, National Ho Chi Minh School
                </ListSection>
       
                    <List>
                    <ListTitle>Subjects passed:</ListTitle>
                        <UnorderedList>
                            <ListItem>Introduction to Artificial Intelligent</ListItem>
                            <ListItem>Beginning with Programming</ListItem>
                            <ListItem>Physics 1</ListItem>
                            <ListItem>Calculus 1B</ListItem>
                            <ListItem>Calculus 2B</ListItem>
                            <ListItem>Linear Algebra</ListItem>
                            <ListItem>Discrete Mathematics</ListItem>
                            <ListItem>Macx-Lenin Philosophy</ListItem>
                            <ListItem>Beginning with Artificial Intelligent</ListItem>
                        </UnorderedList>
                    </List>
                
                    <List>
                        <ListTitle>Subjects in progress:</ListTitle>
                        <UnorderedList>
                            <ListItem>Data Structure and Algorithms</ListItem>
                            <ListItem>Networking</ListItem>
                            <ListItem>Probabilities and Statistics</ListItem>
                            <ListItem>Mathematics</ListItem>
                            <ListItem>Physic 2</ListItem>
                            <ListItem>Economics</ListItem>
                        </UnorderedList>
                    </List>


             

            </Section>
        </Container>
    )
}

export default Studies