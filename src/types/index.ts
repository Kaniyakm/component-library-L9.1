// src/types/index.ts
// Central place for shared TypeScript types/interfaces used by components.

export type AlertType = 'success' | 'error' | 'warning' | 'info';

export interface AlertBoxProps {
  /** Alert style variant */
  type: AlertType;
  /** Main message text shown inside the alert */
  message: string;
  /** Optional close handler (shows a close button if provided) */
  onClose?: () => void;
  /** Optional extra content rendered under the main message */
  children?: React.ReactNode;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  /** Optional avatar image URL */
  avatarUrl?: string;
}

export interface UserProfileCardProps {
  /** User data to display */
  user: User;
  /** Toggle showing email section */
  showEmail?: boolean;
  /** Toggle showing role section */
  showRole?: boolean;
  /** Called when the "Edit" button is clicked */
  onEdit?: (userId: string) => void;
  /** Flexible children slot for additional content at the bottom */
  children?: React.ReactNode;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  /** Optional product image */
  imageUrl?: string;
  /** Whether the product is currently in stock */
  inStock: boolean;
}

export interface ProductDisplayProps {
  /** Product data to display */
  product: Product;
  /** Toggle showing product description */
  showDescription?: boolean;
  /** Toggle showing stock status badge */
  showStockStatus?: boolean;
  /** Called when the "Add to Cart" button is clicked */
  onAddToCart?: (productId: string) => void;
  /** Optional children for extra content (e.g., tags, promo text) */
  children?: React.ReactNode;
}
