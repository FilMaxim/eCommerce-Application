import type { CategoriesList, ContainerProps, Mapping } from '../../utils/types';
import { CategoryCard } from '../cards/categoryCard/CategoryCard';
import { useEffect, useState } from 'react';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { SearchInput } from '../searchInput/SearchInput';
import { fetchCategories } from '../../pages/catalogPage/utils/fetchCategories';
import { NavRoutes } from '../../utils/routes';
import { useNavigate } from 'react-router-dom';
import { BreadcrumbsNav } from '../readcrumbsNav/BreadcrumbsNav';

export const Container = ({ titleName, titleDescription }: ContainerProps) => {
  const { setCategoryId, setCategoryName } = useCategoryContext();
  const [categoriesList, setCategoryList] = useState<CategoriesList[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const updateData = async (): Promise<void> => {
      await fetchCategories(setCategoryList);
    };
    updateData().catch((error) => {
      throw error;
    });
  }, []);

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
          <p className="text-lg font-bold text-secondary">{titleName}</p>
        </div>
        <SearchInput />
      </div>
      <p className="mb-2 text-2xl font-bold sm:text-3xl">{titleDescription}</p>
      <BreadcrumbsNav />
      <div className="flex max-w-[90%] gap-2 self-center overflow-auto rounded border p-1 md:border-none">
        {categoriesList.map((category) => {
          const { name, id } = category;
          return (
            <CategoryCard
              key={id}
              category={name}
              callback={() => {
                setCategoryId(id);
                setCategoryName(name);
                navigate({ pathname: routes[name] });
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
