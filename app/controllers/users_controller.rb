require 'sendgrid-ruby'
include SendGrid
require 'mail'
require 'rest-client'
require 'constantcontact'

class UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.valid?
      @user.save
      message_gary @user
      constant_contact
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

    # constant_contact
  end

  def constant_contact
    unless ENV['constant_api_key'].nil?
      @cc = ConstantContact::Api.new(ENV['constant_api_key'], "936ed46e-7474-4f50-9bec-945c6044545d" )
      # @cc = ConstantContact::Api.new("ucyx8razvbd6gffuwnsenzm6", "936ed46e-7474-4f50-9bec-945c6044545d" )
      contacts = @cc.get_contact_by_email(user_params[:email])

      if contacts.results.count > 0
        contact = contacts.results[0]
        contact.status = "ACTIVE";
      else
        contact = ConstantContact::Components::Contact.new
        contact.add_email(ConstantContact::Components::EmailAddress.new(user_params[:email]))
      end

      contact_list = '1053434830'
      list_to_add_to = ConstantContact::Components::ContactList.new
      list_to_add_to.id = contact_list
      contact.add_list(list_to_add_to)
      contact.first_name = user_params[:first_name]
      contact.last_name = user_params[:last_name]
      contact.company_name = user_params[:company_name]

      begin
        if contacts.results.count > 0
          @cc.update_contact(contact)
        else
          @cc.add_contact(contact)
        end
      rescue => e
        return e
      end
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :phone, 
      :user_address, :user_city, :user_state, :user_zip, :user_country,
      :company_name, :company_website, :company_address, :company_city, :company_state, :company_zip, :company_business_type)
  end
end
