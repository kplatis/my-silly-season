import { Card, Center, Text, Image, Space, Stack } from "@mantine/core";
import SelectDriverButton from "./SelectDriverButton";

type UnknownDriverCardProps = {
  teamId: number;
};

export default function UnknownDriverCard({ teamId }: UnknownDriverCardProps) {
  return (
    <Card shadow="sm" padding="xl" w={240}>
      <Card.Section>
        <Image src={"/public/unknown.jpg"} h={160} alt="Unknown driver" />
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
