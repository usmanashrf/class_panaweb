import { Box, Flex, Heading, HStack, VStack, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Metaverse() {
  return (
    <Box>
        <Flex my="100px">
            <HStack>
                <Image height={800} width={800} alt="metaverse" src={"/images/metaverse.png"}>
                
                </Image>
                <VStack>
                    <Heading fontSize={"5xl"} color={"blue.500"}>What is Metaverse ?</Heading>
                    <Text align={"justify"}>
                    A communal environment or virtual world made possible by the fusion of physical and virtual reality is referred to as the "metaverse." Users can engage in shared interactions with a wide range of virtual objects and environments in this imagined networked virtual world. Various technology businesses are aggressively pursuing the science fiction idea of a metaverse in an effort to give users a seamless and immersive experience.
                    </Text>
                    <Text align={"justify"}>
                    A communal environment or virtual world made possible by the fusion of physical and virtual reality is referred to as the "metaverse." Users can engage in shared interactions with a wide range of virtual objects and environments in this imagined networked virtual world. Various technology businesses are aggressively pursuing the science fiction idea of a metaverse in an effort to give users a seamless and immersive experience.
                    </Text>
                 </VStack>
            </HStack>
        </Flex>
    </Box>
  )
}
