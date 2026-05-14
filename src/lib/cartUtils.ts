import type { CartItem, InquiryMessage } from '@/types/cart';

/**
 * Generates a unique key for a cart line item.
 * Items with the same product but different specs or kit sizes are treated as separate line items.
 */
export function generateCartId(productId: string, spec: string, kitSize: number): string {
  return `${productId}-${spec}-${kitSize}`;
}

/**
 * Builds formatted inquiry messages for WhatsApp and Email.
 * The messages summarize the items in the cart for a B2B wholesale request.
 */
export function buildInquiryMessage(items: CartItem[]): InquiryMessage {
  const lineItemsCount = items.length;
  
  // Create the numbered list of items
  const itemsList = items.map((item, index) => {
    const kitText = item.quantity === 1 ? 'kit' : 'kits';
    return `${index + 1}. ${item.productName} — ${item.spec} spec, Kit of ${item.kitSize} vials × ${item.quantity} ${kitText}`;
  }).join('\n');

  // WhatsApp Message
  const whatsappBody = [
    "Hi, I'd like to request wholesale pricing for the following compounds:",
    "",
    itemsList,
    "",
    `Total line items: ${lineItemsCount}`,
    "I am a licensed professional. Please send me Tier pricing for this order."
  ].join('\n');

  // Email Message
  const emailSubject = `Wholesale Inquiry — ${lineItemsCount} Products — 99 Purity Wholesale`;
  
  // Items list with more line spacing for email
  const emailItemsList = items.map((item, index) => {
    const kitText = item.quantity === 1 ? 'kit' : 'kits';
    return `${index + 1}. ${item.productName} — ${item.spec} spec, Kit of ${item.kitSize} vials × ${item.quantity} ${kitText}`;
  }).join('\n\n');

  const emailBody = [
    "Hello 99 Purity Wholesale Team,",
    "",
    "I would like to request wholesale pricing for the following research compounds:",
    "",
    emailItemsList,
    "",
    "Business type: ",
    "Location (State): ",
    "",
    "Please provide Tier pricing and availability.",
    "",
    "Thank you."
  ].join('\n');

  return {
    whatsapp: whatsappBody,
    email: {
      subject: emailSubject,
      body: emailBody
    }
  };
}

/**
 * Calculates the total number of kits across all line items.
 */
export function getTotalItemCount(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}
