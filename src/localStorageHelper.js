// import dummydata from './dummydata.js'
const key = 'names';

// localStorage.setItem( key, JSON.stringify(dummydata) );

export const setNames = (names) => {
  localStorage.setItem( key, JSON.stringify(names) );
  return names;
}

// retrieves names from local storage and parses the data
export const getNames = () => {
  const data = localStorage.getItem( key );
  let parsedData;
  try {
    parsedData = JSON.parse(data);
  } catch(e){
    parsedData = [];
  }
  return parsedData;
}

export const shuffleNames = () => {
	return setNames(shuffle(getNames()));
}

// randomly shuffle and array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};