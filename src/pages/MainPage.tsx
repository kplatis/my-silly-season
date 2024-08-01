import TeamCard from "@/components/teams/TeamCard";
import { drivers } from "@/data/drivers";
import { teams } from "@/data/teams";
import { TeamWithDrivers } from "@/types/common";
import buildGrid from "@/utils/buildGrid";
import { Container, Grid } from "@mantine/core";
import { useEffect, useState } from "react";

export default function MainPage() {
  const [currentGrid, setCurrentGrid] = useState<TeamWithDrivers[]>([]);

  useEffect(() => {
    const grid = buildGrid(teams, drivers);
    setCurrentGrid(grid);
  }, []);

  const removeDriver = (driverId: number, teamId: number) => {
    setCurrentGrid((prevTeams) =>
      prevTeams.map((team) => {
        if (team.id === teamId) {
          const updatedDrivers = team.drivers.filter(
            (driver) => driver.id !== driverId
          );
          return { ...team, drivers: updatedDrivers };
        }
        return team;
      })
    );
  };

  return (
    <Container fluid={true}>
      <Grid>
        {currentGrid.map((team) => (
          <Grid.Col key={team.id} span={6}>
            <TeamCard team={team} removeDriverFn={removeDriver} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
