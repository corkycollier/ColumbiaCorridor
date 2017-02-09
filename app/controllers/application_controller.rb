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
      board:  Board.all.collect{ |board| board.safe_show } ,
      archives: Archive.all.collect{ |archive| archive.safe_show } ,
    }
  end

  def sort_board
    boards = []

    Board.all.each do |member|
      boards << member
    end

    boards.sort! do |m1, m2|
      m1name = m1.name.split(" ")[1] || ""
      m2name = m2.name.split(" ")[1] || ""

      if m1name < m2name
        1
      elsif m1name > m2name
        -1
      else
        0
      end
    end

    execs = []
    boards.each_with_index do |board, idx|
      title = board['title']
      execs << board if title == "President" || title == "Vice-President" || title == "Treasurer" || title == "Secretary"
      boards.delete_at(idx)
    end

    new_exec = []

    execs.each do |member|
      title = member['title']
      if title == "President"
        new_exec << member
      end
    end

    execs.each do |member|
      title = member['title']
      if title == "Vice-President"
        new_exec << member
      end
    end

    execs.each do |member|
      title = member['title']
      if title == "Treasurer"
        new_exec << member
      end
    end

    execs.each do |member|
      title = member['title']
      if title == "Secretary"
        new_exec << member
      end
    end

    new_exec.concat(boards)
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
