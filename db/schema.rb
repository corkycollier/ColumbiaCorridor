# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170222011126) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "ads", force: :cascade do |t|
    t.string   "image_url"
    t.string   "link"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "name"
  end

  create_table "archives", force: :cascade do |t|
    t.string   "title"
    t.string   "doc_type"
    t.string   "url"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "category"
    t.string   "year"
  end

  create_table "boards", force: :cascade do |t|
    t.string   "title"
    t.string   "name"
    t.string   "email"
    t.string   "company"
    t.string   "website"
    t.string   "img"
    t.string   "bio"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "company_names", force: :cascade do |t|
    t.integer  "website"
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "events", force: :cascade do |t|
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.string   "title"
    t.string   "date"
    t.string   "time"
    t.string   "location"
    t.text     "body"
    t.string   "event_type"
    t.boolean  "allDay",     default: false
    t.string   "start"
    t.string   "end"
    t.string   "url"
    t.text     "paypal"
    t.text     "custom"
  end

  create_table "mailings", force: :cascade do |t|
    t.string   "email",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "news", force: :cascade do |t|
    t.integer  "user_id",                    null: false
    t.string   "title"
    t.text     "body"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.boolean  "cca_only",   default: false
  end

  create_table "staffs", force: :cascade do |t|
    t.string   "title"
    t.string   "name"
    t.string   "email"
    t.string   "company"
    t.string   "website"
    t.string   "img"
    t.string   "bio"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                                 null: false
    t.string   "password_digest",                       null: false
    t.string   "session_token",                         null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "first_name",                            null: false
    t.string   "last_name",                             null: false
    t.string   "phone"
    t.string   "user_address"
    t.string   "user_city"
    t.string   "user_state"
    t.string   "user_zip"
    t.string   "company_name"
    t.string   "company_address"
    t.string   "company_city"
    t.string   "company_state"
    t.string   "company_zip"
    t.string   "company_country"
    t.string   "company_business_type"
    t.string   "user_country"
    t.string   "image_url"
    t.string   "company_website"
    t.boolean  "private",               default: false
    t.string   "role"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree

end
