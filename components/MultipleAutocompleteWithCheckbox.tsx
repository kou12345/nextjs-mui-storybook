import { Autocomplete, Checkbox, TextField } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { top100Films } from "./MultipleAutocomplete";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const MultipleAutocompleteWithCheckbox = () => {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={top100Films}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.title}
          </li>
        );
      }}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} placeholder="Favorites" />
      )}
    />
  );
};
