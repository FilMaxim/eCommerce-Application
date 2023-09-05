import type { Dispatch } from '@reduxjs/toolkit';
import { updateExtremumsData, updateProductsData } from '../../pages/catalogPage/utils/updateData';
import { fetchFilteredProducts } from '../../helpers/api/apiRoot';
import { getExtremums } from '../../pages/catalogPage/utils/getExtremums';
import { normalizeData } from '../../pages/catalogPage/utils/normalizeData';

export const handleSearch = async (searchText: string, dispatch: Dispatch): Promise<void> => {
  await updateProductsData(dispatch, fetchFilteredProducts, normalizeData, undefined, undefined, searchText);
  await updateExtremumsData(dispatch, fetchFilteredProducts, getExtremums, undefined, undefined, searchText);
};
