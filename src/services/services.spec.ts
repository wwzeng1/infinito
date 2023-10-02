import { Test, TestingModule } from '@nestjs/testing';
import { Service1 } from './service1';
import { Service2 } from './service2';
import { Service3 } from './service3';

describe('Service1', () => {
  let service1: Service1;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Service1],
    }).compile();

    service1 = module.get<Service1>(Service1);
  });

  describe('method1', () => {
    it('should do something', () => {
      // Write test case for method1
    });
  });

  describe('method2', () => {
    it('should do something', () => {
      // Write test case for method2
    });
  });
});

describe('Service2', () => {
  let service2: Service2;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Service2],
    }).compile();

    service2 = module.get<Service2>(Service2);
  });

  describe('method1', () => {
    it('should do something', () => {
      // Write test case for method1
    });
  });

  describe('method2', () => {
    it('should do something', () => {
      // Write test case for method2
    });
  });
});

describe('Service3', () => {
  let service3: Service3;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Service3],
    }).compile();

    service3 = module.get<Service3>(Service3);
  });

  describe('method1', () => {
    it('should do something', () => {
      // Write test case for method1
    });
  });

  describe('method2', () => {
    it('should do something', () => {
      // Write test case for method2
    });
  });
});
