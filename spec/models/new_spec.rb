# == Schema Information
#
# Table name: news
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  title      :string
#  body       :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  cca_only   :boolean          default(FALSE)
#

require 'rails_helper'

RSpec.describe New, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
