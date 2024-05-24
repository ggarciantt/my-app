import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Card,
  CardHeader,
  Text,
  List,
  StandardListItem,
  CustomListItem,
  ValueState,
  ProgressIndicator,
  FlexBox,
  FlexBoxJustifyContent,
  FlexBoxWrap,
  FlexBoxDirection,
  AnalyticalTable,
  Icon,
} from "@ui5/webcomponents-react";

import { spacing, ThemingParameters } from "@ui5/webcomponents-react-base";
import { LineChart, BarChart } from "@ui5/webcomponents-react-charts";
import { dataset } from "./data/dataset";
import { tableData } from "./data/tableData";
import { tableColumns } from "./data/tableData";

import { MyCustomElement } from "./MyCustomElement";

import lineChartIcon from "@ui5/webcomponents-icons/dist/line-chart.js";
import barChartIcon from "@ui5/webcomponents-icons/dist/horizontal-bar-chart.js";
import listIcon from "@ui5/webcomponents-icons/dist/list.js";
import tableViewIcon from "@ui5/webcomponents-icons/dist/table-view.js";

export function Home() {
  const [toggleCharts, setToggleCharts] = useState("lineChart");
  const [loading, setLoading] = useState(false);

  const contentTitle =
    toggleCharts === "lineChart" ? "Line Chart" : "Bar Chart";
  const switchToChart =
    toggleCharts === "lineChart" ? "Bar Chart" : "Line Chart";

  const handleHeaderClick = () => {
    if (toggleCharts == "lineChart") {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setToggleCharts("barChart");
      }, 2000);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setToggleCharts("lineChart");
      }, 2000);
    }
  };

  const navigate = useNavigate();
  const handleProgressHeaderClick = () => {
    navigate("/detail");
  };

  return (
    <FlexBox
      justifyContent={FlexBoxJustifyContent.Center}
      wrap={FlexBoxWrap.Wrap}
      style={spacing.sapUiContentPadding}
    >
      <MyCustomElement />
      <Card
        header={
          <CardHeader
            titleText={contentTitle}
            subtitleText={`Click here to switch to ${switchToChart}`}
            interactive
            onClick={handleHeaderClick}
            avatar={
              <Icon
                name={
                  toggleCharts == "lineChart" ? lineChartIcon : barChartIcon
                }
              />
            }
          />
        }
        style={{ width: "300px", ...spacing.sapUiContentPadding }}
      >
        <Text style={spacing.sapUiContentPadding}>
          This is the content area of the Card
        </Text>
        {toggleCharts == "lineChart" ? (
          <LineChart
            measures={[{ accessor: "data", label: "Stock Price" }]}
            dimensions={[{ accessor: "month" }]}
            dataset={dataset}
            loading={loading}
          />
        ) : (
          <BarChart
            measures={[{ accessor: "data", label: "Stock Price" }]}
            dimensions={[{ accessor: "month" }]}
            dataset={dataset}
            loading={loading}
          />
        )}
      </Card>

      <Card
        header={
          <CardHeader
            titleText="Progress"
            subtitleText="List"
            avatar={<Icon name={listIcon} />}
            interactive
            onClick={handleProgressHeaderClick}
          />
        }
        style={{ width: "300px", ...spacing.sapUiContentPadding }}
      >
        <List>
          <StandardListItem
            additionalText="finished"
            additionalTextState={ValueState.Success}
          >
            Activity 1
          </StandardListItem>
          <StandardListItem
            additionalText="failed"
            additionalTextState={ValueState.Error}
          >
            Activity 2
          </StandardListItem>
          <CustomListItem>
            <FlexBox
              direction={FlexBoxDirection.Column}
              style={{ width: "100%", ...spacing.sapUiSmallMarginTopBottom }}
            >
              <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
                <Text>Activity 3</Text>
                <Text style={{ color: ThemingParameters.sapCriticalTextColor }}>
                  In progress
                </Text>
              </FlexBox>
              <ProgressIndicator
                value={89}
                valueState={ValueState.Success}
              ></ProgressIndicator>
            </FlexBox>
          </CustomListItem>
          <CustomListItem>
            <FlexBox
              direction={FlexBoxDirection.Column}
              style={{ width: "100%", ...spacing.sapUiSmallMarginTopBottom }}
            >
              <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
                <Text>Activity 4</Text>
                <Text style={{ color: ThemingParameters.sapCriticalTextColor }}>
                  In progress
                </Text>
              </FlexBox>
              <ProgressIndicator
                value={5}
                valueState={ValueState.Error}
              ></ProgressIndicator>
            </FlexBox>
          </CustomListItem>
        </List>
      </Card>

      <Card
        header={
          <CardHeader
            titleText="AnalyticalTable"
            avatar={<Icon name={tableViewIcon} />}
          />
        }
        style={{ maxWidth: "900px", ...spacing.sapUiContentPadding }}
      >
        <AnalyticalTable
          data={tableData}
          columns={tableColumns}
          visibleRows={5}
        />
      </Card>
    </FlexBox>
  );
}
