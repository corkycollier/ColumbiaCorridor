module Api
  class NewsController < ApplicationController

    def create
      @news = New.new( news_params )
      @news.user_id = current_user["id"]
      @news.save
      render json: @news.safe_show
    end

    def update
      @news = New.find_by_id( params[:id] )
      @news.update_attributes( params[:news] )
      render json: current_user.safe_show
    end

    def destroy
      @news = New.find_by_id( params[:id] )
      @news.try(:destroy)
      render json: current_user.safe_show
    end

    private

    def news_params
      params.require(:news).permit(:title, :body, :cca_only)
    end
  end
end
