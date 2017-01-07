class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

  protect_from_forgery with: :exception
  helper_method :current_user, :sign_in!, :sign_out!, :require_signed_in!, :app_data

  private

  def current_user
    return nil unless session[:token]
    @current_user ||= User.find_by_session_token(session[:token])
    @current_user.safe_show if @current_user
  end

  def signed_in?
    !!current_user
  end

  def sign_in!(user)
    @current_user = user
    session[:token] = user.reset_token!
  end

  def sign_out!
    current_user.try(:reset_token!)
    session[:token] = nil
  end

  def require_signed_in!
    redirect_to root_url unless signed_in?
  end

  def app_data
    {
      user: current_user ,
      members: User.all.collect{ |user| user.safe_show } ,
      news: New.all.collect{ |thing| thing.safe_show } ,
      events: Event.all.collect{ |event| event.safe_show } ,
      ads: Ad.all.collect{ |ad| ad.safe_show } ,
    }
  end
end
