class ColumbiaMailer < ApplicationMailer

  def sample_email(user)
    mail(to: "samullman@gmail.com", subject: 'Sample Email', body: "")
  end

  def forgotten_email(user, new_password)
    @user = user
    @new_password = new_password
    mail(to: user.email, subject: 'Password Recovery')
  end
end
