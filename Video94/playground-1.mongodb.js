// Select the database to use.
use('SigmaPlayground');

// Insert a few documents into the sales collection.
db.getCollection('sales').insertMany([
  { "name": "Rohan", "name2": "Mohan", "name3": "Soham" },
  { "name": "Aarav", "name2": "Vihaan", "name3": "Kabir" },
  { "name": "Ishaan", "name2": "Advait", "name3": "Reyansh" },
  { "name": "Arjun", "name2": "Dev", "name3": "Om" },
  { "name": "Karan", "name2": "Raghav", "name3": "Samarth" },
  { "name": "Atharv", "name2": "Vivaan", "name3": "Pranav" },
  { "name": "Aditya", "name2": "Siddharth", "name3": "Hriday" },
  { "name": "Raj", "name2": "Aryan", "name3": "Daksh" },
  { "name": "Nirvaan", "name2": "Yash", "name3": "Shivansh" },
  { "name": "Harsh", "name2": "Tanishq", "name3": "Krishna" }
]
);

console.log('Done inserting data')
 