const app = {
  currentPage: 'dashboard',
  lineItemCounter: 0,

  init() {
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => this.navigate(item.dataset.page));
    });
    this.navigate('dashboard');
  },

  navigate(page) {
    this.currentPage = page;
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.querySelector(`[data-page="${page}"]`)?.classList.add('active');

    const titles = {
      dashboard: ['Dashboard', 'Overview'],
      quotes: ['Quotes', 'Manage offers'],
      orders: ['Orders', 'Track orders'],
      customers: ['Customers', 'Customer directory'],
      products: ['Products', 'Product catalog'],
    };
    const [title, sub] = titles[page] || [page, ''];
    document.getElementById('pageTitle').textContent = title;
    document.getElementById('breadcrumb').textContent = sub;

    this.render();
  },

  render() {
    const el = document.getElementById('content');
    switch (this.currentPage) {
      case 'dashboard': el.innerHTML = this.renderDashboard(); break;
      case 'quotes': el.innerHTML = this.renderQuotes(); break;
      case 'orders': el.innerHTML = this.renderOrders(); break;
      case 'customers': el.innerHTML = this.renderCustomers(); break;
      case 'products': el.innerHTML = this.renderProducts(); break;
    }
  },

  // ===== DASHBOARD =====
  renderDashboard() {
    const activeQuotes = DATA.quotes.filter(q => q.status === 'sent' || q.status === 'draft');
    const acceptedQuotes = DATA.quotes.filter(q => q.status === 'accepted');
    const activeOrders = DATA.orders.filter(o => o.status !== 'delivered' && o.status !== 'invoiced');
    const pipelineValue = DATA.quotes
      .filter(q => q.status === 'sent')
      .reduce((sum, q) => sum + calcQuoteTotal(q), 0);

    return `
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon blue">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          </div>
          <div class="stat-label">Active Quotes</div>
          <div class="stat-value">${activeQuotes.length}</div>
          <div class="stat-change up">2 sent, awaiting response</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon green">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div class="stat-label">Won This Month</div>
          <div class="stat-value">${acceptedQuotes.length}</div>
          <div class="stat-change up">+1 from last month</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon orange">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/></svg>
          </div>
          <div class="stat-label">Open Orders</div>
          <div class="stat-value">${activeOrders.length}</div>
          <div class="stat-change up">1 in production</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon purple">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <div class="stat-label">Pipeline Value</div>
          <div class="stat-value">${formatCurrency(pipelineValue)}</div>
          <div class="stat-change up">Quotes sent, awaiting decision</div>
        </div>
      </div>

      <div class="quick-actions">
        <div class="quick-action" onclick="app.showNewQuote()">
          <div class="quick-action-icon" style="background:var(--primary-light);color:var(--primary)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </div>
          <div class="quick-action-text">
            <h3>New Quote</h3>
            <p>Create and send a new offer</p>
          </div>
        </div>
        <div class="quick-action" onclick="app.navigate('orders')">
          <div class="quick-action-icon" style="background:var(--success-light);color:var(--success)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
          </div>
          <div class="quick-action-text">
            <h3>Convert Quote to Order</h3>
            <p>${acceptedQuotes.length} quote${acceptedQuotes.length !== 1 ? 's' : ''} ready to convert</p>
          </div>
        </div>
        <div class="quick-action" onclick="app.navigate('products')">
          <div class="quick-action-icon" style="background:var(--warning-light);color:var(--warning)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
          </div>
          <div class="quick-action-text">
            <h3>Check Stock</h3>
            <p>View inventory levels</p>
          </div>
        </div>
      </div>

      <div class="grid-2">
        <div class="card">
          <div class="card-header">
            <span class="card-title">Recent Quotes</span>
            <button class="btn btn-ghost btn-sm" onclick="app.navigate('quotes')">View all</button>
          </div>
          <div class="table-wrapper">
            <table>
              <thead><tr><th>Quote</th><th>Customer</th><th>Total</th><th>Status</th></tr></thead>
              <tbody>
                ${DATA.quotes.slice(0, 4).map(q => {
                  const c = getCustomer(q.customer);
                  return `<tr onclick="app.viewQuote('${q.id}')">
                    <td class="cell-primary">${q.id}</td>
                    <td>${c ? c.name : q.customer}</td>
                    <td>${formatCurrency(calcQuoteTotal(q))}</td>
                    <td>${statusBadge(q.status)}</td>
                  </tr>`;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <span class="card-title">Active Orders</span>
            <button class="btn btn-ghost btn-sm" onclick="app.navigate('orders')">View all</button>
          </div>
          <div class="table-wrapper">
            <table>
              <thead><tr><th>Order</th><th>Customer</th><th>Delivery</th><th>Status</th></tr></thead>
              <tbody>
                ${DATA.orders.slice(0, 4).map(o => {
                  const c = getCustomer(o.customer);
                  return `<tr onclick="app.viewOrder('${o.id}')">
                    <td class="cell-primary">${o.id}</td>
                    <td>${c ? c.name : o.customer}</td>
                    <td>${formatDate(o.deliveryDate)}</td>
                    <td>${statusBadge(o.status)}</td>
                  </tr>`;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  },

  // ===== QUOTES =====
  renderQuotes() {
    return `
      <div class="filter-bar">
        <span class="filter-chip active" onclick="app.filterQuotes('all', this)">All</span>
        <span class="filter-chip" onclick="app.filterQuotes('draft', this)">Draft</span>
        <span class="filter-chip" onclick="app.filterQuotes('sent', this)">Sent</span>
        <span class="filter-chip" onclick="app.filterQuotes('accepted', this)">Accepted</span>
        <span class="filter-chip" onclick="app.filterQuotes('expired', this)">Expired</span>
      </div>
      <div class="card">
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Quote #</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Valid Until</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody id="quotesTable">
              ${this.renderQuoteRows(DATA.quotes)}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  renderQuoteRows(quotes) {
    return quotes.map(q => {
      const c = getCustomer(q.customer);
      const total = calcQuoteTotal(q);
      return `<tr onclick="app.viewQuote('${q.id}')">
        <td class="cell-primary">${q.id}</td>
        <td>
          <div>${c ? c.name : q.customer}</div>
          <div class="cell-secondary">${c ? c.country : ''}</div>
        </td>
        <td>${formatDate(q.date)}</td>
        <td>${formatDate(q.validUntil)}</td>
        <td>${q.items.length} item${q.items.length !== 1 ? 's' : ''}</td>
        <td style="font-weight:600">${formatCurrency(total)}</td>
        <td>${statusBadge(q.status)}</td>
        <td>
          ${q.status === 'accepted' ? `<button class="btn btn-success btn-sm" onclick="event.stopPropagation();app.convertToOrder('${q.id}')">Convert to Order</button>` : ''}
          ${q.status === 'draft' ? `<button class="btn btn-primary btn-sm" onclick="event.stopPropagation();app.sendQuote('${q.id}')">Send</button>` : ''}
        </td>
      </tr>`;
    }).join('');
  },

  filterQuotes(status, el) {
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    const filtered = status === 'all' ? DATA.quotes : DATA.quotes.filter(q => q.status === status);
    document.getElementById('quotesTable').innerHTML = this.renderQuoteRows(filtered);
  },

  viewQuote(id) {
    const q = DATA.quotes.find(x => x.id === id);
    if (!q) return;
    const c = getCustomer(q.customer);
    const total = calcQuoteTotal(q);

    document.getElementById('content').innerHTML = `
      <button class="back-btn" onclick="app.navigate('quotes')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
        Back to Quotes
      </button>
      <div class="detail-header">
        <div class="detail-header-left">
          <span class="detail-id">${q.id}</span>
          ${statusBadge(q.status)}
        </div>
        <div style="display:flex;gap:8px">
          ${q.status === 'draft' ? `<button class="btn btn-primary" onclick="app.sendQuote('${q.id}')">Send to Customer</button>` : ''}
          ${q.status === 'accepted' ? `<button class="btn btn-success" onclick="app.convertToOrder('${q.id}')">Convert to Order</button>` : ''}
          <button class="btn" onclick="app.duplicateQuote('${q.id}')">Duplicate</button>
        </div>
      </div>
      <div class="detail-meta">
        <div>
          <div class="meta-item-label">Customer</div>
          <div class="meta-item-value">${c ? c.name : q.customer}</div>
        </div>
        <div>
          <div class="meta-item-label">Created</div>
          <div class="meta-item-value">${formatDate(q.date)}</div>
        </div>
        <div>
          <div class="meta-item-label">Valid Until</div>
          <div class="meta-item-value">${formatDate(q.validUntil)}</div>
        </div>
        <div>
          <div class="meta-item-label">Total</div>
          <div class="meta-item-value">${formatCurrency(total)}</div>
        </div>
      </div>
      ${q.notes ? `<div class="card" style="margin-bottom:16px"><div class="card-title" style="margin-bottom:8px">Notes</div><p style="color:var(--text-secondary);font-size:13px">${q.notes}</p></div>` : ''}
      <div class="card">
        <div class="card-title" style="margin-bottom:12px">Line Items</div>
        <table>
          <thead><tr><th>Product</th><th>Article #</th><th>Qty</th><th>Unit Price</th><th>Discount</th><th style="text-align:right">Total</th></tr></thead>
          <tbody>
            ${q.items.map(item => {
              const p = getProduct(item.productId);
              const lineTotal = calcLineTotal(item);
              return `<tr>
                <td><div style="font-weight:600">${p ? p.name : item.productId}</div><div class="cell-secondary">${p ? p.description : ''}</div></td>
                <td class="cell-secondary">${item.productId}</td>
                <td>${item.qty}</td>
                <td>${p ? formatCurrency(p.price) : '-'}</td>
                <td>${item.discount ? item.discount + '%' : '-'}</td>
                <td style="text-align:right;font-weight:600">${formatCurrency(lineTotal)}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
        <div class="quote-total-bar">
          <span class="quote-total-label">Total excl. VAT</span>
          <span class="quote-total-value">${formatCurrency(total)}</span>
        </div>
      </div>
    `;
  },

  // ===== ORDERS =====
  renderOrders() {
    return `
      <div class="filter-bar">
        <span class="filter-chip active" onclick="app.filterOrders('all', this)">All</span>
        <span class="filter-chip" onclick="app.filterOrders('confirmed', this)">Confirmed</span>
        <span class="filter-chip" onclick="app.filterOrders('in_production', this)">In Production</span>
        <span class="filter-chip" onclick="app.filterOrders('delivered', this)">Delivered</span>
      </div>
      <div class="card">
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Order #</th>
                <th>From Quote</th>
                <th>Customer</th>
                <th>Order Date</th>
                <th>Delivery Date</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody id="ordersTable">
              ${this.renderOrderRows(DATA.orders)}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  renderOrderRows(orders) {
    return orders.map(o => {
      const c = getCustomer(o.customer);
      const total = o.items.reduce((s, i) => s + calcLineTotal(i), 0);
      return `<tr onclick="app.viewOrder('${o.id}')">
        <td class="cell-primary">${o.id}</td>
        <td class="cell-secondary">${o.quoteId || '-'}</td>
        <td>${c ? c.name : o.customer}</td>
        <td>${formatDate(o.date)}</td>
        <td>${formatDate(o.deliveryDate)}</td>
        <td>${o.items.length} item${o.items.length !== 1 ? 's' : ''}</td>
        <td style="font-weight:600">${formatCurrency(total)}</td>
        <td>${statusBadge(o.status)}</td>
      </tr>`;
    }).join('');
  },

  filterOrders(status, el) {
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    const filtered = status === 'all' ? DATA.orders : DATA.orders.filter(o => o.status === status);
    document.getElementById('ordersTable').innerHTML = this.renderOrderRows(filtered);
  },

  viewOrder(id) {
    const o = DATA.orders.find(x => x.id === id);
    if (!o) return;
    const c = getCustomer(o.customer);
    const total = o.items.reduce((s, i) => s + calcLineTotal(i), 0);

    document.getElementById('content').innerHTML = `
      <button class="back-btn" onclick="app.navigate('orders')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
        Back to Orders
      </button>
      <div class="detail-header">
        <div class="detail-header-left">
          <span class="detail-id">${o.id}</span>
          ${statusBadge(o.status)}
        </div>
        <div style="display:flex;gap:8px">
          ${o.status === 'delivered' ? `<button class="btn btn-primary">Create Invoice</button>` : ''}
          <button class="btn">Print Order Confirmation</button>
        </div>
      </div>
      <div class="detail-meta">
        <div>
          <div class="meta-item-label">Customer</div>
          <div class="meta-item-value">${c ? c.name : o.customer}</div>
        </div>
        <div>
          <div class="meta-item-label">Order Date</div>
          <div class="meta-item-value">${formatDate(o.date)}</div>
        </div>
        <div>
          <div class="meta-item-label">Delivery Date</div>
          <div class="meta-item-value">${formatDate(o.deliveryDate)}</div>
        </div>
        <div>
          <div class="meta-item-label">Total</div>
          <div class="meta-item-value">${formatCurrency(total)}</div>
        </div>
      </div>
      <div class="card">
        <div class="card-title" style="margin-bottom:12px">Order Lines</div>
        <table>
          <thead><tr><th>Product</th><th>Article #</th><th>Qty</th><th>Unit Price</th><th>Discount</th><th style="text-align:right">Total</th></tr></thead>
          <tbody>
            ${o.items.map(item => {
              const p = getProduct(item.productId);
              const lineTotal = calcLineTotal(item);
              return `<tr>
                <td style="font-weight:600">${p ? p.name : item.productId}</td>
                <td class="cell-secondary">${item.productId}</td>
                <td>${item.qty}</td>
                <td>${p ? formatCurrency(p.price) : '-'}</td>
                <td>${item.discount ? item.discount + '%' : '-'}</td>
                <td style="text-align:right;font-weight:600">${formatCurrency(lineTotal)}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
        <div class="quote-total-bar">
          <span class="quote-total-label">Total excl. VAT</span>
          <span class="quote-total-value">${formatCurrency(total)}</span>
        </div>
      </div>
    `;
  },

  // ===== CUSTOMERS =====
  renderCustomers() {
    return `
      <div class="card">
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Country</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              ${DATA.customers.map(c => `
                <tr>
                  <td style="font-weight:600">${c.name}</td>
                  <td>${c.contact}</td>
                  <td><a href="mailto:${c.email}" style="color:var(--primary);text-decoration:none">${c.email}</a></td>
                  <td class="cell-secondary">${c.phone}</td>
                  <td>${c.city}, ${c.country}</td>
                  <td>${statusBadge(c.type === 'Distributor' ? 'sent' : c.type === 'Group Company' ? 'in_production' : 'accepted')}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  // ===== PRODUCTS =====
  renderProducts() {
    const categories = [...new Set(DATA.products.map(p => p.category))];
    return `
      <div class="filter-bar">
        <span class="filter-chip active" onclick="app.filterProducts('all', this)">All</span>
        ${categories.map(cat => `<span class="filter-chip" onclick="app.filterProducts('${cat}', this)">${cat}</span>`).join('')}
      </div>
      <div class="product-grid" id="productGrid">
        ${this.renderProductCards(DATA.products)}
      </div>
    `;
  },

  renderProductCards(products) {
    return products.map(p => {
      const stockClass = p.stock > 10 ? 'stock-ok' : p.stock > 3 ? 'stock-low' : 'stock-out';
      const stockLabel = p.stock > 10 ? `${p.stock} in stock` : p.stock > 0 ? `Low: ${p.stock} left` : 'Out of stock';
      return `
        <div class="product-card">
          <div class="product-category">${p.category}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-desc">${p.description}</div>
          <div class="product-footer">
            <span class="product-price">${formatCurrency(p.price)}</span>
            <span class="product-stock ${stockClass}">${stockLabel}</span>
          </div>
        </div>
      `;
    }).join('');
  },

  filterProducts(category, el) {
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    const filtered = category === 'all' ? DATA.products : DATA.products.filter(p => p.category === category);
    document.getElementById('productGrid').innerHTML = this.renderProductCards(filtered);
  },

  // ===== NEW QUOTE MODAL =====
  showNewQuote() {
    this.lineItemCounter = 0;
    document.getElementById('modalTitle').textContent = 'New Quote';
    document.getElementById('modalBody').innerHTML = `
      <form onsubmit="event.preventDefault();app.saveQuote()">
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Customer</label>
            <select class="form-select" id="quoteCustomer" required>
              <option value="">Select customer...</option>
              ${DATA.customers.map(c => `<option value="${c.id}">${c.name} (${c.country})</option>`).join('')}
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Valid Until</label>
            <input type="date" class="form-input" id="quoteValidUntil" value="${this.futureDate(30)}" required>
          </div>
        </div>

        <div class="form-divider"></div>

        <div class="form-group">
          <label class="form-label">Line Items</label>
          <div class="line-item" style="margin-bottom:4px">
            <span class="cell-secondary" style="font-size:11px;font-weight:600">PRODUCT</span>
            <span class="cell-secondary" style="font-size:11px;font-weight:600">QTY</span>
            <span class="cell-secondary" style="font-size:11px;font-weight:600">DISC %</span>
            <span class="cell-secondary" style="font-size:11px;font-weight:600;text-align:right">LINE TOTAL</span>
            <span></span>
          </div>
          <div class="line-items" id="lineItems"></div>
          <button type="button" class="add-line-btn" onclick="app.addLineItem()">+ Add product</button>
        </div>

        <div class="quote-total-bar" id="quoteTotalBar">
          <span class="quote-total-label">Total excl. VAT</span>
          <span class="quote-total-value" id="newQuoteTotal">${formatCurrency(0)}</span>
        </div>

        <div class="form-divider"></div>

        <div class="form-group">
          <label class="form-label">Notes</label>
          <textarea class="form-textarea" id="quoteNotes" placeholder="Internal notes or message to customer..."></textarea>
        </div>

        <div class="form-actions">
          <button type="button" class="btn" onclick="app.closeModal()">Cancel</button>
          <button type="button" class="btn" onclick="app.saveQuote('draft')">Save as Draft</button>
          <button type="submit" class="btn btn-primary" onclick="app.saveQuote('sent')">Save & Send</button>
        </div>
      </form>
    `;
    this.addLineItem();
    this.openModal();
  },

  addLineItem() {
    const id = this.lineItemCounter++;
    const container = document.getElementById('lineItems');
    const div = document.createElement('div');
    div.className = 'line-item';
    div.id = `line-${id}`;
    div.innerHTML = `
      <select class="form-select" onchange="app.updateLineTotal()" id="lineProduct-${id}">
        <option value="">Select product...</option>
        ${DATA.products.map(p => `<option value="${p.id}">${p.name} - ${formatCurrency(p.price)}</option>`).join('')}
      </select>
      <input type="number" class="form-input" value="1" min="1" onchange="app.updateLineTotal()" id="lineQty-${id}">
      <input type="number" class="form-input" value="0" min="0" max="100" onchange="app.updateLineTotal()" id="lineDisc-${id}">
      <span class="line-total" id="lineTotal-${id}">${formatCurrency(0)}</span>
      <button type="button" class="remove-line" onclick="app.removeLine(${id})">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    `;
    container.appendChild(div);
  },

  removeLine(id) {
    document.getElementById(`line-${id}`)?.remove();
    this.updateLineTotal();
  },

  updateLineTotal() {
    let grandTotal = 0;
    document.querySelectorAll('.line-item[id^="line-"]').forEach(line => {
      const id = line.id.replace('line-', '');
      const productId = document.getElementById(`lineProduct-${id}`)?.value;
      const qty = parseInt(document.getElementById(`lineQty-${id}`)?.value) || 0;
      const disc = parseFloat(document.getElementById(`lineDisc-${id}`)?.value) || 0;
      const product = getProduct(productId);
      let lineTotal = 0;
      if (product) {
        lineTotal = product.price * qty;
        lineTotal -= lineTotal * disc / 100;
      }
      const totalEl = document.getElementById(`lineTotal-${id}`);
      if (totalEl) totalEl.textContent = formatCurrency(lineTotal);
      grandTotal += lineTotal;
    });
    const totalEl = document.getElementById('newQuoteTotal');
    if (totalEl) totalEl.textContent = formatCurrency(grandTotal);
  },

  saveQuote(status) {
    const customer = document.getElementById('quoteCustomer')?.value;
    if (!customer) {
      this.toast('Please select a customer', 'error');
      return;
    }

    const items = [];
    document.querySelectorAll('.line-item[id^="line-"]').forEach(line => {
      const id = line.id.replace('line-', '');
      const productId = document.getElementById(`lineProduct-${id}`)?.value;
      const qty = parseInt(document.getElementById(`lineQty-${id}`)?.value) || 0;
      const disc = parseFloat(document.getElementById(`lineDisc-${id}`)?.value) || 0;
      if (productId && qty > 0) {
        items.push({ productId, qty, discount: disc });
      }
    });

    if (items.length === 0) {
      this.toast('Add at least one product', 'error');
      return;
    }

    const newQuote = {
      id: `Q-2026-${String(DATA.quotes.length + 1).padStart(3, '0')}`,
      customer,
      date: new Date().toISOString().split('T')[0],
      validUntil: document.getElementById('quoteValidUntil')?.value,
      status: status || 'draft',
      items,
      notes: document.getElementById('quoteNotes')?.value || '',
    };

    DATA.quotes.unshift(newQuote);
    this.closeModal();
    this.navigate('quotes');
    this.toast(status === 'sent' ? `Quote ${newQuote.id} created and sent!` : `Quote ${newQuote.id} saved as draft`, 'success');
  },

  // ===== ACTIONS =====
  sendQuote(id) {
    const q = DATA.quotes.find(x => x.id === id);
    if (q) {
      q.status = 'sent';
      this.render();
      this.toast(`Quote ${id} sent to customer!`, 'success');
    }
  },

  convertToOrder(quoteId) {
    const q = DATA.quotes.find(x => x.id === quoteId);
    if (!q) return;

    const newOrder = {
      id: `O-2026-${String(DATA.orders.length + 1).padStart(3, '0')}`,
      quoteId: q.id,
      customer: q.customer,
      date: new Date().toISOString().split('T')[0],
      deliveryDate: this.futureDate(21),
      status: 'confirmed',
      items: [...q.items],
    };

    q.status = 'accepted';
    DATA.orders.unshift(newOrder);
    this.navigate('orders');
    this.toast(`Order ${newOrder.id} created from ${quoteId}!`, 'success');
  },

  duplicateQuote(id) {
    const q = DATA.quotes.find(x => x.id === id);
    if (!q) return;

    const dup = {
      ...q,
      id: `Q-2026-${String(DATA.quotes.length + 1).padStart(3, '0')}`,
      date: new Date().toISOString().split('T')[0],
      validUntil: this.futureDate(30),
      status: 'draft',
      items: q.items.map(i => ({ ...i })),
    };

    DATA.quotes.unshift(dup);
    this.navigate('quotes');
    this.toast(`Quote duplicated as ${dup.id}`, 'success');
  },

  // ===== MODAL =====
  openModal() {
    document.getElementById('modalOverlay').classList.add('open');
  },

  closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
  },

  // ===== UTILITIES =====
  toast(message, type) {
    const container = document.getElementById('toastContainer');
    const t = document.createElement('div');
    t.className = `toast ${type || ''}`;
    t.textContent = message;
    container.appendChild(t);
    setTimeout(() => t.remove(), 3500);
  },

  futureDate(days) {
    const d = new Date();
    d.setDate(d.getDate() + days);
    return d.toISOString().split('T')[0];
  },
};

// Initialize
document.addEventListener('DOMContentLoaded', () => app.init());
