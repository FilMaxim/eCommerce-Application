import styles from './CategoryCard.module.scss';
import delivery from './assets/delivery.png';
import droid from './assets/droid.png';
import farming from './assets/farming.png';
import kitchen from './assets/kitchen.png';
import pet from './assets/pet.png';
import vacuum from './assets/vacuum.png';
import type { Mapping } from '../../../utils/types';

export const CategoryCard = ({ category }: { category: string }) => {
  const mapping: Mapping = {
    Сompanions: droid,
    Cleaners: vacuum,
    Pets: pet,
    Kitchens: kitchen,
    Gardens: farming,
    Deliveries: delivery
  };
  return (
    <div className={styles.box}>
      <div>
        <img
          src={mapping[category]}
          alt={`${category}`}
        />
      </div>
      <div>
        <p>{category}</p>
      </div>
    </div>
  );
};
