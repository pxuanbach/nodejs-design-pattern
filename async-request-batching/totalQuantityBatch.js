import { totalQuantity as totalQuantityRaw } from "./totalQuantity.js";

const runningRequests = new Map();

export function totalQuantity(product) {
  if (runningRequests.has(product)) {
    console.log("Batching...")
    return runningRequests.get(product);
  }

  const promise = totalQuantityRaw(product);
  runningRequests.set(product, promise);
  promise.finally(() => {
    runningRequests.delete(product)
  })
  return promise;
}
