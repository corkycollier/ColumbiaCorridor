class PagesController < ApplicationController
  def home
    @data = app_data
  end


  def page
    @page = params[:page]
    @data = app_data
  end
end
