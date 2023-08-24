import { Input } from '../inputs/Input';
import { Formik, Form, type FormikProps } from 'formik';
import { FieldSetName } from '../inputs/inputsData';
import { useState } from 'react';
import { AdressFieldSet } from '../inputs/AdressFieldSet';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import IconButton from '@mui/material/IconButton';
import type { ProfileInitialValues, UserProfileProps } from '../../../utils/types';
import { TabsPanel } from '../../tabs/tabPanel';
import { getInitialValues } from '../util/getInitialValuesFromCustomer';
import { Button } from '@mui/material';

export const CustomerProfile = ({ customer, inputsData, onSubmit }: UserProfileProps) => {
  const [editable, setEditable] = useState<boolean>(false);
  const isBillingAddress = customer.addresses.length > 1;
  const { firstName, lastName, date, email } = inputsData;

  const initialValues = getInitialValues(customer);

  const personalData = (formik: FormikProps<ProfileInitialValues>) => (
    <div className="flex max-w-[42rem] flex-wrap items-center justify-center gap-2">
      {[firstName, lastName, date, email].map(({ name, placeholder, type }) => (
        <Input
          key={name}
          name={name}
          placeholder={placeholder}
          type={type}
          formik={formik}
          disabled={name === 'email' ? true : !editable}
        />
      ))}
    </div>
  );

  const address = (formik: FormikProps<ProfileInitialValues>) => (
    <div className="flex flex-wrap justify-center gap-2">
      <div className="relative">
        {!isBillingAddress && <span className="absolute right-2 top-1 text-sm text-gray-500">*same as billing</span>}
        <AdressFieldSet
          formik={formik}
          fieldSet={FieldSetName.Shipping}
          disabled={!editable}
        />
      </div>
      {isBillingAddress && (
        <AdressFieldSet
          formik={formik}
          fieldSet={FieldSetName.Billing}
          disabled={!editable}
        />
      )}
    </div>
  );

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form className="relative m-auto mt-10 flex max-w-[50rem] flex-col items-center justify-center rounded border p-2">
              <p className="text-xl text-blue-600">{editable ? 'Edit Your Prifile' : 'Your Profile'}</p>
              <div className="absolute right-2 top-2">
                <IconButton
                  aria-label="edit"
                  color="primary"
                  onClick={() => {
                    setEditable(true);
                  }}
                  disabled={editable}
                >
                  <EditOutlinedIcon />
                </IconButton>
              </div>
              <TabsPanel
                children1={personalData(formik)}
                children2={address(formik)}
                children3={'Chenge Password would be here'}
              />
              {editable && (
                <div className="flex gap-2">
                  {['Cancel', 'Save'].map((btnText) => (
                    <Button
                      key={btnText}
                      onClick={() => {
                        setEditable(false);
                      }}
                      color={btnText === 'Cancel' ? 'secondary' : 'primary'}
                    >
                      {btnText}
                    </Button>
                  ))}
                </div>
              )}
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
