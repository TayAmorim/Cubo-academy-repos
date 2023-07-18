/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ProductPhoto from "../assets/product.jpg";
import { CardActions } from "@mui/material";

const CardProducts = ({ name, description, price, quantified }) => {
  return (
    <Card sx={{ maxWidth: 232, marginTop: "2rem", borderRadius: "24px" }}>
      <CardMedia
        component="img"
        sx={{ height: 240 }}
        src={ProductPhoto}
        title={name}
      />
      <CardContent sx={{ paddingInline: "18px" }}>
        <Typography gutterBottom variant="h2" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ justifyContent: "space-between", padding: "0 18px 18px " }}
      >
        <Typography>{quantified} unidades</Typography>
        <Typography>{price}</Typography>
      </CardActions>
    </Card>
  );
};

export default CardProducts;
