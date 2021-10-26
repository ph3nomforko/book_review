class Comment < ApplicationRecord
  belongs_to :book
  validates :content, :username, :book_id, presence: true
  validates :username, uniqueness: true
end
