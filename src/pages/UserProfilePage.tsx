import { useSelector } from 'react-redux';
import type { Customer } from '@commercetools/platform-sdk';
import { Input } from '../components/forms/inputs/Input';
import { Formik, Form } from 'formik';
import { FieldSetName, inputsData } from '../components/forms/inputs/inputsData';
import { useState } from 'react';
import { AdressFieldSet } from '../components/forms/inputs/AdressFieldSet';
import { IconButton } from '@mui/material';
import type { RootState } from '../utils/types';
import { getCountryByCode } from '../components/forms/util/getCountry';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export const UserProfilePage = () => {
  const [editable, setEditable] = useState<boolean>(true);
  const customer = useSelector<RootState>((state: RootState) => state.customer) as Customer;
  const isBillingAddress = customer.addresses.length > 1;
  const { firstName, lastName, date } = inputsData;

  const initialValues = {
    firstName: customer.firstName,
    lastName: customer.lastName,
    date: customer.dateOfBirth,
    shippingCountry: getCountryByCode(customer.addresses[0].country),
    shippingStreetName: customer.addresses[0].streetName,
    shippingPostalCode: customer.addresses[0].postalCode,
    shippingCity: customer.addresses[0].city,
    billingCountry: getCountryByCode(customer.addresses[1]?.country),
    billingStreetName: customer.addresses[1]?.streetName,
    billingPostalCode: customer.addresses[1]?.postalCode,
    billingCity: customer.addresses[1]?.city
  };

  const onSubmit = (value: typeof initialValues) => {
    console.log(value);
  };

  return (
    <>
      <p>profile</p>
      <hr />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form className="w-[20rem]">
              {[firstName, lastName, date].map(({ name, placeholder, type }) => (
                <Input
                  key={name}
                  name={name}
                  placeholder={placeholder}
                  type={type}
                  formik={formik}
                  disabled={editable}
                />
              ))}
              <AdressFieldSet
                formik={formik}
                fieldSet={FieldSetName.Shipping}
                disabled={editable}
              />
              {isBillingAddress && (
                <AdressFieldSet
                  formik={formik}
                  fieldSet={FieldSetName.Billing}
                  disabled={editable}
                />
              )}
              <IconButton
                aria-label="edit"
                color="primary"
                onClick={() => {
                  setEditable(!editable);
                }}
              >
                <EditOutlinedIcon />
              </IconButton>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
