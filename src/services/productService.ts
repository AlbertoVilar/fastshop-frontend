const API_BASE_URL = process.env.REACT_APP_API_BASE_URL ?? 'http://localhost:8080';

export type Product = {
  id: number;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  imgUrl?: string;
  stock?: number;
  categoryId?: number;
  categoryName?: string;
  [key: string]: unknown;
};

export type ApiError = {
  timestamp: string;
  status: number;
  error: string;
  message: string;
  path: string;
};

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_BASE_URL}/products`);

  if (response.ok) {
    return response.json();
  }

  let errorPayload: ApiError | undefined;

  try {
    errorPayload = (await response.json()) as ApiError;
  } catch {
    // ignore parsing error and fall back to generic error below
  }

  const error = new Error(errorPayload?.message ?? 'Failed to fetch products');
  (error as Error & { details?: ApiError }).details = errorPayload;
  throw error;
};

export const fetchProductById = async (productId: number | string): Promise<Product> => {
  const response = await fetch(`${API_BASE_URL}/products/${productId}`);

  if (response.ok) {
    return response.json();
  }

  let errorPayload: ApiError | undefined;

  try {
    errorPayload = (await response.json()) as ApiError;
  } catch {
    // ignore parse failure
  }

  const error = new Error(errorPayload?.message ?? 'Failed to fetch product');
  (error as Error & { details?: ApiError }).details = errorPayload;
  throw error;
};
