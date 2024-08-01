import TeamCard from "@/components/teams/TeamCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Container, Grid, Text } from "@mantine/core";
import Header from "@/components/layout/Header";

export default function MainPage() {
  const currentGrid = useSelector((state: RootState) => state.grid);

  return (
    <>
      <Header />
      <Container fluid={true} py={30}>
        <Grid justify="center" gutter="lg">
          {currentGrid.map((team) => (
            <Grid.Col key={team.id} span={{ base: 12, md: 6, lg: 4 }}>
              <TeamCard team={team} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </>
  );
}
