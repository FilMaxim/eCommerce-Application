import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { RegistrationForm } from '../components/forms/RegistrationForm/RegistrationForm';
import { getValidationSchema } from '../components/forms/util/validationSchema';
import { submitDataWithBilling } from '../components/forms/util/submitFakeData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

describe('registrationForm submit correctly', () => {
  it('submits with all correct fields', async () => {
    const fakeOnSubmit = jest.fn();

    render(
      <BrowserRouter>
        <Routes>
          <Route
            path={''}
            element={
              <RegistrationForm
                initialValues={submitDataWithBilling}
                onSubmit={fakeOnSubmit}
                getValidationSchema={getValidationSchema}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );

    await waitFor(() => {
      // eslint-disable-next-line testing-library/no-wait-for-side-effects
      fireEvent.click(screen.getByText(/Submit/i));
    });

    expect(fakeOnSubmit.mock.calls).toHaveLength(1);
    expect(fakeOnSubmit.mock.calls[0][0]).not.toBe({ ...submitDataWithBilling, firstName: 'John', lastName: 'Doe' });
    expect(fakeOnSubmit.mock.calls[0][0]).toBe(submitDataWithBilling);
  });

  it('not submits with empty fields', async () => {
    const fakeOnSubmit = jest.fn();

    render(
      <BrowserRouter>
        <Routes>
          <Route
            path={''}
            element={
              <RegistrationForm
                initialValues={{ ...submitDataWithBilling, firstName: '', lastName: '' }}
                onSubmit={fakeOnSubmit}
                getValidationSchema={getValidationSchema}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );

    await waitFor(() => {
      // eslint-disable-next-line testing-library/no-wait-for-side-effects
      fireEvent.click(screen.getByText(/Submit/i));
    });

    expect(fakeOnSubmit.mock.calls).toHaveLength(0);
  });
});
