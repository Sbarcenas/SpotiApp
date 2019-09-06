import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  protected getQuery(arg: String): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: 'Bearer BQA0KyTQl2gRCMOUUfbJfaMhJRtI7y_sS9h5BnIXZRC5EI5CPYVsHasszuhsNuC868ReqA2FtrTxKpQ6Ffo'
    })
    return this.http.get(`https://api.spotify.com/v1/${arg}`,{headers})
  }

  public getNewReleases(limit: Number): Observable<any> {
    return this.getQuery(`browse/new-releases?limit=${limit}`).pipe(
      map( x => x['albums'].items)
    )
  }
}
