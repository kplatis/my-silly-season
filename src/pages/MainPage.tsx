import TeamCard from "@/components/teams/TeamCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Container, Grid } from "@mantine/core";

export default function MainPage() {
  const currentGrid = useSelector((state: RootState) => state.grid);

  return (
    <Container fluid={true}>
      <Grid>
        {currentGrid.map((team) => (
          <Grid.Col key={team.id} span={6}>
            <TeamCard team={team} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
