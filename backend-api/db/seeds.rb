# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.destroy_all
Book.destroy_all
Comment.destroy_all

fantasy = Category.create(name:"Fantasy")
sci_fi = Category.create(name:"Science Fiction")
history = Category.create(name:"History")

enders_game = Book.create(title:"Enders Game", author:"Orson Scott Card", description:"Kid soldier kills aliens", image_url:"https://static.wikia.nocookie.net/ansible/images/e/ea/Ender%27sGameCoverClassic.jpg/revision/latest/scale-to-width-down/480?cb=20210904211652", year_published: 1985, category_id:sci_fi.id)
fellowship = Book.create(title:"Fellowship of the Ring", author:"J.R.R. Tolkien", description:"Hobbit is given impossible quest", image_url:"https://cdn8.openculture.com/wp-content/uploads/2013/02/The-Fellowship-Of-The-Ring-Book-Cover-by-JRR-Tolkien_1-480.jpg", year_published: 1954, category_id:fantasy.id)
spqr = Book.create(title:"SPQR", author:"Mary Beard", description:"Historical account of the founding of Rome.", image_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/SPQR_A_History_of_Ancient_Rome.jpg/397px-SPQR_A_History_of_Ancient_Rome.jpg", year_published: 2015, category_id:history.id)
the_hobbit = Book.create(title:"The Hobbit", author: "J.R.R. Tolkien", description:"Different hobbit is given different impossible quest (but with a dragon)", image_url:"https://cdn.pastemagazine.com/www/articles/hobbit300.jpg", year_published:1937, category_id:fantasy.id)

first_comment = Comment.create(content:"It's my favorite book!", username:"oscard", book_id:enders_game.id)