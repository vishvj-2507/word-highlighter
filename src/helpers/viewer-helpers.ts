const topLeftXPosition = 0;
const topLeftYPosition = 1;
const topRightXPosition = 2;
const bottomLeftYPosition = 7;
const bottomRightXPosition = 4;
const bottomRightYPosittion = 5;

/* Get the coordinates of the selected word */
export function getCoordinates(coordinates: number[]) {
  if (!coordinates) return null;

  const wordWidth = coordinates[topRightXPosition] - coordinates[topLeftXPosition];

  const wordHeight = coordinates[bottomLeftYPosition] - coordinates[topLeftYPosition];

  return {
    x: coordinates[topLeftXPosition],
    y: coordinates[topLeftYPosition],
    wordWidth,
    wordHeight,
  };
}

/* Get the matched word from the json data */
export function getClickedWord(event: any, words: any, callback: Function) {
  const clickX = event.evt.layerX;
  const clickY = event.evt.layerY;

  words.forEach((word: any) => {
    const topLeftX = word.coordinates[topLeftXPosition];
    const topLeftY = word.coordinates[topLeftYPosition];
    const bottomRightX = word.coordinates[bottomRightXPosition];
    const bottomRightY = word.coordinates[bottomRightYPosittion];

    if (topLeftX < clickX && clickX < bottomRightX && topLeftY < clickY && clickY < bottomRightY) {
      callback(word);
    }
  });
}
