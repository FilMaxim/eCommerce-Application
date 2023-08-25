/* eslint-enable */
import { useEffect, useState } from 'react';
import { getCategoris } from '../helpers/api/apiRoot';
import { Container } from '../components/Container';

export const CatalogPage = () => {
  const [categoryList, setCategoryList] = useState<string[]>([]);

  useEffect(() => {
    console.log('Fetching data...', categoryList);
    const fetchData = async () => {
      const data = await getCategoris();
      const categories = data.body.results.map((item) => {
        const [name] = Object.values(item.name);
        return name;
      });

      setCategoryList([...categories]);
    };
    fetchData();
  }, []);
  return (
    <Container
      titleName="Categories"
      titleDescription="Browse By Category"
      buttons={[]}
      cards={categoryList}
    />
  );
};
