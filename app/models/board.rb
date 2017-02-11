# == Schema Information
#
# Table name: ads
#
#  id         :integer          not null, primary key
#  image_url  :string
#  link       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Board < ActiveRecord::Base

  def safe_show
    self.attributes
  end

  def self.safe_order
    board = Board.all.collect {|board| board}
    board.sort_by! do |board|
      if board.title == "President"
        "zzzzzzzzz"
      elsif board.title == "Vice-President"
        "zzzzzzzzy"
      elsif board.title == "Treasurer"
        "zzzzzzzzw"
      elsif board.title == "Secretary"
        "zzzzzzzzv"
      else
        board.name.split(" ")[1] || ""
      end
    end.reverse
  end
end
