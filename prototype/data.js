// Mock data representing UVRelining's actual product line and customers
const DATA = {
  products: [
    { id: 'P001', name: 'UV XAIR Complete System', category: 'Machines', price: 285000, currency: 'EUR', unit: 'st', stock: 3, description: 'Latest-generation LED UV curing system DN70-DN600' },
    { id: 'P002', name: 'UV XAIR Light Head', category: 'Machines', price: 95000, currency: 'EUR', unit: 'st', stock: 5, description: 'LED UV curing head with Flash Curing Process' },
    { id: 'P003', name: 'UV XAIR Puller Unit', category: 'Machines', price: 42000, currency: 'EUR', unit: 'st', stock: 4, description: 'Three-wheel puller with automatic anti-slip surveillance' },
    { id: 'P004', name: 'UV360RS+', category: 'Machines', price: 165000, currency: 'EUR', unit: 'st', stock: 2, description: 'Compact UV system, navigates 90-degree bends DN70+' },
    { id: 'P005', name: 'UVLCR Resin 20kg', category: 'Chemistry', price: 890, currency: 'EUR', unit: 'st', stock: 145, description: 'Vinylester UV Light Curing Resin, ultra-low VOC' },
    { id: 'P006', name: 'UVLCR Resin 200kg', category: 'Chemistry', price: 7800, currency: 'EUR', unit: 'st', stock: 28, description: 'Vinylester UV Light Curing Resin, bulk drum' },
    { id: 'P007', name: 'UVHL DN100 (50m)', category: 'Liners', price: 1250, currency: 'EUR', unit: 'st', stock: 62, description: 'UV House Liner DN100, 50 meter roll' },
    { id: 'P008', name: 'UVHL DN150 (50m)', category: 'Liners', price: 1850, currency: 'EUR', unit: 'st', stock: 45, description: 'UV House Liner DN150, 50 meter roll' },
    { id: 'P009', name: 'UVHL DN200 (50m)', category: 'Liners', price: 2400, currency: 'EUR', unit: 'st', stock: 38, description: 'UV House Liner DN200, 50 meter roll' },
    { id: 'P010', name: 'Pre-impregnated Liner DN150', category: 'Liners', price: 2950, currency: 'EUR', unit: 'st', stock: 22, description: 'UVHL + UVLCR pre-impregnated, ready to install' },
    { id: 'P011', name: 'T-Liner Kit DN100-DN150', category: 'Accessories', price: 380, currency: 'EUR', unit: 'st', stock: 85, description: 'UV-cured T-liner for lateral connections' },
    { id: 'P012', name: 'Patch Tool DN100-DN300', category: 'Accessories', price: 4200, currency: 'EUR', unit: 'st', stock: 8, description: 'UV patch repair tool' },
    { id: 'P013', name: 'Inversion Drum 200mm', category: 'Accessories', price: 3800, currency: 'EUR', unit: 'st', stock: 6, description: 'Liner inversion drum for DN200' },
    { id: 'P014', name: 'Toughbook G2 Tablet', category: 'Accessories', price: 3200, currency: 'EUR', unit: 'st', stock: 12, description: 'Panasonic Toughbook G2 with UV XAIR control software' },
    { id: 'P015', name: 'UV XAIR Service Kit', category: 'Spare Parts', price: 1450, currency: 'EUR', unit: 'st', stock: 18, description: 'Annual maintenance kit for UV XAIR systems' },
  ],

  customers: [
    { id: 'C001', name: 'APS - Advanced Pipe Solutions', country: 'US', city: 'Houston, TX', contact: 'Mike Johnson', email: 'mike@aps-us.com', phone: '+1 713-555-0142', type: 'Distributor' },
    { id: 'C002', name: 'NordicReline AB', country: 'SE', city: 'Gothenburg', contact: 'Erik Lindqvist', email: 'erik@nordicreline.se', phone: '+46 31 555 0200', type: 'Contractor' },
    { id: 'C003', name: 'PipeWorks GmbH', country: 'DE', city: 'Munich', contact: 'Hans Mueller', email: 'h.mueller@pipeworks.de', phone: '+49 89 555 0340', type: 'Contractor' },
    { id: 'C004', name: 'RelineNow Ltd', country: 'UK', city: 'Birmingham', contact: 'James Clark', email: 'j.clark@relinenow.co.uk', phone: '+44 121 555 0780', type: 'Contractor' },
    { id: 'C005', name: 'Sacpro Norge AS', country: 'NO', city: 'Oslo', contact: 'Bjorn Andersen', email: 'bjorn@sacpro.no', phone: '+47 22 55 0190', type: 'Group Company' },
    { id: 'C006', name: 'CityDrain Oy', country: 'FI', city: 'Helsinki', contact: 'Matti Virtanen', email: 'matti@citydrain.fi', phone: '+358 9 555 0420', type: 'Contractor' },
    { id: 'C007', name: 'ReliningPro ApS', country: 'DK', city: 'Copenhagen', contact: 'Lars Nielsen', email: 'lars@reliningpro.dk', phone: '+45 33 55 0680', type: 'Contractor' },
    { id: 'C008', name: 'Pipe Rehab France SAS', country: 'FR', city: 'Lyon', contact: 'Pierre Dubois', email: 'p.dubois@piperehab.fr', phone: '+33 4 72 55 0910', type: 'Distributor' },
  ],

  quotes: [
    {
      id: 'Q-2026-001', customer: 'C001', date: '2026-02-10', validUntil: '2026-03-10', status: 'sent',
      items: [
        { productId: 'P001', qty: 2, discount: 5 },
        { productId: 'P014', qty: 2, discount: 0 },
        { productId: 'P015', qty: 2, discount: 0 },
      ],
      notes: 'Initial US market entry package for APS. Includes training on-site.'
    },
    {
      id: 'Q-2026-002', customer: 'C003', date: '2026-02-15', validUntil: '2026-03-15', status: 'draft',
      items: [
        { productId: 'P005', qty: 20, discount: 10 },
        { productId: 'P007', qty: 30, discount: 8 },
        { productId: 'P008', qty: 20, discount: 8 },
        { productId: 'P011', qty: 50, discount: 5 },
      ],
      notes: 'Quarterly consumables order for Munich operations.'
    },
    {
      id: 'Q-2026-003', customer: 'C002', date: '2026-02-18', validUntil: '2026-03-18', status: 'accepted',
      items: [
        { productId: 'P004', qty: 1, discount: 0 },
        { productId: 'P012', qty: 1, discount: 0 },
      ],
      notes: 'Replacement UV360RS+ for Gothenburg team.'
    },
    {
      id: 'Q-2026-004', customer: 'C006', date: '2026-02-20', validUntil: '2026-03-20', status: 'sent',
      items: [
        { productId: 'P010', qty: 15, discount: 5 },
        { productId: 'P011', qty: 30, discount: 5 },
      ],
      notes: 'Pre-impregnated liner trial order for Helsinki project.'
    },
    {
      id: 'Q-2026-005', customer: 'C004', date: '2026-02-22', validUntil: '2026-03-22', status: 'expired',
      items: [
        { productId: 'P001', qty: 1, discount: 3 },
        { productId: 'P006', qty: 5, discount: 10 },
      ],
      notes: 'UK expansion quote. Customer requested follow-up in Q2.'
    },
  ],

  orders: [
    {
      id: 'O-2026-001', quoteId: 'Q-2025-048', customer: 'C002', date: '2026-01-15', deliveryDate: '2026-02-28', status: 'delivered',
      items: [
        { productId: 'P005', qty: 10, discount: 8 },
        { productId: 'P007', qty: 20, discount: 5 },
      ],
    },
    {
      id: 'O-2026-002', quoteId: 'Q-2025-051', customer: 'C005', date: '2026-01-22', deliveryDate: '2026-03-01', status: 'in_production',
      items: [
        { productId: 'P001', qty: 1, discount: 10 },
        { productId: 'P014', qty: 1, discount: 10 },
      ],
    },
    {
      id: 'O-2026-003', quoteId: 'Q-2026-003', customer: 'C002', date: '2026-02-20', deliveryDate: '2026-03-15', status: 'confirmed',
      items: [
        { productId: 'P004', qty: 1, discount: 0 },
        { productId: 'P012', qty: 1, discount: 0 },
      ],
    },
    {
      id: 'O-2026-004', quoteId: null, customer: 'C007', date: '2026-02-12', deliveryDate: '2026-02-26', status: 'delivered',
      items: [
        { productId: 'P005', qty: 5, discount: 5 },
        { productId: 'P008', qty: 10, discount: 5 },
        { productId: 'P011', qty: 20, discount: 0 },
      ],
    },
  ],
};

// Helper functions
function getCustomer(id) {
  return DATA.customers.find(c => c.id === id);
}

function getProduct(id) {
  return DATA.products.find(p => p.id === id);
}

function calcLineTotal(item) {
  const product = getProduct(item.productId);
  if (!product) return 0;
  const base = product.price * item.qty;
  return base - (base * (item.discount || 0) / 100);
}

function calcQuoteTotal(quote) {
  return quote.items.reduce((sum, item) => sum + calcLineTotal(item), 0);
}

function formatCurrency(amount, currency) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency || 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric'
  });
}

function statusBadge(status) {
  const labels = {
    draft: 'Draft',
    sent: 'Sent',
    accepted: 'Accepted',
    expired: 'Expired',
    declined: 'Declined',
    confirmed: 'Confirmed',
    in_production: 'In Production',
    delivered: 'Delivered',
    invoiced: 'Invoiced',
  };
  return `<span class="badge badge-${status}">${labels[status] || status}</span>`;
}
