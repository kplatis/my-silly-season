import DriverCard from "@/components/drivers/DriverCard";
import { Flex, Image } from "@mantine/core";

export default function Team() {
  return (
    <Flex
      mih={50}
      bg="rgba(0, 0, 0, .3)"
      gap="md"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >
      <DriverCard
        name="Lewis Hamilton"
        imagePath="/public/lewis_hamilton.jpg"
      />
      <Image h={160} w={160} src="/public/ferrari.jpg" alt="No way!" />
      <DriverCard
        name="Lewis Hamilton"
        imagePath="/public/lewis_hamilton.jpg"
      />
    </Flex>
  );
}
