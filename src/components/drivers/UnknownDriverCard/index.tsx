import { Card, Center, Text } from "@mantine/core";

export default function UnknownDriverCard() {
  return (
    <Card shadow="sm" padding="xl" h="full">
      <Card.Section>
        <Center>
          <Text>?</Text>
        </Center>
      </Card.Section>
      <Center>
        <Text fw={500} size="lg" mt="md">
          ?
        </Text>
      </Center>
    </Card>
  );
}
