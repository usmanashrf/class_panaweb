import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";


export default function DropdownButton() {
  return (
    <Flex mx={2}>
      <Menu>
        <MenuButton
          px={4}
          py={2}
          transition="all 0.2s"
          borderRadius="md"
          borderWidth="1px"
          _hover={{ bg: "gray.400" }}
          _expanded={{ bg: "blue.400" }}
          _focus={{ boxShadow: "outline" }}
        >
          Courses <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <MenuItem>Web 3.0</MenuItem>
          <MenuItem>Metaverse</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
