class UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in!(@user)
      redirect_to root_url
    else
      render json: @user.errors.full_messages
    end
  end

  private

  def user_params
    params.require(:user).permit(User.new.attributes.collect{|key, value| key.to_sym}.concat([:password]))
  end
end
