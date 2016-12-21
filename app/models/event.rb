class Event < ActiveRecord::Base
  belongs_to :user

  def safe_show
    attributes = self.attributes
    attributes['author'] = self.username
    attributes
  end
end
