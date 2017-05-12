module Api
  class EventsController < ApplicationController
    before_action :require_signed_in!, only: []

    def create
      @event = Event.new( event_params )
      @event.save
      render json: app_data
    end

    def update
      @event = Event.find_by_id( params[:id] )
      @event.update_attributes( event_params )
      render json: app_data
    end

    def destroy
      @event = Event.find_by_id( params[:id] )
      @event.try(:destroy)
      render json: app_data
    end

    private

    def event_params
      params.require(:event).permit(:title, :date, :time, :location, :body, :event_type, :allDay, :start, :end, 
        :url, :paypal, :custom, :basic_title)
    end
  end
end
