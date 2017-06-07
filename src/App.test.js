import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { splitGroups } from './split.js'
import { shuffle } from './localStorageHelper.js'
import names from './dummydata.js'

const split1 = splitGroups(3, names);
const split2 = splitGroups(4, names);
const split3 = splitGroups(5, names);

function checkGroupSizeCorrect(arr){
	for (let i = 0; i < arr.length; i++){
		if (arr[i].length < 3 || arr[i].length > 5) return false;
	}
	return true;
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('names if correct length for testing', () => {
	expect(names.length).toBe(100);
});

test('splitting names into correct amount of groups', () => {
  expect(split1.length).toBe(33);
  expect(split2.length).toBe(25);
  expect(split3.length).toBe(20);
});

test('groups are right size', () => {
  expect(split1[10].length).toBe(3);
  expect(split2[10].length).toBe(4);
  expect(split3[10].length).toBe(5);
});

test('no group is less than 3 or more than 5', () => {
  expect(checkGroupSizeCorrect(split1)).toBeTruthy();
  expect(checkGroupSizeCorrect(split2)).toBeTruthy();
  expect(checkGroupSizeCorrect(split3)).toBeTruthy();
});

test('array is shuffled correctly', () => {
	expect(shuffle(names).length).toBe(names.length);
	expect(shuffle(names).join()).not.toBe(names.join())
})



