class PagesController < ApplicationController
  def home
    @data = app_data
  end

  def sign_in
  end

  def sign_up
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
    @mail = Mailing.new(email: params[:email])
    if @mail.save
      render json: {success: "Success"}
    else
      render json: @mail.errors.full_messages
    end
  end


end
