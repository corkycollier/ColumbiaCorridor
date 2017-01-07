class CreateAds < ActiveRecord::Migration
  def change
    create_table :ads do |t|
      t.string :image_url
      t.string :link
      t.timestamps null: false
    end
  end
end
