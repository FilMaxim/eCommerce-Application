import styles from './Container.module.scss';
import type { ContainerProps } from '../../utils/types';
import { CategoryCard } from '../cards/categoryCard/CategoryCard';

export const Container = ({ titleName, titleDescription, buttons, categoriesList }: ContainerProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <p className={styles.name}>{titleName}</p>
          <p className={styles.description}>{titleDescription}</p>
        </div>
        <div className={styles.nav}>
          {buttons.map((Button, index) => {
            return <Button key={`button-${index}`} />;
          })}
        </div>
      </div>
      <div className={styles.content}>
        {categoriesList.map((category, index) => {
          return (
            <CategoryCard
              category={category}
              key={`category-${index}`}
            />
          );
        })}
      </div>
    </div>
  );
};
