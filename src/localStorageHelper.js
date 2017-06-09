// ran into an issue in the tests where localStorage was not defined
// import localStorageMock from './localStorageMock.js'
// if (!localStorage) localStorage = localStorageMock;

// import dummydata from './dummydata.js'
const _names = 'names'
const _size = 'size'

// localStorage.setItem( _names, JSON.stringify(dummydata) );
// localStorage.removeItem( _names );

export const setNames = (names) => {
  localStorage.setItem( _names, JSON.stringify(names) );
  return names;
};

export const setSize = (size) => {
  localStorage.setItem( _size, JSON.stringify(size) );
  return size
};

// retrieves names from local storage and parses the data
export const getNames = () => {
  const data = localStorage.getItem( _names ) || [];
  let parsedData;
  try {
    parsedData = JSON.parse(data);
  } catch(e){
    parsedData = [];
  }
  return parsedData;
}

export const getSize = () => {
  // default group size is large
	const data = localStorage.getItem( _size ) || '5';
	let parsedData;
  try {
    parsedData = parseInt(data, 0);
  } catch(e){
    parsedData = 5;
  }
  return parsedData;
}

export const shuffleNames = () => {
	return setNames(shuffle(getNames()));
}

// randomly shuffle and array
export const shuffle = (array) => {
  array = array.slice();
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


