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

  return (
    <Container fluid={true}>
      <Grid>
        {currentGrid.map((team) => (
          <Grid.Col key={team.id} span={6}>
            <TeamCard
              teamLogo={team.logoPath}
              teamName={team.name}
              teamColor={team.color}
              firstDriver={team.drivers[0]}
              secondDriver={team.drivers[1]}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
