import { FunctionComponent, useId } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import ja from "date-fns/locale/ja";
import {
  FormControl,
  Input,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
  Typography,
} from "@mui/material";
import { getDaysInMonth } from "date-fns";
import { DateCalendar } from "@mui/x-date-pickers";
import * as Popover from "@radix-ui/react-popover";
import { format } from "date-fns";

const StyledSelect = styled(Select)(({ theme }) => ({
  height: "34px",
  backgroundColor: "#F6F6F6",
  border: "2px solid white",
  borderRadius: "8px",
  transition: theme.transitions.create(["border-color"]),
  "&:hover": {
    border: "2px solid #F0F0F0",
  },
  "&.Mui-focused": {
    border: `2px solid ${theme.palette.primary.main}`,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiSelect-select": {
    padding: "0 14px",
    height: "30px",
    lineHeight: "30px",
  },
}));

export const DateSelect: FunctionComponent<{
  value: string;
  onChange: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void;
  options: number[];
}> = ({ value, onChange, options }) => (
  <FormControl sx={{ width: "80px" }}>
    <StyledSelect value={value} onChange={onChange}>
      {options.map((option) => (
        <MenuItem key={option} value={option.toString().padStart(2, "0")}>
          {option.toString().padStart(2, "0")}
        </MenuItem>
      ))}
    </StyledSelect>
  </FormControl>
);

export const CustomDatePicker: FunctionComponent<{
  value: Date | null;
  onChange: (value: Date) => void;
  minDate?: Date;
  maxDate?: Date;
}> = ({ value, onChange, minDate, maxDate }) => {
  const id = useId();

  const year = value ? value.getFullYear() : new Date().getFullYear();
  const month = value ? String(value.getMonth() + 1).padStart(2, "0") : "";
  const day = value ? String(value.getDate()).padStart(2, "0") : "";

  const handleDateChange = (newDate: Date | null) => {
    if (newDate) {
      onChange(newDate);
    }
  };

  const handleMonthChange = (
    event: SelectChangeEvent<unknown>,
    _child: React.ReactNode
  ) => {
    const newMonth = event.target.value as string;
    updateDate(year, parseInt(newMonth), parseInt(day) || 1);
  };

  const handleDayChange = (
    event: SelectChangeEvent<unknown>,
    _child: React.ReactNode
  ) => {
    const newDay = event.target.value as string;
    updateDate(year, parseInt(month) || 1, parseInt(newDay));
  };

  const updateDate = (year: number, month: number, day: number) => {
    const newDate = new Date(year, month - 1, day);
    if (minDate && newDate < minDate) {
      onChange(minDate);
    } else if (maxDate && newDate > maxDate) {
      onChange(maxDate);
    } else {
      onChange(newDate);
    }
  };

  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from(
    { length: value ? getDaysInMonth(value) : 31 },
    (_, i) => i + 1
  );

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Popover.Root>
        <Popover.Trigger asChild>
          <div style={{ position: "relative", width: "100px" }}>
            <Input
              aria-describedby={id}
              value={value ? format(value, "yyyy") : ""}
              onChange={() => {}}
              style={{
                cursor: "pointer",
                textAlign: "left",
                color: "#000",
              }}
            />
          </div>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            style={{
              width: "max-content",
              height: "max-content",
              background: "white",
              borderRadius: "8px",
            }}
          >
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              adapterLocale={ja}
            >
              <DateCalendar
                value={value}
                onChange={handleDateChange}
                minDate={minDate}
                maxDate={maxDate}
              />
            </LocalizationProvider>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
      <Typography sx={{ fontWeight: 700 }}>年</Typography>
      <DateSelect value={month} onChange={handleMonthChange} options={months} />
      <Typography sx={{ fontWeight: 700 }}>月</Typography>
      <DateSelect value={day} onChange={handleDayChange} options={days} />
      <Typography sx={{ fontWeight: 700 }}>日</Typography>
    </div>
  );
};
