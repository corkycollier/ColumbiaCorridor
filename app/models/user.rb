class User < ActiveRecord::Base

  attr_reader :password

  validates :email, :session_token, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :email, uniqueness: true
  after_initialize :ensure_session_token
  has_many :news

  def schema

  end

  def safe_show
    {
      id: self.id ,
      username: self.username ,
      email: self.email ,
      phone: self.phone ,
      password: self.password ,
      first_name: self.first_name ,
      last_name: self.last_name ,
      user_address: self.user_address ,
      user_city: self.user_city ,
      user_state: self.user_state ,
      user_zip: self.user_zip ,
      company_name: self.company_name ,
      company_address: self.company_address ,
      company_city: self.company_city ,
      company_state: self.company_state ,
      company_zip: self.company_zip ,
      company_country: self.company_country ,
      company_business_type: self.company_business_type ,
      members: User.all.collect{ |user| user.safe_show2 } ,
      events: Event.all.collect{ |event| event.safe_show } ,
      news: New.all.collect{ |thing| thing.safe_show}.reverse ,
    }
  end

  def safe_show2
    {
      id: self.id ,
      username: self.username ,
      email: self.email ,
      phone: self.phone ,
      password: self.password ,
      first_name: self.first_name ,
      last_name: self.last_name ,
      user_address: self.user_address ,
      user_city: self.user_city ,
      user_state: self.user_state ,
      user_zip: self.user_zip ,
      company_name: self.company_name ,
      company_address: self.company_address ,
      company_city: self.company_city ,
      company_state: self.company_state ,
      company_zip: self.company_zip ,
      company_country: self.company_country ,
      company_business_type: self.company_business_type ,
    }
  end

  def self.find_by_credentials(user_params)
    user = User.find_by_email(user_params[:email])
    user.try(:is_password?, user_params[:password]) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
