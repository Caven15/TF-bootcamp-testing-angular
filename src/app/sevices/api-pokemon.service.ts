import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private _http : HttpClient) { }

  // Méthode pour obtenir les détails d"un pokémon par son nom
  getPokemonDetailsByName(name: string): Observable<any>{
    return this._http.get(`${this.apiUrl}/pokemon/${name}`);
  }

  // Méthode pour obtenir les détails d"un pokémon par son Id
  getPokemonDetailsById(id: number): Observable<any>{
    return this._http.get(`${this.apiUrl}/pokemon/${id}`);
  }

}
