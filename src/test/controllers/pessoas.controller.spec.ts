import { Test, TestingModule } from '@nestjs/testing';
import { PessoasController } from 'appcontroller/pessoas.controller';

import Pessoa from 'appmodel/pessoa.model';
import Page from 'appmodel/page.model';

describe('PessoasController', () => {
  let controller: PessoasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PessoasController],
    }).compile();

    controller = module.get<PessoasController>(PessoasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('/api/pessoas', () => {
    it('/ should give an empty list of users', () => {
      expect(controller.listAll()).toStrictEqual(new Page<Pessoa>(0, 0, 0, []));
    });
  });
});
