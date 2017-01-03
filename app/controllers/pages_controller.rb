class PagesController < ApplicationController
  def home
    @data = app_data
  end


  def page
    @page = params[:page]
  end
end
