import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let fixture :ComponentFixture<AppComponent>;
  let app :AppComponent;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports :[
        ReactiveFormsModule
      ]
    })
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  // afterEach

  // afterAll

  // f comme préfixe pour isoler un ou une partie de test(s)

  // x permet d'ignorer un ou des test(s)

  describe("All function()", () =>{

    it("updateAge() should change correctly", () =>{
      expect(app.monAge).toBe(25);
      app.updateAge();
      expect(app.monAge).toBe(35);
    })

    it("name() should be a string", () =>{
      expect(app.name).toBeInstanceOf(String);
      expect(app.name).toBe('Chuck Norris');
    })
  })

  describe("Default test unit", () =>{

    it('should create the app', () => {
      expect(app).toBeTruthy();
    });

    it(`should have as title 'TF-bootcamp-testing-angular'`, () => {
      expect(app.title).toEqual('TF-bootcamp-testing-angular');
    });

    it('should render title', () => {
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.content span')?.textContent).toContain('TF-bootcamp-testing-angular app is running!');
    });

  })
});