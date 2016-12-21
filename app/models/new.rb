class New < ActiveRecord::Base
  belongs_to :user

  def safe_show
    {
      id: self.id ,
      user_id: self.user_id ,
      title: self.title ,
      body: self.body ,
      cca_only: self.cca_only ,
      created_at: self.created_at ,
      author: self.user.first_name + " " + self.user.last_name ,
      author_id: self.user.id ,
    }
  end
end
