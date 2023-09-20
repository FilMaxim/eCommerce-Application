import { Autocomplete, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Formik } from 'formik';
import type { RootState } from '../../utils/types';
import { handleSearch } from './handleSearch';
import { useState } from 'react';

export const SearchInput = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const { cardsData } = useSelector((state: { productsData: RootState }) => state.productsData);
  const labels = cardsData.map((card) => card.name);

  return (
    <Formik
      initialValues={{ searchQuery: '' }}
      onSubmit={async (_values, { resetForm }) => {
        await handleSearch(query, dispatch);
        resetForm();
      }}
    >
      {({ submitForm, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Autocomplete
            size="small"
            disablePortal
            id="combo-box-demo"
            options={labels}
            renderInput={(props) => (
              <TextField
                {...props}
                label="Search"
                onChange={({ target }) => {
                  setQuery(target.value);
                  submitForm().catch((error) => {
                    throw error;
                  });
                }}
              />
            )}
            className="w-[8rem] sm:w-[10rem]"
          />
        </Form>
      )}
    </Formik>
  );
};
