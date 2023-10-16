import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Card sx={{ height: "auto", maxWidth: 300, minWidth: 300, padding: 2 }}>
      <CardMedia
        sx={{ height: 100, width: 100, objectFit: "contain" }}
        image={item.img}
        title={`image ${item.title}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="p" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          $ {item.price} .-
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${item.id}`}>
          <Button
            color="secondary"
            disabled={false}
            size="small"
            variant="outlined"
          >
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
