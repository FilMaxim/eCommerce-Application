import delivery from '../../assets/categiriesLogo/delivery.png';
import droid from '../../assets/categiriesLogo/droid.png';
import farming from '../../assets/categiriesLogo/farming.png';
import kitchen from '../../assets/categiriesLogo/kitchen.png';
import pet from '../../assets/categiriesLogo/pet.png';
import vacuum from '../../assets/categiriesLogo/vacuum.png';
import type { Mapping } from '../../utils/types';

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
    <div className="box">
      <div className="box-logo">
        <img
          src={mapping[category]}
          alt=""
        />
      </div>
      <div className="box-title">
        <p>{category}</p>
      </div>
    </div>
  );
};
