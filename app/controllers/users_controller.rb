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
