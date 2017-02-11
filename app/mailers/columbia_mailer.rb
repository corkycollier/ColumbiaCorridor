class ColumbiaMailer < ApplicationMailer

  def sample_email(user)
    mail(to: "samullman@gmail.com", subject: 'Sample Email', body: "")
  end

  def forgotten_email(user)
    @user = user
    mail(to: user.email, subject: 'Password Recovery')
  end
end
