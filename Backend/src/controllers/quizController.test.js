const quizController = require('./quizController');
const Quiz = require('../models/quizModel');

jest.mock('../models/quizModel');
describe('QuizController', () => {
  let req;
  let res;
  beforeEach(() => {
    res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()

    };
  });
  describe('Given createOne', () => {
    beforeEach(() => {
      req = {
        body: {

        }
      };
    });

    describe('When is invoked', () => {
      describe('And Quiz.CreateOne resolve', () => {
        test('The res.json is called', async () => {
          Quiz.create.mockResolvedValue({ description: 'julio', alternatives: [] });
          await quizController.createOne(req, res);
          expect(res.json).toHaveBeenCalled();
        });
      });
      describe('And Quiz.CreateOne rejected', () => {
        test('Then res.status with 500', async () => {
          Quiz.create.mockResolvedValue();
          await quizController.createOne(req, res);
          expect(res.json).toHaveBeenCalled();
        });
      });
      test('Then res.send is called with CREATE_ERROR', async () => {
        Quiz.create.mockRejectedValue(new Error('CREATE_ERROR'));

        await quizController.createOne(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('CREATE_ERROR');
      });
    });
  });
  describe('Given getAll', () => {
    beforeEach(() => {
      req = {
        query: {}
      };
    });
    describe('When is invoked', () => {
      describe('And Quiz.find resolves', () => {
        test('Then res.json is called', async () => {
          Quiz.find.mockResolvedValue({ name: 'pepe' });

          await quizController.getAll(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And Quiz.find rejects', () => {
        test('Then res.status with 500', async () => {
          Quiz.find.mockRejectedValue();

          await quizController.getAll(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with FIND_ERROR', async () => {
          Quiz.find.mockRejectedValue(new Error('FIND_ERROR'));

          await quizController.getAll(req, res);

          expect(res.send.mock.calls[0][0].message).toBe('FIND_ERROR');
        });
      });
    });
  });
  describe('Given getOneById', () => {
    beforeEach(() => {
      req = {
        params: { quizId: 'i71283716283761827361827' }
      };
    });

    describe('When is invoked', () => {
      describe('And Quiz.getOne resolves', () => {
        test('Then res.json is called', async () => {
          Quiz.findById.mockResolvedValue({ description: 'dddd' });

          await quizController.getOne(req, res);

          expect(res.send).toHaveBeenCalled();
        });
      });

      describe('And Quiz.getOne rejects', () => {
        test('Then res.status with 500', async () => {
          Quiz.findById.mockRejectedValue();

          await quizController.getOne(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with FINDBYID_ERROR', async () => {
          Quiz.findById.mockRejectedValue(
            new Error('FINDBYID_ERROR')
          );

          await quizController.getOne(req, res);

          expect(res.send.mock.calls[0][0].message).toBe('FINDBYID_ERROR');
        });
      });
    });
  });
  describe('Given updateOneQuiz', () => {
    beforeEach(() => {
      req = {
        body: {},
        params: { quizId: 'tewte456345646' }
      };
    });
    describe('When is invoked', () => {
      describe('And quiz.updateOneQuiz resolves', () => {
        test('Then res.json is called', async () => {
          Quiz.findByIdAndUpdate.mockResolvedValue();

          await quizController.updateOneQuiz(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And quiz.updateOneQuiz rejects', () => {
        test('Then res.status with 500', async () => {
          Quiz.findByIdAndUpdate.mockRejectedValue();

          await quizController.updateOneQuiz(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with updateOneQuiz_ERROR', async () => {
          Quiz.findByIdAndUpdate.mockRejectedValue(new Error('findByIdAndUpdate_ERROR'));

          await quizController.updateOneQuiz(req, res);

          expect(res.send.mock.calls[0][0].message).toBe('findByIdAndUpdate_ERROR');
        });
      });
    });
  });
  describe('Given deleteOneById', () => {
    beforeEach(() => {
      req = {
        body: {},
        params: { quizId: 'tewte456345646' }
      };
    });
    describe('When is invoked', () => {
      describe('And quiz.deleteOneById resolves', () => {
        test('Then res.json is called', async () => {
          Quiz.findByIdAndDelete.mockResolvedValue();

          await quizController.deleteOneQuiz(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And quiz.deleteOneById rejects', () => {
        test('Then res.status with 500', async () => {
          Quiz.findByIdAndDelete.mockRejectedValue();

          await quizController.deleteOneQuiz(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with deleteOneById_ERROR', async () => {
          Quiz.findByIdAndDelete.mockRejectedValue(new Error('findByIdAndUpdate_ERROR'));

          await quizController.deleteOneQuiz(req, res);

          expect(res.send.mock.calls[0][0].message).toBe('findByIdAndUpdate_ERROR');
        });
      });
    });
  });
});
