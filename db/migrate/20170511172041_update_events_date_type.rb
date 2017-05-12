class UpdateEventsDateType < ActiveRecord::Migration
  def change
    change_column :events, :date, "DATE USING CAST(date AS DATE)"
  end
end
