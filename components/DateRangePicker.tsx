import { Stack, Typography } from "@mui/material";
import { CustomDatePicker } from "./CustomDatePicker";
import { useEffect } from "react";

export const DateRangePicker: React.FC<{
  startDate: Date | null;
  setStartDate: (value: Date | null) => void;
  endDate: Date | null;
  setEndDate: (value: Date | null) => void;
}> = ({ startDate, setStartDate, endDate, setEndDate }) => {
  const handleChangeStartDate = (value: Date) => {
    setStartDate(value);
    if (endDate && endDate < value) {
      setEndDate(null);
    }
  };

  const handleChangeEndDate = (value: Date) => {
    setEndDate(value);
  };

  useEffect(() => {
    if (startDate && endDate && endDate < startDate) {
      setEndDate(null);
    }
  }, [startDate, endDate, setEndDate]);

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <CustomDatePicker
        value={startDate}
        onChange={handleChangeStartDate}
        maxDate={endDate || undefined}
      />
      <Typography sx={{ fontWeight: 700 }}>~</Typography>
      <CustomDatePicker
        value={endDate}
        onChange={handleChangeEndDate}
        minDate={startDate || undefined}
      />
    </Stack>
  );
};
