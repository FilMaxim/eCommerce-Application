import { Field, ErrorMessage } from 'formik';

const Street = () => {
  return (
    <>
      <label
        htmlFor="street"
        className="mb-2 block text-sm font-bold text-gray-700"
      >
        Street
      </label>
      <Field
        className="focus:shadow-outline mb-3 appearance-none rounded border border-red-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        type="text"
        name="street"
        placeholder="Street"
      />
      <ErrorMessage
        name="street"
        component="p"
        className="text-xs italic text-red-500"
      />
    </>
  );
};

const City = () => {
  return (
    <>
      <label
        htmlFor="city"
        className="mb-2 block text-sm font-bold text-gray-700"
      >
        City
      </label>
      <Field
        className="focus:shadow-outline mb-3 appearance-none rounded border border-red-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        type="text"
        name="city"
        placeholder="City"
      />
      <ErrorMessage
        name="city"
        component="p"
        className="text-xs italic text-red-500"
      />
    </>
  );
};

const PostalCode = () => {
  return (
    <>
      <label
        htmlFor="postalCode"
        className="mb-2 block text-sm font-bold text-gray-700"
      >
        Postal Code
      </label>
      <Field
        className="focus:shadow-outline mb-3 appearance-none rounded border border-red-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        type="text"
        name="postalCode"
        placeholder="Postal Code"
      />
      <ErrorMessage
        name="postalCode"
        component="p"
        className="text-xs italic text-red-500"
      />
    </>
  );
};

const Country = () => {
  return (
    <>
      <label
        htmlFor="country"
        className="mb-2 block text-sm font-bold text-gray-700"
      >
        Country
      </label>
      <Field
        as="select"
        className="focus:shadow-outline mb-3 appearance-none rounded border border-red-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        type="text"
        name="country"
        placeholder="Country"
      >
        <option value="Afghanistan">Afghanistan</option>
        <option value="Albania">Albania</option>
        <option value="Algeria">Algeria</option>
        <option value="Andorra">Andorra</option>
        <option value="Angola">Angola</option>
        <option value="Anguilla">Anguilla</option>
        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
      </Field>
      <ErrorMessage
        name="country"
        component="p"
        className="text-xs italic text-red-500"
      />
    </>
  );
};

export const AdressFieldSet = () => {
  return (
    <>
      <Street />
      <City />
      <PostalCode />
      <Country />
    </>
  );
};
