exports.BirthdayGuest = {
  name: 'BirthdayGuest',
  primaryKey: 'email',
  properties: {
    email: 'string',
    name: 'string',
    mobile: 'string',
    altmobile: 'string?',
    altemail: 'string?',
    no_head: 'int?',
    seniors: 'int?',
    cars: 'string?',
    calendarBlocked: 'bool?',
    joining: 'bool'
  }
}



Realm.open({
  schema: [AwesomeBirthday]
})
.then(realm => 
    {
     let carOwners = realm.objects('GST');
     Alert.alert(carOwners);

      realm.write(() => {
        realm.create('GST', {name: 'Ranjan De', email: 'ranjan.de@gmail.com', mobile: 9874428418, no_head: 3, cars: 'wb06h6805', altmobile: 9830028418});
       });
     this.setState({realm});
  }
);    
    
  }