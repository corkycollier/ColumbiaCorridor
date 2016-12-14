class PagesController < ApplicationController
  def home
    @user = current_user.safe_show if current_user
  end
end
