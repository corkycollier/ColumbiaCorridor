require 'rest-client'

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
          to: "mking@columbiacorridor.org" ,
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

      sg = SendGrid::API.new(api_key: ENV['sendgrid2'])
      # response = sg.client.mail._('send').post(request_body: data)

      base_url = "https://api.constantcontact.com/v2"

      
      @cc = ConstantContact::Api.new(ENV['constant_api_key'], "936ed46e-7474-4f50-9bec-945c6044545d" )

      fail

      
      email = {
        email_addresses: [ message_params[:email] ]
      }

      @cc.add_contact email
    end

    def message_params
      params.require(:message).permit(:first, :last, :email, :company, :zip)
    end
  end
end
