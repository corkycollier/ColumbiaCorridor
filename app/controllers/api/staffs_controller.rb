module Api
  class StaffsController < ApplicationController
    before_action :require_signed_in!, only: []

    def create
      @staff = Staff.new( staff_params )
      @staff.save
      render json: app_data
    end

    def update
      @staff = Staff.find_by_id( params[:id] )
      @staff.update_attributes( staff_params )
      render json: app_data
    end

    def destroy
      @staff = Staff.find_by_id( params[:id] )
      @staff.try(:destroy)
      render json: app_data
    end

    private

    def staff_params
      params.require(:staff).permit(Staff.new.attributes.map {|key, value| key.to_sym})
    end
  end
end
