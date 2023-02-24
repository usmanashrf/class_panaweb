import { Box, Heading, VStack, Text, HStack } from "@chakra-ui/react";
import QtCards from "./QtCards";

export default function Programs() {
  return (
    <Box>
        <VStack>
            <Heading fontSize={"5xl"} color={"blue.500"}> Program of Studies</Heading>
            <Text align={"center"} px="250px">
            The first three quarters are shared by all specialties and are dedicated to studying

Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development

The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs)

that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off

by offering services at a rate of $50 per hour ($96,000 per year).
            </Text>

            <HStack>
                <QtCards imagePath="/images/qtr1.png" heading="Quarter I" desc="CS-101: Object-Oriented Programming using TypeScript"></QtCards>
                <QtCards imagePath="/images/qtr1.png" heading="Quarter II" desc="CS-101: Object-Oriented Programming using TypeScript"></QtCards>
                <QtCards imagePath="/images/qtr1.png" heading="Quarter III" desc="CS-101: Object-Oriented Programming using TypeScript"></QtCards>
                <QtCards imagePath="/images/qtr1.png" heading="Quarter IV" desc="CS-101: Object-Oriented Programming using TypeScript"></QtCards>
            </HStack>
        </VStack>

    </Box>
  )
}
