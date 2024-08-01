import { Driver } from "@/types/drivers";
import { Card, Center, Image, Text } from "@mantine/core";

type DriverCardProps = Omit<Driver, "nextYearTeam" | "id"> & {
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
        <Text fw={500} size="lg" mt="md">
          {name}
        </Text>
      </Center>
    </Card>
  );
}
