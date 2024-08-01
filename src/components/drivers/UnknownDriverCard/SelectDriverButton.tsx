import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { AppDispatch, RootState } from "@/store/store";
import { drivers } from "@/data/drivers";
import { useMemo } from "react";
import { Select } from "@mantine/core";
import { addDriver } from "@/store/gridSlice";

type SelectDriverButtonProps = {
  teamId: number;
};

export default function SelectDriverButton({
  teamId,
}: SelectDriverButtonProps) {
  const currentGrid = useSelector((state: RootState) => state.grid);
  const dispatch = useDispatch<AppDispatch>();

  const driversWithoutTeam = useMemo(() => {
    const driversIdsWithTeam = _.flatMap(currentGrid, (team) =>
      team.drivers.map((driver) => driver.id)
    );
    return drivers.filter((driver) => !driversIdsWithTeam.includes(driver.id));
  }, [currentGrid]);

  const onSelectDriver = (driverId: string | null) => {
    if (driverId) {
      dispatch(addDriver({ teamId, driverId: parseInt(driverId) }));
    }
  };
  return (
    <Select
      placeholder={
        driversWithoutTeam.length == 0
          ? "There are no free drivers"
          : "Select a free driver"
      }
      onChange={onSelectDriver}
      disabled={driversWithoutTeam.length == 0}
      data={driversWithoutTeam.map((driver) => ({
        value: driver.id.toString(),
        label: driver.name,
      }))}
    />
  );
}
