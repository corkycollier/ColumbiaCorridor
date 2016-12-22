class SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user])

    if @user
      sign_in!(@user)
      redirect_to root_url
    else
      flash[:errors] = ["Invalid email and/or password"]
      render json: @user.errors.full_mesages
    end
  end

  def destroy
    sign_out!
    render json: {}
  end
end