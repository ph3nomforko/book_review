class BookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :author, :description, :year_published, :image_url, :category_id, :category
end
