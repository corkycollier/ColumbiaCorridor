class AddInfoToEvent < ActiveRecord::Migration
  def change
    add_column :events, :custom, :text
  end
end
