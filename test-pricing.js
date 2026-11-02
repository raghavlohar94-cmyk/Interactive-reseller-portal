const test = require('node:test');
const assert = require('node:assert/strict');
const { discountRate, quoteTotal } = require('./pricing.js');

const products = [
  {sku:'P-100',price:100},
  {sku:'P-200',price:40},
];

test('single-unit pricing has no discount', () => {
  assert.equal(discountRate(1), 0);
  assert.equal(quoteTotal({'P-100':1}, products), 100);
});
test('bulk pricing discounts ten or more units', () => {
  assert.equal(discountRate(10), 0.10);
  assert.equal(quoteTotal({'P-100':10}, products), 900);
});
test('quote totals multiple products independently', () => {
  assert.equal(quoteTotal({'P-100':10,'P-200':2}, products), 980);
});
test('empty or negative quantities are safe', () => {
  assert.equal(quoteTotal({'P-100':0,'P-200':-3}, products), 0);
});
