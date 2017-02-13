require 'sendgrid-ruby'
include SendGrid
require 'mail'


class UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      message_gary @user
      sign_in!(@user)
      redirect_to root_url
    else
      render json: @user.errors.full_messages
    end
  end

  def message_gary user
      specs = {
        to: "mking@columbiacorridor.org" ,
        content: "
        <div style='color:#262262;'>
          <div style='height:80px;background:url(http://res.cloudinary.com/djjldnjz7/image/upload/v1482226207/Untitled_alc9hg.png);'>

          </div>

          <h1>
            New User Sign Up
          </h1>

          <div>
            <p>
              Name: " + user.first_name + " " + user.last_name + "
            </p>
            <p>
              Email:
              <a href='mailto:" + user.email + "'>
                " + user.email + "
              <a>
            </p>
          </div>

          <h4 style='margin-top:24px;'>
            <a href='http://columbiacorridor.com' target='blank' style='color:#262262;'>
              Columbia Corridor Association
            <a>
          </h4>
        </div>
        "
      }

      message1 specs
    end

  def message1 message
    string = '{
    "personalizations": [
      {
        "to": [
          {
            "email": "' + message[:to] + '"
          }
        ],
        "subject": "New User Registered"
      }
    ],
    "from": {
      "email": "admin@nolidev.co"
    },
    "content": [
      {
        "type": "text/html",
        "value": "' + message[:content].split("\n").join(" ") + '"
      }
    ],
    "template" : "CCA"
    }'

    data = JSON.parse(string)

    sg = SendGrid::API.new(api_key: ENV['sendgrid2'])
    response = sg.client.mail._('send').post(request_body: data)

  end

  private

  def user_params
    params.require(:user).permit(User.new.attributes.collect{|key, value| key.to_sym}.concat([:password]))
  end
end
