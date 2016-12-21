class New < ActiveRecord::Base
  belongs_to :user

  def safe_show
    {
      id: self.id ,
      user_id: self.user_id ,
      title: self.title ,
      body: self.body ,
      cca_only: self.cca_only ,
    }
  end
end
