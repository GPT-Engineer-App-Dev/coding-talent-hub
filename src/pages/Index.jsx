import { Box, Flex, Heading, Text, VStack, SimpleGrid, Tag } from '@chakra-ui/react';

const developers = [
  { name: 'John Doe', location: 'New York, USA', technologies: ['React', 'Node'] },
  { name: 'Jane Smith', location: 'Berlin, Germany', technologies: ['Go', '.NET'] },
  { name: 'Carlos Ruiz', location: 'Madrid, Spain', technologies: ['JavaScript', 'React'] }
];

const Index = () => {
  return (
    <Box p={5}>
      <Flex direction="column" align="center" justify="center" mb={10}>
        <Heading mb={4}>Welcome to Particles</Heading>
        <Text fontSize="lg">Discover top software talent specialized in web technologies.</Text>
      </Flex>
      <VStack spacing={8}>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
          {developers.map(dev => (
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">{dev.name}</Heading>
              <Text mt={4}>{dev.location}</Text>
              <Flex mt={2}>
                {dev.technologies.map(tech => (
                  <Tag size="md" colorScheme="blue" mr={2}>{tech}</Tag>
                ))}
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Index;