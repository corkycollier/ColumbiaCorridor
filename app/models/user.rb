# == Schema Information
#
# Table name: users
#
#  id                    :integer          not null, primary key
#  email                 :string           not null
#  password_digest       :string           not null
#  session_token         :string           not null
#  created_at            :datetime
#  updated_at            :datetime
#  username              :string           not null
#  first_name            :string           not null
#  last_name             :string           not null
#  phone                 :string
#  user_address          :string
#  user_city             :string
#  user_state            :string
#  user_zip              :string
#  company_name          :string
#  company_address       :string
#  company_city          :string
#  company_state         :string
#  company_zip           :string
#  company_country       :string
#  company_business_type :string
#  level                 :string
#  user_country          :string
#

class User < ActiveRecord::Base

  attr_reader :password

  validates :email, :session_token, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :email, uniqueness: true
  after_initialize :ensure_session_token
  has_many :news
  has_many :events

  def safe_show
    attributes = self.attributes
    attributes.delete('password_digest')
    attributes.delete('session_token')
    attributes['phone'] = attributes['phone'].to_s.phony_formatted(normalize: :US)
    attributes
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


  def self.collect_all
    users = User.all.reorder(company_name: :asc, last_name: :asc, first_name: :asc, email: :asc)
    users.collect{ |user| user.safe_show }
  end
end
