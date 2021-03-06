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

class New < ActiveRecord::Base
  belongs_to :user

  def safe_show
    attributes = self.attributes

    if self.user
      attributes['author'] = self.user.first_name + " " + self.user.last_name
      attributes['role'] = self.user.role
    else
      attributes['author'] =  "CCA Member"
    end

    attributes
  end


  def self.collect_all
    New.all.order(created_at: :desc).collect{ |thing| thing.safe_show } 
  end
end
