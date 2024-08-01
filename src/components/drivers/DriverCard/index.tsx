import { Button, Card, Image, Text } from "@mantine/core";

type DriverCardProps = {
  name: string;
  imagePath: string;
  teamColor: string;
  removeDriverFn: () => void;
};

export default function DriverCard({
  name,
  imagePath,
  teamColor,
  removeDriverFn,
}: DriverCardProps) {
  return (
    <Card shadow="sm" padding="xl" bg={teamColor} w={200} h={250}>
      <Card.Section>
        <Image src={imagePath} h={100} alt="No way!" />
      </Card.Section>
      <Text fw={800} size="lg" mt="md" c={"#FFF"} ta="center">
        {name.toUpperCase()}
      </Text>
      <Button color="blue" mt="md" radius="md" onClick={() => removeDriverFn()}>
        Remove
      </Button>
    </Card>
  );
}
