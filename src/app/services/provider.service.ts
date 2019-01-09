import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {providerUrl, jobUrl} from '../../assets/urls';
import index from '@angular/cli/lib/cli';
import {User} from '../components/shared/model';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: HttpClient) {
  }

  public getProviders(count: number, indexStart: number): Observable<any> {
    return <Observable<any>> this.http.get(`${providerUrl}/limit=${count}&start=${indexStart}`,
      httpOptions);
  }

  public getFilteredProviders(ids: string[]): Observable<any> {
    return <Observable<any>> this.http.get(`${providerUrl}/abilities=${ids}`, httpOptions);
  }

  public getProvidersWithStar(stars: string): Observable<any> {
    return <Observable<any>> this.http.get(`${providerUrl}/rating=${stars}`, httpOptions);
  }

  public assingJob(idJob: string, assignedIds: string[]): Observable<any> {
    return <Observable<any>> this.http.post(`${jobUrl}/${idJob}/assign`,{assignedProviders: assignedIds}, httpOptions);
  }
}
