module Api
  class SponsorsController < ApplicationController
    before_action :require_signed_in!, only: []

    def create
      @ad = Ad.new( ad_params )
      @ad.save
      render json: app_data
    end

    def update
      @ad = Ad.find_by_id( params[:id] )
      @ad.update_attributes( ad_params )
      render json: app_data
    end

    def destroy
      @ad = Ad.find_by_id( params[:id] )
      @ad.try(:destroy)
      render json: app_data
    end

    private

    def ad_params
      params.require(:ad).permit(Ad.new.attributes.map {|key, value| key.to_sym})
    end
  end
end
