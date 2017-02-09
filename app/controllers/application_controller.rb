class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

  protect_from_forgery with: :exception
  helper_method :current_user, :sign_in!, :sign_out!, :require_signed_in!, :app_data

  def forgot_password
    @user = User.find_by_email(params[:email])
    if @user
      new_password = "CCA-" + rand(100...999).to_s
      @user.password = new_password
      if @user.save
        message = ColumbiaMailer.forgotten_email @user
        message.deliver_now!
      end
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
      user: current_user ,
      members: User.all.collect{ |user| user.safe_show } ,
      news: New.all.order(created_at: :desc).collect{ |thing| thing.safe_show } ,
      events: Event.all.order(date: :asc).collect{ |event| event.safe_show } ,
      ads: Ad.all.collect{ |ad| ad.safe_show } ,
      staff: Staff.all.collect{ |staff| staff.safe_show } ,
      board: Board.all.collect{ |board| board.safe_show } ,
      archives: Archive.all.collect{ |archive| archive.safe_show } ,
    }
  end

  def order_board
    boards = []

    Board.all.each do |board|
      boards << board
    end

    merge_sort boards
  end

  def merge_sort arr
    return arr if arr.length <= 1 # base case
    half = (arr.length / 2) # idx @ middle of array
    left = arr[0...half]
    right = arr[half..(arr.length - 1)]
    merge(merge_sort(left), merge_sort(right))
  end

  def merge left, right
    sorted = []

    while !left.empty? && !right.empty?
      if left[0]["title"] == "President"
        sorted.push left.shift
      elsif left[0]["title"] == "Vice-President"
        sorted.push left.shift
      elsif left[0]["title"] == "Treasurer"
        sorted.push left.shift
      elsif left[0]["title"] == "Secretary"
        sorted.push left.shift
      elsif left[0]["name"].split(" ")[1] || "" <= right[0]["name"].split(" ")[1] || ""
        sorted.push left.shift
      else
        sorted.push right.shift
      end
    end

    sorted.concat(left).concat(right)
  end
end
