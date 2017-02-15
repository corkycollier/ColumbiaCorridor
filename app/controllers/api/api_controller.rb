module Api
  class ApiController < ApplicationController
    before_action :require_admin!, except: :mail

    def mail

      @oauth = ConstantContact::Auth::OAuth2.new(
      :api_key => ENV['constant_api_key'],
      :api_secret => ENV['constant_api_secret'],
      :redirect_url => 'https://www.cca.works/' # the URL given when registering your app with Mashery.
      )

      @error = params[:error]
      @user = params[:username]
      @code = params[:code]

      if @code.present?
        response = @oauth.get_access_token(@code)
        if response.present?
          token = response['access_token']
          cc = ConstantContact::Api.new(ENV['constant_api_key'],, token)
          @contacts = cc.get_contacts()
        end
      else
        # if not code param is provided redirect into the OAuth flow
        redirect_to @oauth.get_authorization_url and return
      end


      fail
    end
  end
end
