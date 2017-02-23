# == Schema Information
#
# Table name: events
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  title      :string
#  date       :string
#  time       :string
#  location   :string
#  body       :text
#  event_type :string
#  allDay     :boolean          default(FALSE)
#  start      :string
#  end        :string
#  url        :string
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
    Event.all.order(date: :asc).collect do |event|
      today = Date.today
      event_array = event.date.split("-")
      event_date = Date.new(event_array[0].to_i,event_array[1].to_i, event_array[2].to_i )
      if today < event_date
        event
      else
        next
      end
    end.compact
  end

end
