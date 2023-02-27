export const shuffle = (originalArray) => {
  const array = [...originalArray];
  let currentIndex = array.length;
  let temporaryArray;
  let randomIndex;
  while(0 !== currentIndex){
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1
    temporaryArray = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryArray;
  }
  return array;
}