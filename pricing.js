/* Pure pricing logic for the fictional reseller portal. */
(function(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.Pricing = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function() {
  function discountRate(qty) {
    return qty >= 10 ? 0.10 : 0;
  }
  function quoteTotal(quantities, products) {
    return products.reduce((sum, p) => {
      const qty = Math.max(0, Number(quantities[p.sku]) || 0);
      return sum + p.price * qty * (1 - discountRate(qty));
    }, 0);
  }
  return { discountRate, quoteTotal };
});
