class AddColumnToUsers < ActiveRecord::Migration
  def change
    add_column :users, :user_country, :string
  end
end
