# Lunch Buddies
> It's tough meeting new people at work.  Now there's an app for it.

With Lunch Buddies, you can add new employee names to a list and assign them to lunch groups. You can randomize the groups every lunch, so that your employees can always meet new people. You can select a preference for small, medium, or large groups.  Groups are always 3 - 5 people (unless you only have 1 - 2 people in your list, of course).  You can even delete names from the list!

## Requirements

Node version >= 6

## Installation

Clone repo:

```sh
git clone https://github.com/Shugardude/lunch-buddies.git
```

```sh
npm install
npm run start
```

## Testing

```sh
npm test
```

## Approach

  - I used a react app with localStorage for persistence. Names and size selection are stored.
  - Users can select if they want small(3), medium(4), or large(5) groups.  The algorithm will attempt to group people into the the selected group size, but some groups will end up being bigger or smaller depending on the number of employees in the list.
  - Shuffle button uses simple algorithm to sort the names randomly whenever pushed.
  - One input for entering names. Submit button will add a name if it is not already in the list, delete will remove a name if it is in the list.
  - Css is responsive, in case the app is ever used for mobile.

## To Do

  - Set up server and connect to a database.
  - Option to email results.
  - Would be cool to set up automation, where list is shuffled and emailed on a set schedule on the server, obviating the need for a ui, other than to add/remove users.
  - Make delete more robust by showing list of users that can be removed by clicking an X.  Maybe add the ability to filter the list to easily find a name.
  - Option to temporarily remove a name from the list, in the case that someone is out for the day, so that the groups can update accordingly.
  - Support N number of people per group, specified by user.
  - Drag and drop user names from one group to another, if user wants to cheat and put their friend into their group.
  - Add ability in UI to add multiple names at once.


## Contributing

1. Fork it (<https://github.com/Shugardude/lunch-buddies/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
