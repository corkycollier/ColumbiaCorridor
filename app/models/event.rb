class Event < ActiveRecord::Base
  belongs_to :user

  def safe_show
    self.attributes
  end
end
