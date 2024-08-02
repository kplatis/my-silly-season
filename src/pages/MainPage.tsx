import TeamCard from "@/components/teams/TeamCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  Container,
  Grid,
  Stack,
  Title,
  Text,
  Flex,
  Button,
} from "@mantine/core";
import Header from "@/components/layout/Header";

export default function MainPage() {
  const currentGrid = useSelector((state: RootState) => state.grid);

  return (
    <>
      <Header />
      <Container fluid={true} py={30}>
        <Stack gap={20}>
          <Title ta={"center"}>My Silly Season</Title>
          <Flex align={"center"} justify="center" gap="10">
            <Text>Fill the drivers for each team and </Text>
            <Button>Generate your grid</Button>
          </Flex>
          <Grid justify="center" gutter="lg">
            {currentGrid.map((team) => (
              <Grid.Col
                key={team.id}
                span={{ md: 12, lg: 6, xl: 4 }}
                w="fit-content"
              >
                <TeamCard team={team} />
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Container>
    </>
  );
}
