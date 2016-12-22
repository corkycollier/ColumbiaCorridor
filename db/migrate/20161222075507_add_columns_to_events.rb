class AddColumnsToEvents < ActiveRecord::Migration
  def change
    add_column :events, :title, :string
    add_column :events, :date, :string
    add_column :events, :time, :string
    add_column :events, :location, :string
    add_column :events, :body, :text
    add_column :events, :event_type, :string
  end
end
