const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const formatAsPrice = (price: number) => priceFormatter.format(price);

/**
 * Generate a placeholder image URL for products without images
 * Uses a consistent placeholder based on product title
 */
export const getProductImageUrl = (
  productTitle: string,
  size: string = "400x300",
): string => {
  // Encode the title to use as text in the placeholder
  const encodedTitle = encodeURIComponent(productTitle);
  // Use placeholder.com or a similar service
  return `https://via.placeholder.com/${size}/2196F3/FFFFFF?text=${encodedTitle}`;
};
