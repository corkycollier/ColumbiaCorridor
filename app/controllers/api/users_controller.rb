module Api
  class UsersController < ApplicationController
    before_action :require_signed_in!

    def update
      @user = User.find_by_id( params[:id] )
      @user.update_attributes( user_params )
      render json: current_user
    end

    def destroy
      @user = User.find_by_id( params[:id] )
      @user.try( :delete )
      render json: app_data
    end

    private

    def user_params
      params.require(:user).permit(User.new.attributes.map {|key, value| key.to_sym}.concat([:password]))
    end
  end
end
