import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { NavRoutes } from '../../utils/routes';
import bender from '../../assets/cart-bender.png';

export const EmptyCart = () => {
  return (
    <div className="m-auto mt-[5vh] flex max-w-[42rem] flex-col items-center justify-center gap-2 p-2">
      <img
        src={bender}
        alt="scaried robot"
        width={200}
        height={200}
      />
      <p className="text-center text-lg">Cart is empty...</p>
      <Link
        className="text-secondary hover:text-red-800"
        to={NavRoutes.catalogPage}
      >
        <Button
          variant="contained"
          color="secondary"
        >
          Catalog
        </Button>
      </Link>
    </div>
  );
};
