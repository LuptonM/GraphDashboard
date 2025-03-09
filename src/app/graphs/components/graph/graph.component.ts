import { Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import { Graph } from '../../services/types';
import * as vegaEmbed from 'vega-embed';
import * as vega from 'vega';
import * as vegaLite from 'vega-lite';

@Component({
  standalone: false,
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss',
})
export class GraphComponent {
  @Input() data: { x: number, y: number }[] = [];
  @Input() graphSpec?: vegaLite.TopLevelSpec;
  @Input() dataId: string = '';

  @ViewChild('graphContainer') element?: ElementRef;

  private view?: vega.View;

  ngOnChanges(changes: SimpleChanges): void {
    if ('data' in changes) {
      if (this.view) {
        this.view.finalize();
      }
      this.renderGraph();
    }
  }

  ngAfterViewInit(): void {
    this.renderGraph();
  }

  ngOnDestroy(): void {
    if (this.view) {
      this.view.finalize();
    }
  }

  private renderGraph(): void {
    if (this.element && this.graphSpec && this.dataId) {
      const compiledSpec: vega.Spec = vegaLite.compile(this.graphSpec).spec;

      vegaEmbed.default(this.element.nativeElement, compiledSpec, { actions: false }).then(result => {
        this.view = result.view;
        this.changeViewDataSet(this.view);
      });
    }
  }

  private changeViewDataSet(view: vega.View): void {
    const deepCopy = deepCopyArray(this.data);
    view.change(this.dataId, vega.changeset().remove(() => true).insert(deepCopy)).run();
  }
}

function deepCopyArray(arr: { x: number, y: number }[]): { x: number, y: number }[] {
  return arr.map(item => ({ ...item }));
}
