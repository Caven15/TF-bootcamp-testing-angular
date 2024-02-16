import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { ApiPokemonService } from './api-pokemon.service';

describe('ApiPokemonService', () => {
  let service: ApiPokemonService;
  let httpMock: HttpTestingController

  beforeEach(() => {
    // Configuration du module de test avec HttpClientTestingModule et le service ApiPokemonService
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiPokemonService]

    });
    // Injetion du service et du mock => controller HTTP
    service = TestBed.inject(ApiPokemonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it("Devrait récupérer les détails d'un pokemon par son nom", () =>{
    const mockResponse = {name: 'pikachu', id:25}

    // Appel de la méthode avec un nom de pokémon
    service.getPokemonDetailsByName('pikachu').subscribe((pokemon) =>{
      expect(pokemon).toEqual(mockResponse);
    })

    // Vérification de la requette HTTP GET effectué pour récupérer les détail du pokemon par son nom
    const req = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/pikachu');
    // Vérification de la méthode HTTP utilisée => GET
    expect(req.request.method).toBe('GET');
    // Envoi de la réponse de la simulation
    req.flush(mockResponse);
  })

  it("Devrait récupérer les détails d'un pokemon par son id", ()=>{
    const mockResponse = {name: 'bulbasaur', id:1};

    service.getPokemonDetailsById(1).subscribe((pokemon)=>{
      expect(pokemon).toEqual(mockResponse);
    })

    const req = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/1');

    expect(req.request.method).toBe('GET');

    req.flush(mockResponse);

  })
});
