"use client";

import React, { useState } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  SelectChangeEvent,
} from "@mui/material";

// TODO 不正な日付でも入力できる

export const DateInput = () => {
  const [year, setYear] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [day, setDay] = useState<string>("");

  const handleYearChange = (event: SelectChangeEvent<string>) => {
    setYear(event.target.value as string);
  };

  const handleMonthChange = (event: SelectChangeEvent<string>) => {
    setMonth(event.target.value as string);
  };

  const handleDayChange = (event: SelectChangeEvent<string>) => {
    setDay(event.target.value as string);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: 101 },
    (_, i) => currentYear - 50 + i
  ).sort((a, b) => b - a);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <Box sx={{ display: "flex", gap: "4px" }}>
      <FormControl sx={{ width: "120px" }}>
        <InputLabel>年</InputLabel>
        <Select value={year} onChange={handleYearChange} label="年">
          {years.map((year) => (
            <MenuItem key={year} value={year.toString()}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ width: "80px" }}>
        <InputLabel>月</InputLabel>
        <Select value={month} onChange={handleMonthChange} label="月">
          {months.map((month) => (
            <MenuItem key={month} value={month.toString()}>
              {month.toString().padStart(2, "0")}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ width: "80px" }}>
        <InputLabel>日</InputLabel>
        <Select value={day} onChange={handleDayChange} label="日">
          {days.map((day) => (
            <MenuItem key={day} value={day.toString()}>
              {day.toString().padStart(2, "0")}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
