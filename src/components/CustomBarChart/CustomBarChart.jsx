import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "black",
];
// Custom triangle shape
const getPath = (x, y, width, height) => {
  return `
    M${x},${y + height}
    C${x + width / 3},${y + height}
     ${x + width / 2},${y + height / 3}
     ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3}
     ${x + (2 * width) / 3},${y + height}
     ${x + width},${y + height}
    Z
  `;
};

const TriangleBar = (props) => {
  const { x, y, width, height, fill } = props;

  return <path d={getPath(x, y, width, height)} fill={fill} />;
};

const CustomColorLabel = (props) => {
  const { x, y, width, value, index } = props;

  const fill = colors[index % colors.length];

  return (
    <text
      x={x + width / 2}
      y={y - 5}
      fill={fill}
      textAnchor="middle"
      fontSize={14}
      fontWeight="bold"
    >
      {value}
    </text>
  );
};
export default function CustomBarChart({ data }) {
  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Bar dataKey="value" shape={<TriangleBar />}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}

            <LabelList content={CustomColorLabel} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
