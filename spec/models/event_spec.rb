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

require 'rails_helper'

RSpec.describe Event, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
