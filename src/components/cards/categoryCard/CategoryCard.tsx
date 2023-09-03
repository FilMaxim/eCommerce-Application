import delivery from './assets/delivery.png';
import droid from './assets/droid.png';
import farming from './assets/farming.png';
import kitchen from './assets/kitchen.png';
import pet from './assets/pet.png';
import vacuum from './assets/vacuum.png';
import type { Mapping } from '../../../utils/types';

export const CategoryCard = ({ category, callback }: { category: string; callback: () => void }) => {
  const mapping: Mapping = {
    Сompanions: droid,
    Cleaners: vacuum,
    Pets: pet,
    Kitchens: kitchen,
    Gardens: farming,
    Deliveries: delivery
  };
  return (
    <div
      className='border rounded border-secondary sm:w-[7rem] sm:h-[7rem] w-[5.5rem] h-[5.5rem] flex flex-col items-center justify-center gap-2 cursor-pointer shrink-0'
      onClick={callback}
    >
        <img
        className='w-[2.5rem] h-[2.5rem] sm:w-[3.5rem] sm:h-[3.5rem]'
          src={mapping[category]}
          alt={category}
        />
        <p className='text-sm sm:text-lg'>{category}</p>
    </div>
  );
};
