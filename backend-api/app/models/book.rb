class Book < ApplicationRecord
    belongs_to :category
    has_many :comments
    validates :title, :author, :description, :image_url, :category_id, presence: true
end
