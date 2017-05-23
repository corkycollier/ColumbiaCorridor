# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  title       :string
#  date        :date
#  time        :string
#  location    :string
#  body        :text
#  event_type  :string
#  allDay      :boolean          default(FALSE)
#  start       :string
#  end         :string
#  url         :string
#  paypal      :text
#  custom      :text
#  basic_title :string
#

class Event < ActiveRecord::Base
  belongs_to :user

  def safe_show
    self.attributes
  end


  def self.collect_locations
    Event.all.collect do |event|
      event.location
    end.uniq
  end

  def self.collect_all
    Event.all.order(date: :desc).collect do |event|
      event.safe_show
    end
  end

  def self.upcoming
    Event.where("date > ?", Date.today).order(date: :asc)
  end

end
