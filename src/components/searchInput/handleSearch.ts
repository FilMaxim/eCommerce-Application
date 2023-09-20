import type { Dispatch } from '@reduxjs/toolkit';
import { updateExtremumsData, updateProductsData } from '../../pages/catalogPage/utils/updateData';
import { fetchFilteredProducts } from '../../helpers/api/apiRoot';
import { getExtremums } from '../../pages/catalogPage/utils/getExtremums';

export const handleSearch = async (searchText: string, dispatch: Dispatch): Promise<void> => {
  const data = await fetchFilteredProducts({ 'text.en-US': searchText });
  updateProductsData(dispatch, data);
  await updateExtremumsData(dispatch, fetchFilteredProducts, getExtremums, { 'text.en-US': searchText });
};
