class New < ActiveRecord::Base
  belongs_to :user

  def safe_show
    attributes = self.attributes
    attributes['author'] = (self.user.first_name + " " + self.user.last_name) || self.user.username
    attributes
  end
end
