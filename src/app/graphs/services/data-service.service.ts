import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Response } from './types';
import * as jsonData from './data.json';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private jsonUrl = 'assets/data.json';

  getData(): Observable<Response.GetGraphData> {
    return of(jsonData)
  }
}
