class CreateArchivesTable < ActiveRecord::Migration
  def change
    create_table :archives do |t|
      t.string :title
      t.string :doc_type
      t.string :url
      t.timestamps
    end
  end
end
