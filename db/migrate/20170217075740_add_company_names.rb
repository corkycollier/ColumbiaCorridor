class AddCompanyNames < ActiveRecord::Migration
  def change
    create_table :company_names do |t|
      t.integer :website
      t.string :name
      t.timestamps null: false
    end
  end
end
