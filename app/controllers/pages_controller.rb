class PagesController < ApplicationController
  def home
    @app = {
      current_user: current_user ,
      members: User.all.collect{ |user| user.safe_show2 }  ,
      news: New.all.collect{ |thing| thing.safe_show }  ,
      events: Event.all.collect{ |event| event.safe_show } ,
    }
  end
end
