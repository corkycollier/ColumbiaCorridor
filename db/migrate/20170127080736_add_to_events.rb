class AddToEvents < ActiveRecord::Migration
  def change
    add_column :events, :paypal, :text
  end
end
