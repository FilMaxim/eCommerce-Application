import delivery from './assets/delivery.png';
import droid from './assets/droid.png';
import farming from './assets/farming.png';
import kitchen from './assets/kitchen.png';
import pet from './assets/pet.png';
import vacuum from './assets/vacuum.png';
import type { Mapping } from '../../../utils/types';

export const CategoryCard = ({ category, callback }: { category: string; callback: () => void }) => {
  const mapping: Mapping = {
    Companions: droid,
    Cleaners: vacuum,
    Pets: pet,
    Kitchens: kitchen,
    Gardens: farming,
    Deliveries: delivery
  };
  return (
    <div
      className="flex h-[5.5rem] w-[5.5rem] shrink-0 cursor-pointer flex-col items-center justify-center gap-2 rounded border border-gray-300 sm:h-[7rem] sm:w-[7rem]"
      onClick={callback}
    >
      <img
        className="h-[2.5rem] w-[2.5rem] sm:h-[3.5rem] sm:w-[3.5rem]"
        src={mapping[category]}
        alt={category}
      />
      <p className="text-sm sm:text-lg">{category}</p>
    </div>
  );
};
