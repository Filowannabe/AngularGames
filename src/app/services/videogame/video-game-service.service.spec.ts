import { TestBed } from '@angular/core/testing';

import { VideoGameServiceService } from './video-game-service.service';

describe('VideoGameServiceService', () => {
  let service: VideoGameServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoGameServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
