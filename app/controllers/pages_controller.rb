class PagesController < ApplicationController
  def home
    @app_data = app_data
  end


  def page
    @page = params[:page]
  end
end
