import { ChipDark, ChipLight, Bitcoin, Blockchain, Evil, Ninja } from './assets/index';

const bitCoinTheme = {
  img: Bitcoin,
  color: '#FFAE34',
  fontColor: '#000',
  chip: ChipDark,
};

const blockChainTheme = {
  img: Blockchain,
  color: '#8B58F9',
  fontColor: '#fff',
  chip: ChipLight,
};

const evilTheme = {
  img: Evil,
  color: '#F33355',
  fontColor: '#fff',
  chip: ChipLight,
};

const ninjaTheme = {
  img: Ninja,
  color: 'linear-gradient(248.3deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%), #222222',
  fontColor: '#fff',
  chip: ChipLight,
};

const placeHolderTheme = {
  id: 666,
  cardNumber: 'XXXX XXXX XXXX XXXX',
  name: 'Firstname Lastname',
  vendor: null,
  valid: 'MM/YY',
  theme: {
    img: null,
    color: '#D0D0D0',
    fontColor: '#000',
    chip: ChipDark,
  },
};

export { bitCoinTheme, blockChainTheme, evilTheme, ninjaTheme, placeHolderTheme };
