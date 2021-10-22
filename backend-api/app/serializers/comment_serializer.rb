class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :username, :book, :book_id
end
