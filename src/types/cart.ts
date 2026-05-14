export interface CartItem {
  id: string              // unique cart entry id: "{productId}-{spec}-{kitSize}"
  productId: string       // e.g. "semaglutide"
  productName: string     // e.g. "Semaglutide"
  category: string        // e.g. "GLP-1 & Metabolic"
  spec: string            // e.g. "10mg"
  kitSize: number         // e.g. 10 (number of vials per kit)
  quantity: number        // number of kits (min 1, default 1)
  moq: number             // minimum order quantity in units (default 10)
  categoryPage: string    // URL to product page
}

export interface CartState {
  items: CartItem[]
  isOpen: boolean
}

export type CartAction =
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; payload: { id: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'OPEN_DRAWER' }
  | { type: 'CLOSE_DRAWER' }
  | { type: 'SET_ITEMS'; payload: CartItem[] }

export interface InquiryMessage {
  whatsapp: string
  email: {
    subject: string
    body: string
  }
}
