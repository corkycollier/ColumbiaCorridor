class CreateNews < ActiveRecord::Migration
  def change
    create_table :news do |t|
      t.integer :user_id, null: false
      t.string :title
      t.text :body
      t.timestamps null: false
    end
  end
end
