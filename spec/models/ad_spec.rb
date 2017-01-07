# == Schema Information
#
# Table name: ads
#
#  id         :integer          not null, primary key
#  image_url  :string
#  link       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Ad, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
