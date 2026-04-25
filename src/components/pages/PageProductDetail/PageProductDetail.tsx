import { useParams, useNavigate } from "react-router-dom";
import { useAvailableProduct } from "~/queries/products";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import { formatAsPrice } from "~/utils/utils";
import AddProductToCart from "~/components/AddProductToCart/AddProductToCart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function PageProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: product, isLoading, error } = useAvailableProduct(id);

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="400px"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box py={3}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error.response?.status === 404
            ? "Product not found"
            : "Failed to load product. Please try again."}
        </Alert>
        <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate("/")}
        >
          Back to Products
        </Button>
      </Box>
    );
  }

  if (!product) {
    return (
      <Box py={3}>
        <Alert severity="warning">Product not found</Alert>
      </Box>
    );
  }

  return (
    <Box py={3}>
      <Button
        variant="text"
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/")}
        sx={{ mb: 3 }}
      >
        Back to Products
      </Button>

      <Card>
        <CardContent>
          <Typography gutterBottom variant="h3" component="h1">
            {product.title}
          </Typography>

          <Typography variant="h4" color="primary" gutterBottom>
            {formatAsPrice(product.price)}
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            {product.description}
          </Typography>

          <Typography variant="body2" color="text.secondary" gutterBottom>
            Stock: {product.count} available
          </Typography>

          <Box mt={3}>
            <AddProductToCart product={product} />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
