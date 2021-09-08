import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { MainModule } from 'appmodule/main.module';
import * as newman from 'newman';

describe('End to End Testing', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [MainModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/hello (GET)', () => {
    newman.run(
      {
        collection: './test.postman_collection',
        environment: './test.postman_environment',
        reporters: 'cli',
      },
      (err) => {
        if (err) {
          throw err;
        }
        // tslint:disable:no-console
        console.log('collection run complete!');
      },
    );
  });
});
