import '../../i18n';
import { Container } from '../../components/container/Container';
import { FilterBar } from '../../components/filter/FilterBar';
import { CategoriesProveder } from '../../components/CategoriesProvider';
import { TemporaryDrawer } from '../../components/drawer/Drawer';
import { SortBar } from './utils/SortBar';
import { CatalogContent } from './CatalogContent';
import { Categories } from '../../components/categories/Categories';

export const CatalogPage = () => {
  return (
    <CategoriesProveder>
      <div className="container mx-auto">
        <Container titleName="Categories" />
        <div className="grid grid-rows-[120px_40px_auto] gap-2 sm:grid-cols-[240px_auto]">
          <div className="row-span-3 hidden sm:block">
            <FilterBar key="hidden-filter" />
          </div>
          <Categories />
          <div className="mb-2 flex items-center justify-center sm:hidden">
            <TemporaryDrawer>
              <FilterBar key="main-filter" />
            </TemporaryDrawer>
            <SortBar />
          </div>
          <CatalogContent />
        </div>
      </div>
    </CategoriesProveder>
  );
};
