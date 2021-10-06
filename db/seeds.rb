# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
fantasy = Category.create(name:"Fantasy")
sci_fi = Category.create(name:"Science Fiction")
history = Category.create(name:"History")

enders_game = Book.create(title:"Enders Game", author:"Orson Scott Card", description:"Kid soldier kills aliens", category_id:sci_fi.id)
fellowship = Book.create(title:"Fellowship of the Ring", author:"J.R.R. Tolkien", description:"Hobbit is given impossible quest", category_id:fantasy.id)
spqr = Book.create(title:"SPQR", author:"Mary Beard", description:"Historical account of the founding of Rome.", category_id:history.id)