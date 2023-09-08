import { IconButton, Stack } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const ArrowButtonGroup = () => {
  return (
    <Stack
      spacing={2}
      direction="row"
    >
      <IconButton
        style={{ backgroundColor: '#F5F5F5', color: '#000000' }}
        size="medium"
      >
        <KeyboardArrowLeftIcon />
      </IconButton>
      <IconButton
        style={{ backgroundColor: '#F5F5F5', color: '#000000' }}
        size="medium"
      >
        <KeyboardArrowRightIcon />
      </IconButton>
    </Stack>
  );
};
