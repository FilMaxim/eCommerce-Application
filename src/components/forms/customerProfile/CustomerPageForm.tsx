import { Formik, Form } from 'formik';
import { useState } from 'react';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import IconButton from '@mui/material/IconButton';
import type { AddressesInitialValues, CustomerPageFormProps } from '../../../utils/types';
import { Button } from '@mui/material';

export const CustomerPageForm = ({
  initialValues,
  formInner,
  onSubmit,
  validationSchema,
  addressExtraControls
}: CustomerPageFormProps) => {
  const [editable, setEditable] = useState<boolean>(false);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnMount
    >
      {(formik) => (
        <div className="relative pb-3 pt-[3rem]">
          <Form className=" flex max-w-[42rem] flex-wrap items-center justify-center gap-2">
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
            {formInner(editable, formik)}
            {addressExtraControls !== undefined ? addressExtraControls(editable, initialValues as AddressesInitialValues) : null}
            {editable && (
              <div className="flex w-full justify-center gap-2">
                <Button
                  onClick={() => {
                    formik.resetForm();
                    setEditable(false);
                  }}
                  color="secondary"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={!formik.isValid || !formik.dirty}
                  onClick={() => {
                    setEditable(false);
                    formik.submitForm().catch((err) => {
                      console.error(err);
                    });
                  }}
                >
                  Save
                </Button>
              </div>
            )}
          </Form>
        </div>
      )}
    </Formik>
  );
};
