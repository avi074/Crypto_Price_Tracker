export interface CryptoAsset {
  id: number;
  logo: string;
  name: string;
  symbol: string;
  price: number;
  percentChange1h: number;
  percentChange24h: number;
  percentChange7d: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  maxSupply: number;
}

export const generateMockData = (): CryptoAsset[] => {
  const baseAssets = [
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Tether", symbol: "USDT" },
    { name: "BNB", symbol: "BNB" },
    { name: "Solana", symbol: "SOL" },
  ];
  return baseAssets.map((asset, i) => ({
    id: i,
    logo: `/crypto/${asset.symbol.toLowerCase()}.svg`,
    name: asset.name,
    symbol: asset.symbol,
    price: +(Math.random() * 50000).toFixed(2),
    percentChange1h: +(Math.random() * 10 - 5).toFixed(2),
    percentChange24h: +(Math.random() * 20 - 10).toFixed(2),
    percentChange7d: +(Math.random() * 30 - 15).toFixed(2),
    marketCap: +(Math.random() * 1e12).toFixed(2),
    volume24h: +(Math.random() * 1e10).toFixed(2),
    circulatingSupply: +(Math.random() * 1e7).toFixed(2),
    maxSupply: +(Math.random() * 1e7 + 1e7).toFixed(2),
  }));
};
