import { Box, Flex, Grid, GridItem, HStack, VStack,Text, Link } from "@chakra-ui/react";
import Image from "next/image";
export default function Footer() {
  return (
    <Box  >
    <Grid templateColumns='repeat(5, 1fr)' mt="20px"  pt="60px" gap={6}   h={"50vh"} bg={"gray.800"}>
   <GridItem px="20px" w='100%'>
    <Image height={150} width={150} alt="footerLogo" src={"/images/footerLogoWhite.png"}>
    </Image>
    <Text color="whiteAlpha.900">Reshape Pakistan by cutting-edge technologies.</Text>
  </GridItem>

  <GridItem w='100%' colSpan={2} />
 
  <GridItem w='100%'  >
    <HStack>
        <VStack  align={"start"}>
            <Text color={"whiteAlpha.800"}>
                <Link href="/">Panaverse DAO</Link>
            </Text>
            <Text color={"whiteAlpha.800"}>
                <Link href="/">About us</Link>
            </Text>
            <Text color={"whiteAlpha.800"}>
                <Link href="/">Panaverse Community</Link>
            </Text>
        </VStack>
        <VStack align={"start"}>
            <Text color={"whiteAlpha.800"}>
                <Link href="/">Panaverse DAO</Link>
            </Text>
            <Text color={"whiteAlpha.800"}>
                <Link href="/">About us</Link>
            </Text>
            <Text color={"whiteAlpha.800"}>
                <Link href="/">Panaverse Community</Link>
            </Text>
        </VStack>
    </HStack>
  </GridItem>
</Grid>
<Flex justifyContent={"space-between"} bg="gray.600" mt="-10"  borderTopRadius={"10px"} h="40px" mx={"250px"} >
    <Image height={50} width={50} alt="oculus" src="/images/oculus.png"></Image>
    <Text px={"10px"} py="10px" color={"whiteAlpha.800"}>© 2023 Usman Ashraf. All rights reserved.</Text>
</Flex>
</Box>
  )
}
