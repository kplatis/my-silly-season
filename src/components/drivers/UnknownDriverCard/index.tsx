import { Card, Center, Text, Image, Stack } from "@mantine/core";
import SelectDriverButton from "./SelectDriverButton";

type UnknownDriverCardProps = {
  teamId: number;
};

export default function UnknownDriverCard({ teamId }: UnknownDriverCardProps) {
  return (
    <Card shadow="sm" padding="xl" w={200} h={250} m="auto">
      <Card.Section>
        <Image
          src={"/public/images/drivers/unknown.jpg"}
          h={100}
          alt="Unknown driver"
        />
      </Card.Section>
      <Stack>
        <Center>
          <Text fw={800} size="lg" mt="md" c={"#FFF"}>
            ?
          </Text>
        </Center>
        <SelectDriverButton teamId={teamId} />
      </Stack>
    </Card>
  );
}
