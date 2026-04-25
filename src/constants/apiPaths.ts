const API_PATHS = {
  product:
    import.meta.env.VITE_PRODUCTS_API_URL ||
    "https://9l0z38k0u3.execute-api.eu-north-1.amazonaws.com/prod",
  order:
    import.meta.env.VITE_ORDER_API_URL ||
    "https://.execute-api.eu-west-1.amazonaws.com/dev",
  import:
    import.meta.env.VITE_IMPORT_API_URL ||
    "https://.execute-api.eu-west-1.amazonaws.com/dev",
  bff:
    import.meta.env.VITE_BFF_API_URL ||
    "https://.execute-api.eu-west-1.amazonaws.com/dev",
  cart:
    import.meta.env.VITE_CART_API_URL ||
    "https://.execute-api.eu-west-1.amazonaws.com/dev",
};

export default API_PATHS;
