class SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user])

    if @user
      sign_in!(@user)
      redirect_to root_url
    else
      render json: @user
    end
  end

  def destroy
    sign_out!
    render json: {}
  end
end
