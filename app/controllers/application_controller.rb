class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

  protect_from_forgery with: :exception
  helper_method :current_user, :sign_in!, :sign_out!, :require_signed_in!, :app_data

  def forgot_password
    user = User.find_by_email(params[:email])

    if user
      new_password = "CCA-" + rand(100...999).to_s
      user.password = new_password
      if user.save
        ColumbiaMailer.forgotten_email(user, new_password).deliver_later
        render json: new_password
      end
    else
      render json: "Username or password not found."
    end
  end

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

  def require_admin!
    redirect_to root_url unless current_user["role"] == "Admin"
  end

  def app_data

    {
      user: current_user,
      year_in_review: Archive.year_in_review,
      members: User.collect_all,
      news: New.collect_all,
      events: Event.collect_all,
      event_locations:  Event.collect_locations,
      upcoming_events:  Event.upcoming,
      ads: Ad.all.collect{ |ad| ad.safe_show }.shuffle ,
      staff: Staff.all.collect{ |staff| staff.safe_show } ,
      board:  Board.safe_order ,
      archives: Archive.all.reorder(created_at: :desc).collect{ |archive| archive.safe_show } ,
    }
  end
end
