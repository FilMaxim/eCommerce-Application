import styles from './ProductCard.module.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import type { ProductCardInterface } from '../../../utils/types';
import { Button } from '@mui/material';

export const ProductCard = ({ imageUrl, title, titleName, description }: ProductCardInterface) => {
  return (
    <Card
      sx={{
        width: 270,
        height: 570,
        display: 'grid',
        gap: '10px',
        gridTemplateColumns: '270px',
        gridTemplateRows: '270px 200px 41px'
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
      <Button
        size="medium"
        variant="contained"
        sx={{
          padding: 0,
          height: 41,
          width: 270
        }}
      >
        <ShoppingCartOutlinedIcon fontSize="large" />
      </Button>
    </Card>
  );
};
