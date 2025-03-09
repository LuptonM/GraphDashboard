import * as vegaLite from "vega-lite";

export namespace Response {
  export interface GetGraphData {
    data: RawGraphData[];
  }

  export interface RawGraphData {
    title: string;
    subTitle: string;
    date: string;
    url: string;
    description: string;
    chart: { x: number; y: number }[];
  }
}

export namespace Graph {
  export interface GraphData {
    id: string;
    date: Date;
    url: string;
    description: string;
    graphSpec: vegaLite.TopLevelSpec;
    graphData: { x: number; y: number }[];
  }
}
