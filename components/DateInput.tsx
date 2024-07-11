"use client";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ja from "date-fns/locale/ja";
import { useState } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
} from "@mui/material";
import { getDaysInMonth } from "date-fns";

const StyledDatePicker = styled(DatePicker)(({ theme }) => ({
  "& .MuiInputBase-root": {
    height: "30px",
    borderRadius: "8px",
    backgroundColor: "#F6F6F6",
    border: "2px solid white",
    transition: theme.transitions.create(["border-color"]),
    "&:hover": {
      border: "2px solid #F0F0F0",
    },
    "&.Mui-focused": {
      border: `2px solid ${theme.palette.primary.main}`,
    },
  },
  "& .MuiInputBase-input": {
    padding: "0 14px",
    height: "30px",
    lineHeight: "30px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  height: "30px",
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

export const DateInput = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [month, setMonth] = useState<string>(
    String(new Date().getMonth() + 1).padStart(2, "0")
  );
  const [day, setDay] = useState<string>(
    String(new Date().getDate()).padStart(2, "0")
  );

  const handleDateChange = (newDate: Date | null) => {
    setSelectedDate(newDate);
    if (newDate) {
      setMonth(String(newDate.getMonth() + 1).padStart(2, "0"));
      setDay(String(newDate.getDate()).padStart(2, "0"));
    }
  };

  const handleMonthChange = (
    event: SelectChangeEvent<unknown>,
    _child: React.ReactNode
  ) => {
    const newMonth = event.target.value as string;
    setMonth(newMonth);
    updateDate(selectedDate?.getFullYear(), parseInt(newMonth), parseInt(day));
  };

  const handleDayChange = (
    event: SelectChangeEvent<unknown>,
    _child: React.ReactNode
  ) => {
    const newDay = event.target.value as string;
    setDay(newDay);
    updateDate(selectedDate?.getFullYear(), parseInt(month), parseInt(newDay));
  };
  const updateDate = (year: number | undefined, month: number, day: number) => {
    if (year) {
      const newDate = new Date(year, month - 1, day);
      setSelectedDate(newDate);
    }
  };

  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from(
    { length: selectedDate ? getDaysInMonth(selectedDate) : 31 },
    (_, i) => i + 1
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <StyledDatePicker
          value={selectedDate}
          onChange={handleDateChange}
          format="yyyy"
          sx={{
            width: "120px",
          }}
        />
        <FormControl sx={{ width: "80px" }}>
          <StyledSelect value={month} onChange={handleMonthChange}>
            {months.map((month) => (
              <MenuItem key={month} value={month.toString().padStart(2, "0")}>
                {month.toString().padStart(2, "0")}
              </MenuItem>
            ))}
          </StyledSelect>
        </FormControl>
        <FormControl sx={{ width: "80px" }}>
          <StyledSelect value={day} onChange={handleDayChange}>
            {days.map((day) => (
              <MenuItem key={day} value={day.toString().padStart(2, "0")}>
                {day.toString().padStart(2, "0")}
              </MenuItem>
            ))}
          </StyledSelect>
        </FormControl>
      </div>
    </LocalizationProvider>
  );
};
