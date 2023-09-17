import '../../i18n';
import { Container } from '../../components/container/Container';
import { FilterBar } from '../../components/filter/FilterBar';
import { CategoriesProveder } from '../../components/CategoriesProvider';
import { TemporaryDrawer } from '../../components/drawer/Drawer';
import { SortBar } from './utils/SortBar';
import { CatalogContent } from './CatalogContent';

export const CatalogPage = () => {
  return (
    <CategoriesProveder>
      <Container titleName="Categories" />
      <div className="mb-2 flex items-center sm:pl-[18rem]">
        <div className="pl-4 sm:hidden">
          <TemporaryDrawer>
            <FilterBar key="main-filter" />
          </TemporaryDrawer>
        </div>
        <SortBar />
      </div>
      <div className="mb-2 flex gap-2">
        <div className="hidden sm:block">
          <FilterBar key="hidden-filter" />
        </div>
        <CatalogContent />
      </div>
    </CategoriesProveder>
  );
};
