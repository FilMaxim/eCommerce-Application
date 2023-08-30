import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { submitDataWithBilling } from '../components/forms/util/submitFakeData';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RegistrationForm } from '../components/forms/RegistrationForm/RegistrationForm';
import { getValidationSchema } from '../components/forms/util/validationSchema';
import type { FakeOnSubmit, InitialValuesRegistration } from '../utils/types';

export const TestRegistrationForm = (
  fakeOnSubmit: FakeOnSubmit,
  initialValues: InitialValuesRegistration
) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={''}
          element={
            <RegistrationForm
              initialValues={initialValues}
              onSubmit={fakeOnSubmit}
              getValidationSchema={getValidationSchema}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

describe('registrationForm submit correctly', () => {
  it('submits with all correct fields', async () => {
    const fakeOnSubmit = jest.fn();
    render(TestRegistrationForm(fakeOnSubmit, submitDataWithBilling));

    await waitFor(() => {
      // eslint-disable-next-line testing-library/no-wait-for-side-effects
      fireEvent.click(screen.getByText(/Create Account/i));
    });

    expect(fakeOnSubmit.mock.calls).toHaveLength(1);
    expect(fakeOnSubmit.mock.calls[0][0]).not.toBe({
      ...submitDataWithBilling,
      firstName: 'John',
      lastName: 'Doe'
    });
    expect(fakeOnSubmit.mock.calls[0][0]).toBe(submitDataWithBilling);
  });

  it('not submits with empty fields', async () => {
    const fakeOnSubmit = jest.fn();
    render(
      TestRegistrationForm(fakeOnSubmit, {
        ...submitDataWithBilling,
        firstName: '',
        lastName: ''
      })
    );

    await waitFor(() => {
      // eslint-disable-next-line testing-library/no-wait-for-side-effects
      fireEvent.click(screen.getByText(/Create Account/i));
    });

    expect(fakeOnSubmit.mock.calls).toHaveLength(0);
  });
});
