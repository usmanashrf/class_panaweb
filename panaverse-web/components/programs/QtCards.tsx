import { Card, CardBody, Heading, Text,Image, Stack, Divider, CardFooter, ButtonGroup, Button } from "@chakra-ui/react";


export default function QtCards({imagePath, heading, desc}:any) {
  return (
    <Card maxW='sm'>
  <CardBody>
    <Image
      src={imagePath}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{heading}</Heading>
      <Text>
        {desc}
      </Text>
      
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='ghost' colorScheme='blue'>
        see more
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}
