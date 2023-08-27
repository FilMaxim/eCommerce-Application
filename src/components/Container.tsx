import { ContainerProps } from '../utils/types';
import { CategoryCard } from './cards/CategoryCard';

export const Container = ({ titleName, titleDescription, buttons, categoriesList }: ContainerProps) => {
  return (
    <div className="catagories-container container">
      <div className="container-header">
        <div className="container-title">
          <p className="title-name">{titleName}</p>
          <p className="title-description">{titleDescription}</p>
        </div>
        <div className="container-nav">
          <div className="button-wrapper">
            {buttons.map((Button, index) => {
              return <Button key={`button-${index}`} />;
            })}
          </div>
        </div>
      </div>
      <div className="container-content">
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
