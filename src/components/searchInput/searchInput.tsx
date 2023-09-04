import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useSelector } from 'react-redux';
import type { RootState } from '../../utils/types';

export const SearchInput = () => {
  const { cards } = useSelector((state: { productsData: RootState }) => state.productsData);
  const labels = cards.map((card) => card.name);
  return (
    <Autocomplete
      size="small"
      disablePortal
      id="combo-box-demo"
      options={labels}
      renderInput={(props) => (
        <TextField
          {...props}
          label="Search"
        />
      )}
      className="w-[8rem] sm:w-[10rem]"
    />
  );
};
