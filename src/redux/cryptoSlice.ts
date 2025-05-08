import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  circulating_supply: number;
  max_supply: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
  sparkline_in_7d: {
    price: number[];
  };
}

interface SortState {
  key: keyof Coin;
  direction: "asc" | "desc";
}

interface CryptoState {
  coins: Coin[];
  status: "idle" | "loading" | "succeeded" | "failed";
  sort: SortState;
}

const initialState: CryptoState = {
  coins: [],
  status: "idle",
  sort: {
    key: "price_change_percentage_24h_in_currency",
    direction: "desc",
  },
};

export const fetchCoins = createAsyncThunk("crypto/fetchCoins", async () => {
  const res = await axios.get(
    "https://api.coingecko.com/api/v3/coins/markets",
    {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 10,
        page: 1,
        sparkline: true,
        price_change_percentage: "1h,24h,7d",
      },
    }
  );
  return res.data as Coin[];
});

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    setSort(state, action: PayloadAction<SortState>) {
      state.sort = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoins.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCoins.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.coins = action.payload;
      })
      .addCase(fetchCoins.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setSort } = cryptoSlice.actions;
export default cryptoSlice.reducer;
