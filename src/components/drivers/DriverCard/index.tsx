import { Card, Center, Image, Text } from "@mantine/core";

type DriverCardProps = {
  name: string;
  imagePath: string;
  teamColor: string;
};

export default function DriverCard({
  name,
  imagePath,
  teamColor,
}: DriverCardProps) {
  return (
    <Card shadow="sm" padding="xl" bg={teamColor}>
      <Card.Section>
        <Image src={imagePath} h={160} alt="No way!" />
      </Card.Section>
      <Center>
        <Text fw={800} size="lg" mt="md" c={"#FFF"}>
          {name.toUpperCase()}
        </Text>
      </Center>
    </Card>
  );
}
