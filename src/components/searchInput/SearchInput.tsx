import { IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import { handleSearch } from './handleSearch';

export const SearchInput = () => {
  const dispathc = useDispatch();

  return (
    <Formik
      initialValues={{ searchQuery: '' }}
      onSubmit={async ({ searchQuery }, { resetForm }) => {
        await handleSearch(searchQuery, dispathc);
        resetForm();
      }}
    >
      {({ submitForm, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Field
            name="searchQuery"
            as={TextField}
            label="Search"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    type="button"
                    aria-label="search"
                    onClick={() => {
                      submitForm().catch((error) => {
                        throw error;
                      });
                    }}
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Form>
      )}
    </Formik>
  );
};
