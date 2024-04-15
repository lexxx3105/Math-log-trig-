import Daemon from '../Daemon';
import Magician from '../Magician';
import Feature from '../Feature';

test.each([
  ['Daemon', Daemon],
  ['Magician', Magician],
  ['Feature', Feature],
])('класс существует', (_, Class) => {
  expect(new Class()).toBeDefined();
});

const daemon = new Daemon();
const magician = new Magician();

test.each([
  ['Daemon', magician],
  ['Magician', daemon],
])('обладает свойством "attack", наследуется из класса "Feature"', (_, player) => {
  expect(player.attack).toBeGreaterThan(0);
  expect(player.stoned).toBeFalsy();
  expect(player).toBeInstanceOf(Feature);
});

describe.each([
  ['Daemon', magician],
  ['Magician', daemon],
])(
  'класс имеет:',
  (_, player) => {
    test('метод "getStoned" работает', () => {
      expect(player.getStoned()).toBeFalsy();
    });

    test('метод"setStoned" работает', () => {
      player.setStoned(true);

      expect(player.getStoned()).toBeTruthy();
    });

    test('метод"setStoned" работает', () => {
      expect(player.getAttack()).toBeGreaterThan(0);
    });

    test('метод"setStoned" работает', () => {
      player.setAttack(2);

      expect(player.getAttack()).toBe(85);

      player.setAttack(1);
      player.setStoned(false);

      expect(player.getAttack()).toBe(85);

      player.setAttack(11);
      expect(player.getAttack()).toBe(0);

      player.setStoned(10);
      expect(player.getAttack()).toBe(0);
    });
  },
);