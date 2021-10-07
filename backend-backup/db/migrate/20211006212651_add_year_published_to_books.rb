class AddYearPublishedToBooks < ActiveRecord::Migration[6.1]
  def change
    add_column :books, :year_published, :integer
  end
end
