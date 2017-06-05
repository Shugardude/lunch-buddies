const key = 'users';

export const addUser = () => {
  localStorage.setItem( key, JSON.stringify(['test1', 'test2']) );
}

export const getUsers = () => {
  const data = localStorage.getItem( key );
  let parsedData;
  try {
    parsedData = JSON.parse(data);
  } catch(e){
    parsedData = [];
  }
  return parsedData;
}