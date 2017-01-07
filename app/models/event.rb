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
end
