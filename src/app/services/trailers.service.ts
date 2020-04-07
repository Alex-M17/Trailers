import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trailer } from '../interfaces/trailer';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class TrailersService {
  API_ENDPOINT = 'http://127.0.0.1:8000/api';
  constructor(private httpClient: HttpClient) { }

  get(){
    return this.httpClient.get(this.API_ENDPOINT + '/trailers');
  }

  getUser(){
    return this.httpClient.get(this.API_ENDPOINT + '/login');
  }

  putUser(user: Login){
    const Headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put(this.API_ENDPOINT + '/login/' + user.id, user, { headers: Headers});
  }

  save(trailer: Trailer){
    const Headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/trailers', trailer, { headers: Headers});
  }

  send(contacto){
    const Headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/contacto', contacto, { headers: Headers});
  }

  put(trailer: Trailer){
    const Headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put(this.API_ENDPOINT + '/trailers/' + trailer.id, trailer, { headers: Headers});
  }

  delete(id){
    return this.httpClient.delete(this.API_ENDPOINT + '/trailers/' + id);
  }

  show(title){
    return this.httpClient.get(this.API_ENDPOINT + '/trailers' + title);
  }
}
