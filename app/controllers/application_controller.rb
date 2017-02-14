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
        message_gary @user, new_password
        render json: new_password
      end
    else
      render json: "User not found."
    end

  end

  def message_gary user, new_password
      specs = {
        to: "nolidevco@gmail.com" ,
        content: "
        <div style='color:#262262;'>
          <div style='height:80px;background:url(http://res.cloudinary.com/djjldnjz7/image/upload/v1482226207/Untitled_alc9hg.png);'>

          </div>

          <h1>
            Password Reset
          </h1>

          <div>
            <p>
              Email:
              <a href='mailto:" + user.email + "'>
                " + user.email + "
              <a>
            </p>

            <p>
              Password:
                " + new_password + "
            </p>
          </div>

          <h4 style='margin-top:24px;'>
            <a href='http://columbiacorridor.com' target='blank' style='color:#262262;'>
              Columbia Corridor Association
            <a>
          </h4>
        </div>
        "
      }

      message1 specs
    end

  def message1 message
    string = '{
    "personalizations": [
      {
        "to": [
          {
            "email": "' + message[:to] + '"
          }
        ],
        "subject": "Password reset"
      }
    ],
    "from": {
      "email": "admin@nolidev.co"
    },
    "content": [
      {
        "type": "text/html",
        "value": "' + message[:content].split("\n").join(" ") + '"
      }
    ],
    "template" : "CCA"
    }'

    data = JSON.parse(string)

    sg = SendGrid::API.new(api_key: ENV['sendgrid2'])
    response = sg.client.mail._('send').post(request_body: data)

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
    event_locations = Event.all.collect{ |event| event.location }.uniq
    {
      user: current_user ,
      members: User.all.collect{ |user| user.safe_show } ,
      news: New.all.order(created_at: :desc).collect{ |thing| thing.safe_show } ,
      events: Event.all.order(date: :asc).collect{ |event| event.safe_show } ,
      event_locations:  event_locations,
      ads: Ad.all.collect{ |ad| ad.safe_show } ,
      staff: Staff.all.collect{ |staff| staff.safe_show } ,
      board:  Board.safe_order ,
      archives: Archive.all.collect{ |archive| archive.safe_show } ,
    }
  end
end
