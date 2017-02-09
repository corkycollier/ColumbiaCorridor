class AddCategoriesToArchives < ActiveRecord::Migration
  def change
    add_column :archives, :category, :string
  end
end
