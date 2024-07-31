import { Driver } from "@/types/drivers";
import { Card, Center, Image, Text } from "@mantine/core";

export default function DriverCard({ name, imagePath }: Driver) {
  return (
    <Card shadow="sm" padding="xl">
      <Card.Section>
        <Image src={imagePath} h={160} alt="No way!" />
      </Card.Section>
      <Center>
        <Text fw={500} size="lg" mt="md">
          {name}
        </Text>
      </Center>
    </Card>
  );
}
