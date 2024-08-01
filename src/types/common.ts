import { Driver } from "@/types/drivers";
import { Team } from "@/types/teams";

export interface TeamWithDrivers extends Team {
  drivers: Driver[];
}
