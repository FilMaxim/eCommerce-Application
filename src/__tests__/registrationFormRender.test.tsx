import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { RegistrationForm } from '../components/forms/RegistrationForm/RegistrationForm';
import { initialValues } from '../components/forms/inputs/inputsData';
import { getValidationSchema } from '../components/forms/util/validationSchema';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

describe('RegistrationForm renders correctly', () => {
  // TODO: fix snapshot
  it.skip('renders correctly', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Routes>
          <Route
            path={''}
            element={
              <RegistrationForm
                initialValues={initialValues}
                onSubmit={jest.fn()}
                getValidationSchema={getValidationSchema}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('expands when billing address checkbox is unchecked', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path={''}
            element={
              <RegistrationForm
                initialValues={initialValues}
                onSubmit={jest.fn()}
                getValidationSchema={getValidationSchema}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );

    expect(screen.queryByText(/Billing address:/i)).toBeFalsy();

    fireEvent.click(screen.getByLabelText(/same as billing address/i));

    expect(screen.getByText(/Billing address:/i)).toBeTruthy();
  });
});
