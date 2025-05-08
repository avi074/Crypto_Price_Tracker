import { RootState } from './store';

export const selectSortedCoins = (state: RootState) => {
  const { coins, sort } = state.crypto;
  const sorted = [...coins].sort((a, b) => {
    const aVal = a[sort.key] ?? 0;
    const bVal = b[sort.key] ?? 0;
    return sort.direction === 'asc' ? aVal - bVal : bVal - aVal;
  });
  return sorted;
};