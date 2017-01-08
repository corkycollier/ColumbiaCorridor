module Api
  class NewsController < ApplicationController

    def create
      @news = New.new( news_params )
      @news.user_id = current_user["id"]
      @news.save
      render json: app_data
    end

    def update
      @news = New.find_by_id( params[:id] )
      @news.update_attributes( params[:news] )
      render json: app_data
    end

    def destroy
      @news = New.find_by_id( params[:id] )
      @news.try(:destroy)
      render json: app_data
    end

    private

    def news_params
      params.require(:news).permit(New.new.attributes.map {|key, value| key.to_sym})
    end
  end
end
