import {Container, Heading, SimpleGrid, Divider, List,ListItem} from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import thumbTradingBot from '../public/images/works/tradingbot_eye_catch.png'
import Section from '../components/section'




const Works = () => {
    return (
    <Container>
        <Heading as = 'h3' fontSize={20} mb = {4}>
            Works
        </Heading>
        
        <SimpleGrid columns ={[0,0,0]} gap ={6}>
            <Section>
                <WorkGridItem id='tradingbot' title = 'Trading Bot' thumbnail={thumbTradingBot}></WorkGridItem>
            </Section>
        </SimpleGrid>
        
    </Container>
    )    
}

export default Works

