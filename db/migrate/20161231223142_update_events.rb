class UpdateEvents < ActiveRecord::Migration
  def change
    add_column :events, :allDay, :boolean, default: false
    add_column :events, :start, :string
    add_column :events, :end, :string
    add_column :events, :url, :string
  end
end
