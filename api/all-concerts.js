const allConcerts = [
  {
    id: 1001,
    name: 'Ricky Martin',
    level: 'vip'
  },
  {
    id: 1003,
    name: 'AC/DC',
    level: 'vip'
  },
  {
    id: 5009,
    name: 'Taylor Swift',
    level: 'supervip'
  },
  {
    id: 5009,
    name: 'Shankar Mahadevan',
    level: 'incountry'
  },
  {
    id: 9800,
    name: 'Ricky Martin',
    level: 'vip'
  }
];

export default () => {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve(allConcerts);
    }, 3000);
  })
}
