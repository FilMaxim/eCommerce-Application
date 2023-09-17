import type { ContainerProps, Mapping, RootState } from '../../utils/types';
import { CategoryCard } from '../cards/categoryCard/CategoryCard';
import { useEffect } from 'react';
import { SearchInput } from '../searchInput/SearchInput';
import { fetchCategories } from '../../pages/catalogPage/utils/fetchCategories';
import { NavRoutes } from '../../utils/routes';
import { useNavigate } from 'react-router-dom';
import { BreadcrumbsNav } from '../breadcrumbsNav/BreadcrumbsNav';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoriesData } from '../../slices/categoriesSlice';

export const Container = ({ titleName }: ContainerProps) => {
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
    <div className="m-auto flex max-w-7xl flex-col gap-2 p-4 lg:px-8">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="h-10 w-5 rounded bg-secondary"></div>
          <BreadcrumbsNav>{titleName}</BreadcrumbsNav>
        </div>
        <SearchInput />
      </div>
      <div className="flex max-w-[90%] gap-2 self-center overflow-auto rounded border p-1 md:border-none">
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
    </div>
  );
};
