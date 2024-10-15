const { calculateGross, calculateNet, calculateVAT } = require("./accounting");

const item = 100;
const gross = calculateGross(item, "hello");
const vat = calculateVAT(item);

console.log(
  `For an item that costs £${item}, excluding VAT, the VAT is £${vat}, which means gross price is £${gross}`
);

const itemIncVAT = 100;

const net = calculateNet(itemIncVAT);
console.log(
  `For an item that costs £${itemIncVAT} that includes VAT the net price is £${net}`
);
