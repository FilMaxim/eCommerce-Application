import type { FormInnerComponent } from '../../../../utils/types';
import { PasswordInput } from '../../inputs/PasswordInput';

export const PasswordChange: FormInnerComponent = (editable: boolean, formik) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <PasswordInput
        placeholder="Current Password:"
        formik={formik}
        disabled={!editable}
        name="currentPassword"
      />
      <PasswordInput
        placeholder="New Password:"
        formik={formik}
        disabled={!editable}
        name="newPassword"
      />
    </div>
  );
};
