// Searching for data in mongo db

show dbs 
use harryKart
show collections


// This query will return all the objects with rating equal to 3.5

db.items.find()//for show data in your collection
db.items.find({rating: 3.5})//first filter and then search approprite match
db.items.find({rating: {$gte: 3.5}})//use operators using "$" symbol for filters
db.items.find({rating: {$gt: 3.5}})
// And operator
db.items.find({ rating: {$gt: 3.5}, price:{$gt: 4000}})

db.items.find({rating: {$lt: 3.5}, price:{$gt: 114000}})

// OR operator
db.items.find({ 
    $or:[{rating: {$lt: 3.5}}, {price:{$gt: 114000}}] 
})

db.items.find({ $or:[ {rating:{$gt: 3.5}}, {rating: 1}] })
