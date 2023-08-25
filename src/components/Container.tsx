/* eslint-enable */

interface ButtonProps {}

interface CardProps {}

interface ContainerProps {
  titleName: string;
  titleDescription: string;
  buttons: React.ComponentType<ButtonProps>[];
  // cards: React.ComponentType<CardProps>[];
  cards: string[];
}

export const Container = ({ titleName, titleDescription, buttons, cards }: ContainerProps) => {
  return (
    <div className="catagoriesContainer container">
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
        {cards.map((Card) => {
          return <p>{Card}</p>;
        })}
      </div>
    </div>
  );
};
