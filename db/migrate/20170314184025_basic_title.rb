class BasicTitle < ActiveRecord::Migration
  def change
    add_column :events, :basic_title, :string
  end
end
