import { useEffect } from "react";
import "./CryptoTable.css";
import SparklineChart from "./SparklineChart";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchCoins, setSort } from "../redux/cryptoSlice";
import { selectSortedCoins } from "../redux/selectors";

const headers = [
  { label: "1h %", key: "price_change_percentage_1h_in_currency" },
  { label: "24h %", key: "price_change_percentage_24h_in_currency" },
  { label: "7d %", key: "price_change_percentage_7d_in_currency" },
] as const;

type SortKey = (typeof headers)[number]["key"];

const CryptoTable = () => {
  const dispatch = useAppDispatch();
  const coins = useAppSelector(selectSortedCoins);
  const sort = useAppSelector((state) => state.crypto.sort);

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  const handleSort = (key: SortKey) => {
    dispatch(
      setSort({
        key,
        direction:
          sort.key === key && sort.direction === "desc" ? "asc" : "desc",
      })
    );
  };

  return (
    <table className="crypto-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Icon</th>
          <th>Name</th>
          <th>Price</th>
          {headers.map((h) => (
            <th
              key={h.key}
              onClick={() => handleSort(h.key)}
              className="cursor-pointer"
            >
              {h.label}
              {sort.key === h.key ? (sort.direction === "asc" ? "↑" : "↓") : ""}
            </th>
          ))}
          <th>Market Cap</th>
          <th>Volume(24h)</th>
          <th>Circulating Supply</th>
          <th>Last 7 Days</th>
        </tr>
      </thead>
      <tbody>
        {coins.map((coin, index) => (
          <tr key={coin.id}>
            <td>{index + 1}</td>
            <td>
              <img
                src={coin.image}
                alt="icon"
                width={40}
                height={40}
                loading="lazy"
              />
            </td>
            <td>
              <p className="flex flex-col gap-2">
                <span className="font-bold font-sans tracking-wider text-xl">
                  {coin.name}
                </span>
                <span className="font-medium text-gray-600 text-sm">
                  {" "}
                  {coin.symbol.toUpperCase()}
                </span>
              </p>
            </td>
            <td>${coin.current_price.toLocaleString()}</td>
            <td
              className={
                coin.price_change_percentage_1h_in_currency > 0
                  ? "green"
                  : "red"
              }
            >
              {coin.price_change_percentage_1h_in_currency?.toFixed(2)}%
            </td>
            <td
              className={coin.price_change_percentage_24h_in_currency > 0 ? "green" : "red"}
            >
              {coin.price_change_percentage_24h_in_currency?.toFixed(2)}%
            </td>
            <td
              className={
                coin.price_change_percentage_7d_in_currency > 0
                  ? "green"
                  : "red"
              }
            >
              {coin.price_change_percentage_7d_in_currency?.toFixed(2)}%
            </td>
            <td>${coin.market_cap.toLocaleString()}</td>
            <td>${coin.total_volume.toLocaleString()}</td>
            <td>
              {coin.circulating_supply.toLocaleString()}{" "}
              {coin.symbol.toUpperCase()}
            </td>
            <td>
              <SparklineChart
                data={coin.sparkline_in_7d.price}
                width={200}
                height={64}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CryptoTable;
