import CircularProgress from '@mui/material/CircularProgress';

export const ProgressBar = () => {
  return (
    <div className="mt-[20vh] flex items-center justify-center">
      <CircularProgress
        sx={{ color: '#DB4444' }}
        size="4rem"
      />
    </div>
  );
};
