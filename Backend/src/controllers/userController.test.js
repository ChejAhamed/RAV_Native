const userController = require('./userController');
const User = require('../models/userModel');

jest.mock('../models/userModel');
describe('userController', () => {
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
      describe('And User.CreateOne resolve', () => {
        test('The res.json is called', async () => {
          User.create.mockResolvedValue({ description: 'julio', alternatives: [] });
          await userController.createOne(req, res);
          expect(res.json).toHaveBeenCalled();
        });
      });
      describe('And User.CreateOne rejected', () => {
        test('Then res.status with 500', async () => {
          User.create.mockResolvedValue();
          await userController.createOne(req, res);
          expect(res.json).toHaveBeenCalled();
        });
      });
      test('Then res.send is called with CREATE_ERROR', async () => {
        User.create.mockRejectedValue(new Error('CREATE_ERROR'));

        await userController.createOne(req, res);

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
      describe('And User.find resolves', () => {
        test('Then res.json is called', async () => {
          User.find.mockResolvedValue({ name: 'pepe' });

          await userController.getAll(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And User.find rejects', () => {
        test('Then res.status with 500', async () => {
          User.find.mockRejectedValue();

          await userController.getAll(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with FIND_ERROR', async () => {
          User.find.mockRejectedValue(new Error('FIND_ERROR'));

          await userController.getAll(req, res);

          expect(res.send.mock.calls[0][0].message).toBe('FIND_ERROR');
        });
      });
    });
  });
  describe('Given getOneByIdById', () => {
    beforeEach(() => {
      req = {
        params: { UserId: 'i71283716283761827361827' }
      };
    });

    describe('When is invoked', () => {
      describe('And User.getOneById resolves', () => {
        test('Then res.json is called', async () => {
          User.findById.mockResolvedValue({ name: 'julio' });

          await userController.getOneById(req, res);

          expect(res.send).toHaveBeenCalled();
        });
      });

      describe('And User.getOneById rejects', () => {
        test('Then res.status with 500', async () => {
          User.findById.mockRejectedValue();

          await userController.getOneById(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with FINDBYID_ERROR', async () => {
          User.findById.mockRejectedValue(
            new Error('FINDBYID_ERROR')
          );

          await userController.getOneById(req, res);

          expect(res.send.mock.calls[0][0].message).toBe('FINDBYID_ERROR');
        });
      });
    });
  });
  describe('Given updateOneUser', () => {
    beforeEach(() => {
      req = {
        body: {},
        params: { UserId: 'tewte456345646' }
      };
    });
    describe('When is invoked', () => {
      describe('And User.updateOneUser resolves', () => {
        test('Then res.json is called', async () => {
          User.findByIdAndUpdate.mockResolvedValue();

          await userController.updateOneUser(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And User.updateOneUser rejects', () => {
        test('Then res.status with 500', async () => {
          User.findByIdAndUpdate.mockRejectedValue();

          await userController.updateOneUser(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with updateOneUser_ERROR', async () => {
          User.findByIdAndUpdate.mockRejectedValue(new Error('findByIdAndUpdate_ERROR'));

          await userController.updateOneUser(req, res);

          expect(res.send.mock.calls[0][0].message).toBe('findByIdAndUpdate_ERROR');
        });
      });
    });
  });
  describe('Given deleteOneById', () => {
    beforeEach(() => {
      req = {
        body: {},
        params: { UserId: 'tewte456345646' }
      };
    });
    describe('When is invoked', () => {
      describe('And User.deleteOneById resolves', () => {
        test('Then res.json is called', async () => {
          User.findByIdAndDelete.mockResolvedValue();

          await userController.deleteOneUser(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And User.deleteOneById rejects', () => {
        test('Then res.status with 500', async () => {
          User.findByIdAndDelete.mockRejectedValue();

          await userController.deleteOneUser(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with deleteOneById_ERROR', async () => {
          User.findByIdAndDelete.mockRejectedValue(new Error('findByIdAndUpdate_ERROR'));

          await userController.deleteOneUser(req, res);

          expect(res.send.mock.calls[0][0].message).toBe('findByIdAndUpdate_ERROR');
        });
      });
    });
  });
});
