module Api
  class EventsController < ApplicationController
    before_action :require_signed_in!, only: []

    def create
      @event = Event.new( event_params )
      @event.save
      render json: @event.safe_show
    end

    def update
      @event = Event.find_by_id( params[:id] )
      @event.update_attributes( params[:event] )
      render json: current_user.safe_show
    end

    def destroy
      @event = Event.find_by_id( params[:id] )
      @event.try(:destroy)
      render json: current_user.safe_show
    end

    private

    def event_params
      params.require(:event).permit(Event.new.attributes.map {|key, value| key.to_sym})
    end
  end
end
