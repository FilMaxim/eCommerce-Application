import { Formik, Form } from 'formik';
import { useState } from 'react';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import IconButton from '@mui/material/IconButton';
import type { CustomerPageFormProps } from '../../../utils/types';
import { Button } from '@mui/material';

export const CustomerPageForm = ({ initialValues, formInner, onSubmit, validationSchema }: CustomerPageFormProps) => {
  const [editable, setEditable] = useState<boolean>(false);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
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
          {formInner(editable)}
          {editable && (
            <div className="flex w-full justify-center gap-2">
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
      </div>
    </Formik>
  );
};
