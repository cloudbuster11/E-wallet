import { bitCoinTheme, blockChainTheme, evilTheme, ninjaTheme } from './themes';

const startData = [
  {
    id: 0,
    cardNumber: '1234 1234 1234 1234',
    name: 'Joakim Trulsson',
    vendor: 'Bitcoin Inc',
    valid: '12/12',
    theme: bitCoinTheme,
  },
  {
    id: 1,
    cardNumber: 1234123412341234,
    name: 'Emmy Trulsson',
    valid: '12/12',
    vendor: 'Block Chain',
    theme: blockChainTheme,
  },
  {
    id: 2,
    cardNumber: 1234123412341234,
    name: 'Bella Trulsson',
    vendor: 'Evil Corp',
    valid: '12/12',
    theme: evilTheme,
  },
  {
    id: 3,
    cardNumber: 1234123412341234,
    name: 'Eddi Trulsson',
    vendor: 'Ninja Bank',
    valid: '12/12',
    theme: ninjaTheme,
  },
];

export { startData };
