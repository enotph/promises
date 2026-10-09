import GameSavingLoader from '../GameSavingLoader';
import GameSaving from '../GameSaving';

describe('GameSavingLoader', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('load возвращает промис с GameSaving', async () => {
    const promise = GameSavingLoader.load();

    await jest.runAllTimersAsync();

    const saving = await promise;

    expect(saving).toBeInstanceOf(GameSaving);
  });

  test('проверка совпадения полей', async () => {
    const promise = GameSavingLoader.load();

    await jest.runAllTimersAsync();

    const saving = await promise;

    expect(saving).toEqual({
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      },
    });
  });

  test('load возвращает именно экземпляр GameSaving, а не plain object', async () => {
    const promise = GameSavingLoader.load();

    await jest.runAllTimersAsync();

    const saving = await promise;

    expect(saving.constructor.name).toBe('GameSaving');
  });

  test('load доступен как статический метод', async () => {
    expect(typeof GameSavingLoader.load).toBe('function');

    const promise = GameSavingLoader.load();
    expect(promise).toBeInstanceOf(Promise);

    await jest.runAllTimersAsync();
  });
});
