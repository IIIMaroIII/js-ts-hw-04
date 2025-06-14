interface Products {
  [productName: string]: number
}

type IsEnoughCapacityFn = (products: Products, containerSize: number) => boolean

const isEnoughCapacity: IsEnoughCapacityFn = function (products, containerSize) {
  const values = Object.values(products)
  let total: number = 0

  for (const v of values) {
    total += v
  }

  return total > containerSize ? false : true
}

export default isEnoughCapacity
