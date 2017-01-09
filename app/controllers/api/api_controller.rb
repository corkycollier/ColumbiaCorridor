module Api
  class ApiController < ApplicationController
    before_action :require_signed_in!, only: []

    def mailing_list
      return;

      ConstantContact::Util::Config.configure do |config|
        config[:auth][:api_key] = 'your-access-key'
        config[:auth][:api_secret] = 'your-access-secret'
        config[:auth][:redirect_uri] = 'https://example.com/auth/constantcontact'
      end
    end

    def save
      
    end
  end
end
