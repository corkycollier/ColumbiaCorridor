module Api
  class ArchivesController < ApplicationController
    before_action :require_signed_in!, only: []

    def create
      @archive = Archive.new( archive_params )
      @archive.save
      render json: app_data
    end

    def update
      @archive = Archive.find_by_id( params[:id] )
      @archive.update_attributes( archive_params )
      render json: app_data
    end

    def destroy
      @archive = Archive.find_by_id( params[:id] )
      @archive.try(:destroy)
      render json: app_data
    end

    private

    def archive_params
      params.require(:archive).permit(Archive.new.attributes.map {|key, value| key.to_sym})
    end
  end
end
