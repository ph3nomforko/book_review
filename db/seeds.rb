# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.destroy_all
Book.destroy_all

fantasy = Category.create(name:"Fantasy")
sci_fi = Category.create(name:"Science Fiction")
history = Category.create(name:"History")

enders_game = Book.create(title:"Enders Game", author:"Orson Scott Card", description:"Kid soldier kills aliens", image_url:"https://en.wikipedia.org/wiki/Ender%27s_Game#/media/File:Ender's_game_cover_ISBN_0312932081.jpg", year_published: 1985, category_id:sci_fi.id)

fellowship = Book.create(title:"Fellowship of the Ring", author:"J.R.R. Tolkien", description:"Hobbit is given impossible quest", image_url:"https://en.wikipedia.org/wiki/The_Fellowship_of_the_Ring#/media/File:The_Fellowship_of_the_Ring_cover.gif", year_published: 1954, category_id:fantasy.id)

spqr = Book.create(title:"SPQR", author:"Mary Beard", description:"Historical account of the founding of Rome.", image_url:"https://en.wikipedia.org/wiki/SPQR:_A_History_of_Ancient_Rome#/media/File:SPQR_book.jpg", year_published: 2015, category_id:history.id)

the_hobbit = Book.create(title:"The Hobbit", author: "J.R.R. Tolkien", description:"Different hobbit is given different impossible quest (but with a dragon)", image_url:"https://en.wikipedia.org/wiki/The_Hobbit#/media/File:TheHobbit_FirstEdition.jpg", year_published:1937, category_id:fantasy.id)