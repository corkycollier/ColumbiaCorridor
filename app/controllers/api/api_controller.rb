require 'rest-client'
require 'constantcontact'

module Api
  class ApiController < ApplicationController
    before_action :require_admin!, except: :mail

    def company_names
      @companies = CompanyName.all.collect {|company| company.safe_show}
      render json: @companies
    end

    def mail
      message
      render json: {message: "message complete"}
    end



    private

    def message

        specs = {
          to: "randy@diamondeyedigital.com" ,
          content: "
          <div style='color:#262262;'>
            <div style='height:80px;background:url(http://res.cloudinary.com/djjldnjz7/image/upload/v1482226207/Untitled_alc9hg.png);'>
            </div>

            <h1>
              Add to: Mailing List
            </h1>

            <div>
              <p>
                First:
                  " + params[:message][:first] + "
              </p>

              <p>
                Last:
                  " + params[:message][:last] + "
              </p>

              <p>
                Email:
                <a href='mailto:" + params[:message][:email] + "'>
                  " + params[:message][:email] + "
                <a>
              </p>

              <p>
                Company:
                  " + params[:message][:company] + "
              </p>

              <p>
                Zip:
                  " + params[:message][:zip] + "
              </p>
            </div>

            <h4 style='margin-top:24px;'>
              <a href='http://www.cca.works' target='blank' style='color:#262262;'>
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
          "subject": "Add to: Mailing List"
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



      sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
      # response = sg.client.mail._('send').post(request_body: data)

      constant_contact

    end

    def constant_contact
      @cc = ConstantContact::Api.new(ENV['constant_api_key'], "936ed46e-7474-4f50-9bec-945c6044545d" )
      contact = ConstantContact::Components::Contact.new
      
      # The email address itself is a parameter of an EmailAddresses object, so you first make an EmailAddress object by passing your email variable, and pass that EmailAddress object into add_email.
      # Also, you should pass them through like this:
      # contact.add_email(variable)
      # rather than this:
      # contact.add_email variable
      contact.add_email(ConstantContact::Components::EmailAddress.new(message_params[:email]))

      # You will need to also include a list with your contact for it to be added to your list. Replace your_list_id_number_here with the ID of the list you want to add them to.
      contact_list = '2080238653'
      list_to_add_to = ConstantContact::Components::ContactList.new
      list_to_add_to.id = contact_list
      contact.add_list(list_to_add_to)
      contact.first_name = message_params[:first]
      contact.last_name = message_params[:last]
      contact.fax = message_params[:zip]
      contact.company_name = message_params[:company]

      # If you are still seeing a bad request error, you may need to convert your contact to json when you are submitting it, as shown on the next line.
      # @cc.add_contact(contact).to_json
      # Try adding the .to_json operator to your add_contact call if you are still seeing a bad request error.
      # This call should also pass your contact object through in parentheses.
      @cc.add_contact(contact)
    end

    def message_params
      params.require(:message).permit(:first, :last, :email, :company, :zip)
    end
  end
end
