module Api
  class UsersController < ApplicationController
    before_action :require_signed_in!

    def update
      @user = User.find_by_id( current_user["id"] )
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
      params.require(:user).permit(
      :username ,
      :email ,
      :phone ,
      :password ,
      :first_name ,
      :last_name ,
      :user_address ,
      :user_city ,
      :user_state ,
      :user_zip ,
      :user_country ,
      :company_name ,
      :company_address ,
      :company_city ,
      :company_state ,
      :company_zip ,
      :company_country ,
      :company_business_type ,
      :level ,
      )
    end
  end
end
