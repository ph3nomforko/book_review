class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :content
      t.string :username
      t.belongs_to :book, null: false, foreign_key: true

      t.timestamps
    end
  end
end
