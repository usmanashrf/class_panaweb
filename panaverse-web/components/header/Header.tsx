import { Box, Button, Flex, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import DropdownButton from "../menu/DropdownButton";
import MenuItems from "../menu/MenuItems";

export default function Header() {
  return (
    <Box m={3} >
      <Grid templateColumns="repeat(3, 1fr)" gap={[4,6]}>
        <GridItem w="100%" h="10"><Link href={"/"}><Image height={100} width={100} src={"/images/logo.png"} alt={"logo"}></Image></Link></GridItem>
        <GridItem w="100%" h="10" mt={4}> 
       <Flex sx={{ gap: "6" }} justifyContent="center">
       <MenuItems label="Home" href="/"></MenuItems>
        <MenuItems label="About" href="/"></MenuItems>
        <MenuItems label="Courses" href="/"></MenuItems>
       </Flex>
        </GridItem>
        <GridItem w="100%" h="10" >
            <Flex justifyContent="flex-end" mx="4">
            <DropdownButton></DropdownButton>
            <Button colorScheme='blue'><Link target="_blank" href={"https://portal.piaic.org/signup"}>  SignUp</Link></Button>
            </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
}
