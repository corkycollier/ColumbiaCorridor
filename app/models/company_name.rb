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

class CompanyName < ActiveRecord::Base

  def safe_show
    attributes = self.attributes
  end
end
