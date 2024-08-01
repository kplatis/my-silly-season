import DriverCard from "@/components/drivers/DriverCard";
import UnknownDriverCard from "@/components/drivers/UnknownDriverCard";
import { TeamWithDrivers } from "@/types/common";
import { Flex, Image } from "@mantine/core";

type TeamCardProps = {
  team: TeamWithDrivers;
  removeDriverFn: (driverId: number, teamId: number) => void;
};

export default function TeamCard({ team, removeDriverFn }: TeamCardProps) {
  const firstDriver = team.drivers[0];
  const secondDriver = team.drivers[1];
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
          teamColor={team.color}
          removeDriverFn={() => removeDriverFn(firstDriver.id, team.id)}
        />
      ) : (
        <UnknownDriverCard />
      )}

      <Image h={60} w={60} src={team.logoPath} alt={`${team.name} logo`} />
      {secondDriver ? (
        <DriverCard
          name={secondDriver.name}
          imagePath={secondDriver.imagePath}
          teamColor={team.color}
          removeDriverFn={() => removeDriverFn(secondDriver.id, team.id)}
        />
      ) : (
        <UnknownDriverCard />
      )}
    </Flex>
  );
}
