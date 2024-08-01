import { useDispatch } from "react-redux";
import { Flex, Grid, Image } from "@mantine/core";
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
    <Grid
      grow
      justify="center"
      align="center"
      m="auto"
      p={15}
      style={{
        borderTop: `solid 3px ${team.color}`,
        borderBottom: `solid 3px ${team.color}`,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#D3D3D3",
      }}
    >
      <Grid.Col span={{ base: 12, sm: 4 }}>
        {firstDriver ? (
          <DriverCard
            name={firstDriver.name}
            imagePath={firstDriver.imagePath}
            teamColor={team.color}
            removeDriverFn={() => handleRemoveDriver(firstDriver.id, team.id)}
          />
        ) : (
          <UnknownDriverCard teamId={team.id} />
        )}
      </Grid.Col>
      <Grid.Col span="content">
        <Image
          m="auto"
          h={60}
          w={60}
          src={team.logoPath}
          alt={`${team.name} logo`}
        />
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 4 }}>
        {secondDriver ? (
          <DriverCard
            name={secondDriver.name}
            imagePath={secondDriver.imagePath}
            teamColor={team.color}
            removeDriverFn={() => handleRemoveDriver(secondDriver.id, team.id)}
          />
        ) : (
          <UnknownDriverCard teamId={team.id} />
        )}
      </Grid.Col>
    </Grid>

    // <Flex
    //   w="fit-content"
    //   m="auto"
    //   mih={50}
    //   gap="xl"
    //   justify="center"
    //   align="center"
    //   direction="row"
    //   wrap="wrap"
    //   p={15}
    //   style={{
    //     borderTop: `solid 3px ${team.color}`,
    //     borderBottom: `solid 3px ${team.color}`,
    //     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    //     backgroundColor: "#D3D3D3",
    //   }}
    // >

    // </Flex>
  );
}
