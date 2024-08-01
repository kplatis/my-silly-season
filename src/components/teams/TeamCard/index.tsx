import { useDispatch } from "react-redux";
import { Flex, Image } from "@mantine/core";
import DriverCard from "@/components/drivers/DriverCard";
import UnknownDriverCard from "@/components/drivers/UnknownDriverCard";
import { AppDispatch } from "@/store/store";
import { TeamWithDrivers } from "@/types/common";
import { removeDriver } from "@/store/gridSlice";

type TeamCardProps = {
  team: TeamWithDrivers;
};

export default function TeamCard({ team }: TeamCardProps) {
  const firstDriver = team.drivers[0];
  const secondDriver = team.drivers[1];
  const dispatch = useDispatch<AppDispatch>();

  const handleRemoveDriver = (driverId: number, teamId: number) => {
    dispatch(removeDriver({ teamId, driverId }));
  };

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
          removeDriverFn={() => handleRemoveDriver(firstDriver.id, team.id)}
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
          removeDriverFn={() => handleRemoveDriver(secondDriver.id, team.id)}
        />
      ) : (
        <UnknownDriverCard />
      )}
    </Flex>
  );
}
