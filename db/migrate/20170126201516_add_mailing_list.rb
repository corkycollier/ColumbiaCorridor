class AddMailingList < ActiveRecord::Migration
  def change
    create_table :mailings do |t|
      t.string :email, null: false
      t.timestamps null: false
    end
  end
end
