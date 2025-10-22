import {TestBed} from '@angular/core/testing';
import {GlobalService} from '../global.service';
import {provideHttpClient} from '@angular/common/http';
import {Post} from '../../models/post';

describe('GlobalService', () => {
  let service: GlobalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(GlobalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 200', async () => {
    let x: Post = await service.getObject<Post>(1, "posts");
    expect(x.title).toEqual("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
  });
});
