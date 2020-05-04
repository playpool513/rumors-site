import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import { t } from 'ttag';

const useStyles = makeStyles(theme => ({
  root: {
    border: `1px solid ${theme.palette.secondary[100]}`,
    background: ({ expand }) =>
      expand ? theme.palette.secondary[100] : theme.palette.common.white,
    transition: 'background .3s',
    borderRadius: 4,
    padding: '5px 10px',
  },
  select: {
    '&:focus': {
      backgroundColor: 'inherit',
    },
  },
}));

function SortInput({ orderBy, onChange = () => {}, options }) {
  const [expand, setExpand] = useState(false);
  const classes = useStyles({ expand });
  return (
    <TextField
      select
      InputProps={{
        classes: {
          root: classes.root,
        },
        disableUnderline: true,
        startAdornment: (
          <InputAdornment position="start">{t`Sort by`}</InputAdornment>
        ),
      }}
      SelectProps={{
        classes: {
          root: classes.select,
        },
        onOpen: () => setExpand(true),
        onClose: () => setExpand(false),
      }}
      value={orderBy}
      onChange={e => onChange(e.target.value)}
    >
      {options.map(({ value, label }) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      ))}
    </TextField>
  );
}

export default SortInput;