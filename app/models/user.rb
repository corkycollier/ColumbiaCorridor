class User < ActiveRecord::Base

  attr_reader :password

  validates :email, :session_token, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :email, uniqueness: true
  after_initialize :ensure_session_token

  def safe_show
    {
      id: self.id,
      email: self.email
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
