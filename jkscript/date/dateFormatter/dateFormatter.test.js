import dayjs from 'dayjs';
import dateFormatter from './dateFormatter';

describe('utils/dateFormatter', () => {
  test('toIsoDate', () => {
    const date = dayjs(new Date(2021, 10, 2, 15, 0, 0));
    expect(dateFormatter.toIsoDate(date)).toEqual('2021-11-02');
  });

  test('toTimeString', () => {
    const date = dayjs(new Date(2021, 0, 1, 15, 30, 0));
    expect(dateFormatter.toTimeString(date)).toEqual('15:30');
  });

  test('toHybridDateString', () => {
    const date = dayjs(new Date(2021, 3, 10, 15, 0, 0));
    expect(dateFormatter.toHybridDateString(date)).toEqual('Sat 10.04.2021');
  });

  test('toTimeAndHybridDateString', () => {
    const date = dayjs(new Date(2021, 3, 10, 15, 40, 12));
    expect(dateFormatter.toTimeAndHybridDateString(date)).toEqual(
      '15:40 Sat 10.04.2021'
    );
  });
});
