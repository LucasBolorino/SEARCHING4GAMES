import { TestBed } from '@angular/core/testing';
import { JogoService } from './jogo.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('JogoService', () => {
  let service: JogoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [JogoService]
    });

    service = TestBed.get(JogoService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
