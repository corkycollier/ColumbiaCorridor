require 'sendgrid-ruby'
include SendGrid
require 'mail'
require 'rest-client'
require 'constantcontact'

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
          <div style='height:80px;background:url(https://res.cloudinary.com/dtizwr3wv/image/upload/v1493670362/HEADERBKGRND_tspk7u_wiatci.png);'>

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
            <a href='http://columbiacorridor.org' target='blank' style='color:#262262;'>
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

    if ENV['sendgrid2']
      sg = SendGrid::API.new(api_key: ENV['sendgrid2'])
      response = sg.client.mail._('send').post(request_body: data)
    end

    constant_contact
  end

  def constant_contact
    if ENV['constant_api_key'].present?
      @cc = ConstantContact::Api.new(ENV['constant_api_key'], "936ed46e-7474-4f50-9bec-945c6044545d" )
      contact = ConstantContact::Components::Contact.new

      # The email address itself is a parameter of an EmailAddresses object, so you first make an EmailAddress object by passing your email variable, and pass that EmailAddress object into add_email.
      # Also, you should pass them through like this:
      # contact.add_email(variable)
      # rather than this:
      # contact.add_email variable
      contact.add_email(ConstantContact::Components::EmailAddress.new(user_params[:email]))

      # You will need to also include a list with your contact for it to be added to your list. Replace your_list_id_number_here with the ID of the list you want to add them to.
      contact_list = '1053434830'
      list_to_add_to = ConstantContact::Components::ContactList.new
      list_to_add_to.id = contact_list
      contact.add_list(list_to_add_to)
      contact.first_name = user_params[:first_name]
      contact.last_name = user_params[:last_name]
      contact.company_name = user_params[:company_name]

      # If you are still seeing a bad request error, you may need to convert your contact to json when you are submitting it, as shown on the next line.
      # @cc.add_contact(contact).to_json
      # Try adding the .to_json operator to your add_contact call if you are still seeing a bad request error.
      # This call should also pass your contact object through in parentheses.
      @cc.add_contact(contact)
    end
  end

  private

  def user_params
    params.require(:user).permit(User.new.attributes.collect{|key, value| key.to_sym}.concat([:password]))
  end
end
