import { Response, Graph } from "./types";
import * as vegaLite from "vega-lite";

export function transformRawGraphData(data: Response.GetGraphData): Graph.GraphData[] {
  return data.data.map(d => ({
    description: d.description,
    id: d.title,
    url: d.url,
    date: new Date(d.date),
    graphData: d.chart,
    graphSpec: generateTimeLineGraphSpec(d.title, d.subTitle, d.chart)
  }));
}

function generateTimeLineGraphSpec(
  title: string, 
  subTitle: string, 
  data: { x: number, y: number }[]
): vegaLite.TopLevelSpec {
  const vegaLiteSpec: vegaLite.TopLevelSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": {
      "text": title,
      "subtitle": subTitle
    },
    height: 300,
    "autosize": {
    "type": "fit",
    "resize": true

  },
  width: 'container',
    "data": {
      "values": data.map(point => ({
        date: new Date(point.x).toISOString(),  // Converting date to ISO format string
        value: point.y
      }))
    },
    "mark": "line",
    "encoding": {
      "x": {
        "field": "date",
        "type": "temporal",
        "title": "Date"
      },
      "y": {
        "field": "value",
        "type": "quantitative",
        "title": "Value"
      }
    }
  };

  return vegaLiteSpec;
}
