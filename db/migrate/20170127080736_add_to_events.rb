class AddToEvents < ActiveRecord::Migration
  def change
    add_column :events, :paypal, :string
  end
end
