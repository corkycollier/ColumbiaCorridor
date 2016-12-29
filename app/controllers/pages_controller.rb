class PagesController < ApplicationController
  def home
    @app_data = {
      user: current_user ,
      members: User.all.collect{ |user| user.safe_show } ,
      news: New.all.collect{ |thing| thing.safe_show } ,
      events: Event.all.collect{ |event| event.safe_show } ,
    }
  end


  def page
    @page = params[:page]
  end
end
