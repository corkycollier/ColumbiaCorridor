module Api
  class BoardsController < ApplicationController
    before_action :require_admin!

    def create
      @board = Board.new( board_params )
      @board.save
      render json: app_data
    end

    def update
      @board = Board.find_by_id( params[:id] )
      @board.update_attributes( board_params )
      render json: app_data
    end

    def destroy
      @board = Board.find_by_id( params[:id] )
      @board.try(:destroy)
      render json: app_data
    end

    private

    def board_params
      params.require(:board).permit(Board.new.attributes.map {|key, value| key.to_sym})
    end
  end
end
