import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import TestAgent from 'supertest/lib/agent';
import { Test } from '@nestjs/testing';
import supertest from 'supertest';

export const useApp = () => {
  let app: INestApplication;
  let request: TestAgent;

  beforeAll(async () => {
    const testModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = testModule.createNestApplication();
    await app.init();
  });

  beforeEach(() => {
    request = supertest(app.getHttpServer());
  });

  afterAll(async () => {
    await app.close();
  });

  return () => request;
};
