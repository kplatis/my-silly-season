import { TeamWithDrivers } from "@/types/common";
import { Driver } from "@/types/drivers";
import { Team } from "@/types/teams";

export default function buildGrid(
  teams: Team[],
  drivers: Driver[]
): TeamWithDrivers[] {
  return teams.map((team) => ({
    ...team,
    drivers: drivers.filter((driver) => driver.nextYearTeam === team.id),
  }));
}
