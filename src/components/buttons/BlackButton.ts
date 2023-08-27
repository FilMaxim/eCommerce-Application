import { Button, styled } from '@mui/material';

export const BlackButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.common.black,
  '&:hover': {
    backgroundColor: theme.palette.grey[900]
  }
}));
