export const parsePrisma = (object) => {
  return JSON.parse(JSON.stringify(
    object,
    (key, value) => (typeof value === 'bigint' ? value.toString() : value)
  ));
}
