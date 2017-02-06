class AddUsersRole < ActiveRecord::Migration
  def change
    add_column :users, :role, :string
    remove_column :users, :level, :string
  end
end
