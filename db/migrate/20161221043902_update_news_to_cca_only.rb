class UpdateNewsToCcaOnly < ActiveRecord::Migration
  def change
    add_column :news, :cca_only, :boolean, default: false
  end
end
