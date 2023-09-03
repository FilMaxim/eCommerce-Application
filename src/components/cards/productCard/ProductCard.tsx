import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import type { ProductCardInterface } from '../../../utils/types';
import { Button } from '@mui/material';
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
  const handleCardClick = (id: string) => {
    window.location.href = `/product/${id}`;
  };

  return (
    <Card
      onClick={() => {
        handleCardClick(id);
      }}
      className="group grid cursor-pointer grid-cols-[14rem] grid-rows-catalog-cards items-center justify-items-start gap-[0.3rem] hover:shadow-xl"
    >
      <CardMedia
        sx={{ height: '14rem', width: '14rem' }}
        image={imageUrl}
        title={title}
        className="transition-all group-hover:scale-110"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="p"
          align="center"
          sx={{
            fontSize: '1.25rem',
            lineHeight: '1.5rem',
            height: '1.5rem',
            overflow: 'hidden'
          }}
        >
          {titleName}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          <div className="inline-block max-h-10 overflow-hidden text-gray-500">{description}</div>
          <div className="mt-[-0.5rem] text-secondary">...more</div>
        </Typography>
      </CardContent>
      <CardContent
        sx={{
          display: 'inline-flex',
          marginLeft: '-1rem',
          gap: '12px'
        }}
      >
        <PriceTag
          price={price}
          discount={discount}
        />
      </CardContent>
      <Button
        size="medium"
        variant="contained"
        className="w-full transition-all hover:opacity-80"
      >
        <ShoppingCartOutlinedIcon fontSize="large" />
      </Button>
    </Card>
  );
};
