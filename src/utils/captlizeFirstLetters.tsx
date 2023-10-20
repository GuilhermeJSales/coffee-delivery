export function capitalizeFirstLetters(value: string) {
  return value.replace(/\b\w/g, (valueState) => valueState.toUpperCase())
}
