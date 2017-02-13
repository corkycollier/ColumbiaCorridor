require 'sendgrid-ruby'
include SendGrid

require 'mail'


class UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    # send_simple_message @user

    if @user.save
      sign_in!(@user)
      redirect_to root_url
    else
      render json: @user.errors.full_messages
    end
  end


  def send_simple_message user
    string = '{
    "personalizations": [
      {
        "to": [
          {
            "email": "mking@columbiacorridor.org"
          }
        ],
        "cc": [
          {
            "email": "samullman@gmail.com"
          }
        ],
        "subject": "New Member Sign Up!"
      }
    ],
    "from": {
      "email": "samullman@gmail.com"
    },
    "content": [
      {
        "type": "text/plain",
        "value": "New user: ' + user.email + '"
      }
    ],
    "template" : "CCA"
    }'

    data = JSON.parse(string)
    sg = SendGrid::API.new(api_key: ENV['sendgrid'])
    response = sg.client.mail._('send').post(request_body: data)
  end


  private

  def user_params
    params.require(:user).permit(User.new.attributes.collect{|key, value| key.to_sym}.concat([:password]))
  end
end
