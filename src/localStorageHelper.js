const key = 'names';

export const setNames = (names) => {
  localStorage.setItem( key, JSON.stringify(names) );
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