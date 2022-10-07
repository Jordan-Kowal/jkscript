import getObjectSubValue from './getObjectSubValue';

describe('utils/getObjectSubValue', () => {
  const object = {
    id: 1,
    mode: {
      id: 2,
      name: 'Mode',
      zone: {
        id: 3,
        zoneName: 'Zone',
      },
    },
  };

  test('Fetch existing key', () => {
    expect(getObjectSubValue(object, 'id')).toEqual(1);
    expect(getObjectSubValue(object, 'mode.zone')).toEqual(object.mode.zone);
    expect(getObjectSubValue(object, 'mode.zone.zoneName')).toEqual('Zone');
  });

  test('Fetch unknown key', () => {
    expect(getObjectSubValue(object, 'ids')).toEqual(undefined);
    expect(getObjectSubValue(object, 'mode.ids')).toEqual(undefined);
    expect(getObjectSubValue(object, 'id.mode.ids', [1, 2])).toEqual([1, 2]);
  });
});
