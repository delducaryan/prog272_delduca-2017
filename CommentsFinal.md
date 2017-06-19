# Final

Review of the Final Projects.

## General Comments

You have had a good quarter overall. You managed to assimilate all the core subjects covered in this course including:

- Linux basics
- Git and branches
- Parsing and working with JSON data stored in arrays and objects.
- React
- React Native
- Test Driven Development
- Rest calls to a server (**CongressAddress** and/or **CongressNative** talks to **CongressServer**)
- Database connectivity with Mongo DB

## Core Programs

- CongressAddress runs
- CongressServer runs
- CongressNative runs
  - And actually works! I get Lamar back from the database.
- Heroku runs

## Data

- CongressAddress does not talk to CongressServer
  - Put this line in CongressAddress package.json: "proxy": "http://localhost:30025",
- CongressServer does not talk to MongoDb
- Congress Address looks good on the phone.
- LocalStorage does not quite work.
  - Do like this in DataLoader: fetch('address-list.json')
  - Or if you want the MongoDB data, start the process with this: fetch('/all-data')
  - The /all-data code won't work without the proxy code mentioned above
  - And without more code in **routes/index.js**.
- Edit Data
  - Does not work very well, though the component does load smoothly

I cannot clear localStorage, reload from the database, and update the database from file.

## Heroku

This started loading, but then blew up with several exceptions before the interface appeared.

## React Native

It loads quickly and easily. It calls the server cleanly. But the server does not return real data from the database. But overall, this is strong. Good work.

## Testing

I know you had many more tests passing earlier, but this is what I see in the final.

```
Test Suites: 4 failed, 4 total
Tests:       42 failed, 3 passed, 45 total
```

## Other

fyi

My **OnNameChange**, for handling edits, ended up looking like this:

```javascript
onNameChange(event) {
    logger.log('on name change');
    const address = getByIndex(this.state.addressIndex);
    switch (event.target.id) {
        case 'elfFN':
            address.firstName = event.target.value;
            break;
        case 'elfLN':
            address.lastName = event.target.value;
            break;
        default:
            address.zip = 'OH NO BAD CASE';
    }
    saveByIndex(address, this.state.addressIndex);
    this.setState({
        address: address
    });
};
```

The code shown above is incomplete in that it only handles first and last names, but it does handle the first and last names correctly.

This code from **DataMaven** is the client side code that allowed me to save the changes to the server:

```javascript
dbAddressSave() {
    const address = getByIndex(this.state.addressIndex);
    const url = '/update' +
        '?id=' + address._id +
        '&address=' + JSON.stringify(address);
    fetch(url)
        .then((data) => data.json())
        .then(function(data) {
            logger.log(JSON.stringify(data, null, 4));
        }).catch(function(err) {
            const message = 'Either could not insert ' +
                'data or could not display ' +
                'results after inserting data\n';
            alert(message + err);
            logger.log(err);
        });
}
```

## Summary

```
Assignments: 95.46
Midterm: 93
Final: 86
Participation: 100
```

That's an A-. Just barely. You did well up until the final, which was not very good....
