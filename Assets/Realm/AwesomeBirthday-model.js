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