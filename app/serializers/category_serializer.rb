class CategorySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :books
end
