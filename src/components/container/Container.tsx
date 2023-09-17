import type { ContainerProps } from '../../utils/types';
import { SearchInput } from '../searchInput/SearchInput';
import { BreadcrumbsNav } from '../breadcrumbsNav/BreadcrumbsNav';

export const Container = ({ titleName }: ContainerProps) => {
  return (
    <div className="col-span-2 m-auto w-full p-8">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="h-10 w-5 rounded bg-secondary"></div>
          <BreadcrumbsNav>{titleName}</BreadcrumbsNav>
        </div>
        <SearchInput />
      </div>
    </div>
  );
};
