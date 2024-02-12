export function times(length: number): number[] {
  return Array.from({ length }).map((_, idx) => idx);
}
