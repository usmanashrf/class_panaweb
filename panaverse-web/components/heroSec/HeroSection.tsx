import { Box, Button, Card, CardBody, Flex, Grid, Stat, StatArrow,GridItem, Heading, StatGroup, StatHelpText, StatLabel, StatNumber, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
    const Variants = {
        hidden: {
          opacity: 0,
          x: 100,
          
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 140,
          },
        },
        show: {
          opacity: 1,
          x: 0,
          transition: {
            type: 'spring',
            stiffness: 80,
            delay: 0.5,
          },
        },
      };
    

  return (
   <Box>
    <Grid templateColumns='repeat(2, 1fr)' gap={6} bg="gray.200">
  <GridItem w='100%' h="70vh"  >
    <Flex>
    <Card mt="30px" bg="gray.200" w="90vh"  boxShadow={"dark-lg"} borderRightRadius={"20px"}>
  <CardBody alignSelf={"center"}>
    <Heading my="30px" size={"2xl"}> Web 3.0 <br></br> Metaverse</Heading>
    <Heading my="20px" color={"red"} size={"lg"}>Earn as you <br/>Learn Program</Heading>
    <Flex justifyContent={"space-between"}>
        <Button color={"whiteAlpha.900"} bgColor={"blue.500"}>Apply</Button>
        <StatGroup>
  <Stat>
    <StatLabel>Sent</StatLabel>
    <StatNumber>345,670</StatNumber>
    <StatHelpText>
      <StatArrow type='increase' />
      23.36%
    </StatHelpText>
  </Stat>

</StatGroup>

    </Flex>
  </CardBody>
</Card>
    </Flex>
  </GridItem>
  <GridItem w='100%' h='10' >
  <motion.nav
  variants={Variants}
  initial="hidden"
  whileInView="show">
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <Image height={600} width={600} alt="desktopPic" src={"/images/desktopPic.png"}></Image>
  </motion.button>
  </motion.nav>
  </GridItem>
    
</Grid>
   </Box>
  )
}
