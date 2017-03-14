class BasicTitleNews < ActiveRecord::Migration
  def change
    add_column :news, :basic_title, :string
  end
end
