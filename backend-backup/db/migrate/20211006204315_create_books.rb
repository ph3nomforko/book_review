class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.text :description
      t.string :image_url
      t.belongs_to :category, foreign_key: true

      t.timestamps
    end
  end
end
