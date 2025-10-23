import {TestBed} from '@angular/core/testing';
import {GlobalService} from '../global.service';
import {Post} from '../../models/post';
import {HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';
import {provideHttpClient} from '@angular/common/http';

describe('GlobalService', () => {
  let service: GlobalService;
  let httpMock: HttpTestingController
  const mockUrl = 'https://jsonplaceholder.typicode.com/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalService, provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(GlobalService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return Post (id 1)', async () => {
    const testId = 1;
    const testEndpoint = 'posts';
    const mockPost: Post = {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }

    const promise = service.getObject<Post>(testId, testEndpoint);
    const req = httpMock.expectOne(`${mockUrl}${testEndpoint}/${testId}`)
    expect(req.request.method).toBe('GET');
    req.flush(mockPost);

    const result = await promise;
    expect(result).toEqual(mockPost);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
