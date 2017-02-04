class ColumbiaMailer < ApplicationMailer

  def sample_email(user)
    mail(to: "samullman@gmail.com", subject: 'Sample Email', body: "poop")
  end
end
