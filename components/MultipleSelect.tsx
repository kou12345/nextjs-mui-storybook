import {
  Box,
  Chip,
  FormControl,
  Input,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type Props = {
  values: string[];
  onChange: (value: string[]) => void;
  options: string[]; // TODO { value: string; label: string; }[];にしたい
  label?: string;
};

export const MultipleSelect = ({ values, onChange, options, label }: Props) => {
  const handleChange = (event: SelectChangeEvent<string[]>) => {
    onChange(
      typeof event.target.value === "string"
        ? [event.target.value]
        : event.target.value
    );
  };

  const handleDelete = (value: string) => {
    const newValues = values.filter((v) => v !== value);
    onChange(newValues);
  };

  return (
    <FormControl fullWidth>
      <Select
        multiple
        value={values}
        label={label}
        onChange={handleChange}
        input={<Input />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip
                key={value}
                label={value}
                onDelete={(event) => handleDelete(value)}
                variant="outlined"
                onMouseDown={(event) => {
                  // チップの削除ボタンをクリックできるようにする
                  event.stopPropagation();
                }}
              />
            ))}
          </Box>
        )}
        MenuProps={{
          anchorOrigin: { vertical: "bottom", horizontal: "left" }, // ポップオーバーの表示起点
          transformOrigin: { vertical: "top", horizontal: "left" }, // 表示時の transform の起点
        }}
        sx={{
          width: "400px",
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
