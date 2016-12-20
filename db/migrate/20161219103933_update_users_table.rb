class UpdateUsersTable < ActiveRecord::Migration
  def change
    add_column :users, :username, :string, null: false
    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name, :string, null: false
    add_column :users, :phone, :string
    add_column :users, :user_address, :string
    add_column :users, :user_city, :string
    add_column :users, :user_state, :string
    add_column :users, :user_zip, :string
    add_column :users, :company_name, :string
    add_column :users, :company_address, :string
    add_column :users, :company_city, :string
    add_column :users, :company_state, :string
    add_column :users, :company_zip, :string
    add_column :users, :company_country, :string
    add_column :users, :company_business_type, :string
    add_column :users, :level, :string
  end
end
