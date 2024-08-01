import { Card, Center, Text, Image } from "@mantine/core";

export default function UnknownDriverCard() {
  return (
    <Card shadow="sm" padding="xl" w={240} h={236}>
      <Card.Section>
        <Image src={"/public/unknown.jpg"} h={160} alt="No way!" />
      </Card.Section>
      <Center>
        <Text fw={500} size="lg" mt="md">
          ?
        </Text>
      </Center>
    </Card>
  );
}
