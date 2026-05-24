export function toDisplayPhone(areaCode: string, number: string) {
  return `(${areaCode}) ${number.slice(0, 5)}-${number.slice(5)}`;
}
