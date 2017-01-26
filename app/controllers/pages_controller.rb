class PagesController < ApplicationController
  def home
    @data = app_data
  end


  def page
    @page = params[:page]
    @data = app_data
  end

  def mailings
    @mailings = Mailing.all
    render json: @mailings.collect {|mailing| mailing.safe_show }
  end

  def mailing_list
      Mailing.new
    # ConstantContact::Util::Config.configure do |config|
    #   config[:auth][:api_key] = 'your-access-key'
    #   config[:auth][:api_secret] = 'your-access-secret'
    #   config[:auth][:redirect_uri] = 'https://example.com/auth/constantcontact'
    # end
  end
end
