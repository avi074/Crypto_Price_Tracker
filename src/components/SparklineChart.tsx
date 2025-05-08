import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface SparklineChartProps {
  data: number[];
  width?: number;
  height?: number;
}

const SparklineChart: React.FC<SparklineChartProps> = ({
  data,
  width = 200,
  height = 40,
}) => {
  if (!data || data.length < 2) return null;

  const chartData = data.map((value, index) => ({
    time: index,
    price: value,
  }));

  const min = Math.min(...data);
  const max = Math.max(...data);
  const buffer = (max - min) * 0.1;

  const isUp = data[data.length - 1] >= data[0];
  const stroke = isUp ? "#16c784" : "#ea3943";
  const fillId = isUp ? "gradientUp" : "gradientDown";

  return (
    <div style={{ width, height }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="gradientUp" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#16c784" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#16c784" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gradientDown" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ea3943" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#ea3943" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis dataKey="time" hide />
          <YAxis domain={[min - buffer, max + buffer]} hide />
          <Tooltip contentStyle={{ display: "none" }} cursor={false} />

          <Area
            type="basis" // You can change to "basis" for more curve
            dataKey="price"
            stroke={stroke}
            fill={`url(#${fillId})`}
            strokeWidth={2}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SparklineChart;
