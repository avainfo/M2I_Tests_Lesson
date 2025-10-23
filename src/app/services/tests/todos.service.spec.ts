import {TestBed} from '@angular/core/testing';
import {TodosService} from '../todos.service';
import {HttpClient, provideHttpClient} from '@angular/common/http';
import {HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';


describe('TodosService', () => {
  let service: TodosService;
  let httpClient: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodosService, provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(TodosService);
    httpClient = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be returning 200', async () => {
    let mockData = {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false
    };
    let id = 1;
    let x = service.getTodo(id);
    let req = httpClient.expectOne("https://jsonplaceholder.typicode.com/todos/" + id);
    expect(req.request.method).toEqual("GET");
    req.flush(mockData)
    expect((await x).title).toEqual(mockData.title);
  })
});
