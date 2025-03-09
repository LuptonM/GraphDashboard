import { Injectable, OnDestroy } from '@angular/core';
import { DataService } from './data-service.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { transformRawGraphData } from './libs';
import { Graph } from './types';

@Injectable({
  providedIn: 'root'
})
export class GraphsService implements OnDestroy {
  private subscription: Subscription = new Subscription();
  #graphData$: BehaviorSubject<Graph.GraphData[]> = new BehaviorSubject<Graph.GraphData[]>([]);

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(d => {
      const transformedData = transformRawGraphData(d);
      this.#graphData$.next(transformedData); 
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); 
  }

  get graphData$(): Observable<Graph.GraphData[]> {
    return this.#graphData$.asObservable(); 
  }
}
