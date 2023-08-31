import styles from './ProductCard.module.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { BlackButton } from '../../buttons/BlackButton';
import type { ProductCardInterface } from '../../../utils/types';
import { PriceTag } from './PriceTag';

export const ProductCard = ({
  imageUrl,
  title,
  titleName,
  description,
  price,
  discount,
  id
}: ProductCardInterface) => {
  const priceTagPadding = discount > 0 ? '0' : '0 16px';

  const handleCardClick = (id: string) => {
    // Перенаправление на страницу продукта с передачей идентификатора
    window.location.href = `/product/${id}`;
  };

  return (
    <Card
      onClick={() => {
        handleCardClick(id);
      }}
      sx={{
        width: 270,
        display: 'grid',
        gap: '10px',
        gridTemplateColumns: '270px',
        gridTemplateRows: '270px 200px 41px 41px'
      }}
    >
      <div className={styles.wrapper}>
        <CardMedia
          sx={{ height: 190, width: 190 }}
          image={imageUrl}
          title={title}
        />
      </div>
      <CardContent
        sx={{
          padding: '0 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}
      >
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          align="center"
        >
          {titleName}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            height: 60
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardContent
        sx={{
          display: 'flex',
          padding: priceTagPadding,
          // gap: '12px'
          justifyContent: 'space-between'
        }}
      >
        <PriceTag
          price={price}
          discount={discount}
        />
      </CardContent>
      <BlackButton
        size="medium"
        variant="contained"
        sx={{
          padding: 0,
          height: 41,
          width: 270
        }}
      >
        <ShoppingCartOutlinedIcon fontSize="large" />
      </BlackButton>
    </Card>
  );
};
