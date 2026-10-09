import GameSavingLoader from './gameSavingLoader';

GameSavingLoader.load().then((saving) => {
  console.log(saving);
});

export default GameSavingLoader;
