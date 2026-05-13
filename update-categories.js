const fs = require('fs');
const path = require('path');

const enPath = path.join(__dirname, 'messages', 'en.json');
const esPath = path.join(__dirname, 'messages', 'es.json');

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const es = JSON.parse(fs.readFileSync(esPath, 'utf8'));

en.CategoryTemplate = {
  banner: "ALL PRODUCTS ARE FOR LABORATORY RESEARCH USE ONLY. NOT FOR HUMAN CONSUMPTION.",
  availableSpecs: "Available Specs",
  moq: "MOQ",
  units: "10 Units",
  pricing: "Pricing",
  contact: "Contact",
  viewDetails: "View Product Details",
  whatsappPricing: "WhatsApp Pricing",
  emailInquiry: "Email Inquiry"
};

es.CategoryTemplate = {
  banner: "TODOS LOS PRODUCTOS SON EXCLUSIVAMENTE PARA USO EN INVESTIGACIÓN DE LABORATORIO. NO APTOS PARA CONSUMO HUMANO.",
  availableSpecs: "Especificaciones Disponibles",
  moq: "MOQ",
  units: "10 Unidades",
  pricing: "Precios",
  contact: "Contactar",
  viewDetails: "Ver Detalles del Producto",
  whatsappPricing: "Precios por WhatsApp",
  emailInquiry: "Consulta por Email"
};

fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
fs.writeFileSync(esPath, JSON.stringify(es, null, 2));

const productsDir = path.join(__dirname, 'src', 'app', '[locale]', 'products');
const categories = [
  'glp1-metabolic-peptides',
  'growth-hormone',
  'healing-recovery-peptides',
  'cognitive-nootropic',
  'anti-aging-longevity',
  'cosmetic-aesthetic',
  'ancillaries'
];

categories.forEach(cat => {
  const pagePath = path.join(productsDir, cat, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // add import if missing
    if (!content.includes('getTranslations')) {
      content = content.replace("import { Link } from '@/i18n/routing';", "import { Link } from '@/i18n/routing';\nimport { getTranslations } from 'next-intl/server';");
    }

    // add getTranslations call
    content = content.replace(/export default function (\w+)\(\) \{/, "export default async function $1() {\n  const t = await getTranslations('CategoryTemplate');");

    // replace strings
    content = content.replace("ALL PRODUCTS ARE FOR LABORATORY RESEARCH USE ONLY. NOT FOR HUMAN CONSUMPTION.", "{t('banner')}");
    content = content.replace(">Available Specs<", ">{t('availableSpecs')}<");
    content = content.replace(">MOQ<", ">{t('moq')}<");
    content = content.replace(">10 Units<", ">{t('units')}<");
    content = content.replace(">Pricing<", ">{t('pricing')}<");
    content = content.replace(">Contact<", ">{t('contact')}<");
    content = content.replace("View Product Details\n", "{t('viewDetails')}\n");
    content = content.replace("WhatsApp Pricing\n", "{t('whatsappPricing')}\n");
    content = content.replace("Email Inquiry\n", "{t('emailInquiry')}\n");

    fs.writeFileSync(pagePath, content);
  }
});
console.log('Category pages updated with CategoryTemplate translations');
