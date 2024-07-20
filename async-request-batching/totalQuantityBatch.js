import { totalQuantity as totalQuantityRaw } from "./totalQuantity.js";

const requestsQueue = new Map();

export function totalQuantity(product) {
  if (requestsQueue.has(product)) {
    console.log("Batching...")
    return requestsQueue.get(product);
  }

  const promise = totalQuantityRaw(product);
  requestsQueue.set(product, promise);
  promise.finally(() => {
    requestsQueue.delete(product)
  })
  return promise;
}
