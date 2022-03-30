import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JogoListComponent } from './jogo-list.component';
import { JogoService } from '../jogo.service';

describe('JogoListComponent', () => {
  let component: JogoListComponent;
  let fixture: ComponentFixture<JogoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JogoListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [JogoService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
