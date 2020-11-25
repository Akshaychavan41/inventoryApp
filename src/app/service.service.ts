import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

 
  constructor(private http: HttpClient) { }
  getData() : Observable<any> {
    return <Observable<any>> this.http.get("http://localhost:8080/rest/get") ;
  }

  loadData(data:any) : Observable<any> {
    return <Observable<any>> this.http.post("http://localhost:8080/rest/load", data) ;
  }

  deleteData(id:any) :Observable<any> {
    const deleteUrl = "http://localhost:8080/rest/delete"
    const url = `${deleteUrl}/${id}`
    return <Observable<any>> this.http.delete(url) ;
  }
}
