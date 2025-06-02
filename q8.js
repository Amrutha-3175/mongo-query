db.employees.createIndex({email:1})
db.employees.getIndexes()
 db.employees.dropIndex("email_1")
 db.employees.find({email:'johnn@gmail.com'}).explain("executionStats")