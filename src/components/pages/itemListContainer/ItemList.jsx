import ProductCard from "../../common/productCard/ProductCard";
import { Box } from "@mui/material";
const ItemList = ({ items }) => {
  return (
    <section
      style={{ display: "flex", flexGrow: "1", justifyContent: "space-evenly" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          height: 300,
        }}
      >
        {items.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </Box>
    </section>
  );
};

export default ItemList;
