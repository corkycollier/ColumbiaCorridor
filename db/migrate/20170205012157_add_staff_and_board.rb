class AddStaffAndBoard < ActiveRecord::Migration
  def change

    create_table "staffs", force: :cascade do |t|
      t.string   "title"
      t.string   "name"
      t.string   "email"
      t.string   "company"
      t.string   "website"
      t.string   "img"
      t.string   "bio"
      t.timestamps
    end

    create_table "boards", force: :cascade do |t|
      t.string   "title"
      t.string   "name"
      t.string   "email"
      t.string   "company"
      t.string   "website"
      t.string   "img"
      t.string   "bio"
      t.timestamps
    end
  end
end
