import { Card, CardHeader, Text } from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";
import { LineChart, BarChart } from "@ui5/webcomponents-react-charts";
import { dataset } from "./dataset";

export function MyApp() {
  const handleHeaderClick = () => {
    alert("Header clicked");
  };

  return (
    <div>
      <Card
        header={
          <CardHeader
            titleText="Card header"
            interactive
            onClick={handleHeaderClick}
          />
        }
        style={{ width: "300px" }}
      >
        <Text style={spacing.sapUiContentPadding}>
          This is the content area of the Card
        </Text>
        <LineChart
          measures={[{ accessor: "data", label: "Stock Price" }]}
          dimensions={[{ accessor: "month" }]}
          dataset={dataset}
        />
      </Card>
    </div>
  );
}
