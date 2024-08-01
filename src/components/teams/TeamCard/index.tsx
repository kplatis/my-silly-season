import DriverCard from "@/components/drivers/DriverCard";
import UnknownDriverCard from "@/components/drivers/UnknownDriverCard";
import { Driver } from "@/types/drivers";
import { Flex, Image } from "@mantine/core";

type TeamCardProps = {
  teamLogo: string;
  teamName: string;
  teamColor: string;
  firstDriver?: Driver;
  secondDriver?: Driver;
};

export default function TeamCard({
  firstDriver,
  secondDriver,
  teamLogo,
  teamName,
  teamColor,
}: TeamCardProps) {
  return (
    <Flex
      mih={50}
      gap="md"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >
      {firstDriver ? (
        <DriverCard
          name={firstDriver.name}
          imagePath={firstDriver.imagePath}
          teamColor={teamColor}
        />
      ) : (
        <UnknownDriverCard />
      )}

      <Image h={60} w={90} src={teamLogo} alt={`${teamName} logo`} />
      {secondDriver ? (
        <DriverCard
          name={secondDriver.name}
          imagePath={secondDriver.imagePath}
          teamColor={teamColor}
        />
      ) : (
        <UnknownDriverCard />
      )}
    </Flex>
  );
}
