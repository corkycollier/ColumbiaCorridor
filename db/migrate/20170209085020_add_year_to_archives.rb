class AddYearToArchives < ActiveRecord::Migration
  def change
    add_column :archives, :year, :string
  end
end
