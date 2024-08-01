import TeamCard from "@/components/teams/TeamCard";
import { TeamWithDrivers } from "@/types/common";
import { Driver } from "@/types/drivers";
import { Team } from "@/types/teams";
import buildGrid from "@/utils/buildGrid";
import { Grid } from "@mantine/core";
import { useEffect, useState } from "react";

const teams: Team[] = [
  {
    id: 1,
    name: "Red Bull Racing",
    logoPath: "/public/rbr.png",
    color: "#223971",
  },
  {
    id: 2,
    name: "Mercedes",
    logoPath: "/public/mercedes.png",
    color: "#00A19C",
  },
];

const drivers: Driver[] = [
  {
    id: 1,
    name: "Max Verstappen",
    imagePath: "/public/verstappen.jpg",
    nextYearTeam: 1,
  },
  {
    id: 2,
    name: "Sergio Perez",
    imagePath: "/public/perez.jpg",
    nextYearTeam: 1,
  },
  {
    id: 3,
    name: "George Russel",
    imagePath: "/public/russel.jpg",
    nextYearTeam: 2,
  },
];

export default function MainPage() {
  const [currentGrid, setCurrentGrid] = useState<TeamWithDrivers[]>([]);

  useEffect(() => {
    const grid = buildGrid(teams, drivers);
    setCurrentGrid(grid);
  }, []);

  return (
    <Grid>
      {currentGrid.map((team) => (
        <Grid.Col span={6}>
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
  );
}
