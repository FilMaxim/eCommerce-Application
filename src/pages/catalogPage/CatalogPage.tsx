import '../../i18n';
import { Container } from '../../components/container/Container';
import { ArrowButtonGroup } from '../../components/buttons/ArrowButtonsGroup';
import { FilterBar } from '../../components/filter/FilterBar';
import { CategoriesProveder } from '../../components/CategoriesProvider';
import { TemporaryDrawer } from '../../components/drawer/Drawer';
import { SortBar } from './utils/SortBar';
import { CatalogContent } from './CatalogContent';

export const CatalogPage = () => {
  return (
    <CategoriesProveder>
      <div className="container mx-auto">
        <Container
          titleName="Categories"
          titleDescription="Browse By Category"
          buttons={[ArrowButtonGroup]}
        />
        <div className="mb-2 flex items-center sm:pl-[18rem]">
          <div className="pl-4 sm:hidden">
            <TemporaryDrawer>
              <FilterBar />
            </TemporaryDrawer>
          </div>
          <SortBar />
        </div>
        <div className="mb-2 flex gap-2">
          <div className="hidden sm:block">
            <FilterBar />
          </div>
          <CatalogContent />
        </div>
      </div>
    </CategoriesProveder>
  );
};
