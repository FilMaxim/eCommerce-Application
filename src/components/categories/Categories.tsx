import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { Mapping, RootState } from '../../utils/types';
import { useEffect } from 'react';
import { fetchCategories } from '../../pages/catalogPage/utils/fetchCategories';
import { setCategoriesData } from '../../slices/categoriesSlice';
import { NavRoutes } from '../../utils/routes';
import { CategoryCard } from '../cards/categoryCard/CategoryCard';

export const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categories = useSelector((state: { categoriesData: RootState }) => state.categoriesData.categories);

  useEffect(() => {
    const updateData = async (): Promise<void> => {
      const catecoriesData = await fetchCategories();
      dispatch(setCategoriesData(catecoriesData));
    };

    updateData().catch((error) => {
      throw error;
    });
  }, [dispatch]);

  const routes: Mapping = {
    Companions: NavRoutes.companionsPagePath,
    Cleaners: NavRoutes.cleanersPagePath,
    Pets: NavRoutes.petsPagePath,
    Kitchens: NavRoutes.kitchensPagePath,
    Gardens: NavRoutes.gardensPagePath,
    Deliveries: NavRoutes.deliveriesPagePath
  };

  return (
    <div className="flex justify-center gap-2 self-center overflow-auto rounded border p-1 md:border-none">
      {categories.map((category) => {
        const { name, id } = category;
        return (
          <CategoryCard
            key={id}
            category={name}
            callback={() => {
              navigate({ pathname: routes[name] });
            }}
          />
        );
      })}
    </div>
  );
};
