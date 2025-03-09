import { Component, OnInit } from '@angular/core';
import { GraphsService } from '../../services/graphs.service';
import { Observable, of } from 'rxjs';
import { Graph } from '../../services/types';

@Component({
  standalone: false,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  graphList$: Observable<Graph.GraphData[]> = of([]);

  constructor(private graphsService: GraphsService) {}

  ngOnInit(): void {
    this.graphList$ = this.graphsService.graphData$;
  }

  trackById(index: number, item: Graph.GraphData): string {
    return item.id;
  }
}
