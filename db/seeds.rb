# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create({
  # username: "webmaster" ,
  email: "admin@mail.com" ,
  role: "Admin" ,
  phone: "503503053" ,
  password: "password" ,
  first_name: "first" ,
  last_name: "last" ,
  user_address: "1234 NE North" ,
  user_city: "San Antonio" ,
  user_state: "Texas" ,
  user_zip: "98721" ,
  company_name: "miomiomio milo" ,
  company_address: "23234 NORTH AVE" ,
  company_city: "Hood River" ,
  company_state: "OR" ,
  company_zip: "91822" ,
  company_country: "US" ,
  company_business_type: "11" ,
});


New.create({
  user_id: 1 ,
  title: "This is news" ,
  body: Faker::Lorem.paragraph(5) ,
})

New.create({
  user_id: 1 ,
  title: "This is news 2" ,
  body: Faker::Lorem.paragraph(5) ,
})

New.create({
  user_id: 1 ,
  title: "This is news 3" ,
  body: Faker::Lorem.paragraph(5) ,
})
