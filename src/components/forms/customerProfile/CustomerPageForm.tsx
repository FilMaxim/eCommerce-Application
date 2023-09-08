import { Formik, Form } from 'formik';
import { useState } from 'react';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import type { AddressesInitialValues, CustomerPageFormProps } from '../../../utils/types';
import { Button } from '@mui/material';

export const CustomerPageForm = ({
  initialValues,
  formInner,
  onSubmit,
  validationSchema,
  addressExtraControls,
  isEditable,
  unsetNewForm,
  onDelete
}: CustomerPageFormProps) => {
  const [editable, setEditable] = useState<boolean>(isEditable ?? false);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnMount
      enableReinitialize
    >
      {(formik) => (
        <div className="relative mb-3 pt-[3rem]">
          <Form className=" flex max-w-[42rem] flex-wrap items-center justify-center gap-2">
            <div className="absolute right-2 top-2">
              <IconButton
                aria-label="edit"
                onClick={() => {
                  setEditable(true);
                }}
                disabled={editable}
              >
                <EditOutlinedIcon />
              </IconButton>
              {addressExtraControls !== undefined && (
                <IconButton
                  aria-label="delete"
                  onClick={() => {
                    onDelete?.((initialValues as AddressesInitialValues).id).catch((err) => {
                      Error(err);
                    });
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </div>
            {formInner(editable, formik)}
            {addressExtraControls !== undefined
              ? addressExtraControls(editable, initialValues as AddressesInitialValues, formik)
              : null}
            {editable && (
              <div className="flex w-full justify-center gap-2">
                <Button
                  onClick={() => {
                    formik.resetForm();
                    setEditable(false);
                    unsetNewForm?.(false);
                  }}
                  color="secondary"
                  variant="outlined"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={!formik.isValid || !formik.dirty}
                  onClick={() => {
                    setEditable(false);
                    formik.submitForm().catch((err) => {
                      Error(err);
                    });
                  }}
                  color="secondary"
                  variant="contained"
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
