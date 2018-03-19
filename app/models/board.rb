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
  
  before_save :standardize
  
  def standardize
    # nil values cause errors so don't store nil values
    self.title   = "" unless title.present?
    self.name    = "" unless name.present?
    self.email   = "" unless email.present?
    self.company = "" unless company.present?
    self.website = "" unless website.present?
    self.img     = "" unless img.present?
    self.bio     = "" unless bio.present?
  end

  def safe_show
    self.attributes
  end

  def self.safe_order
    board = Board.all.collect {|board| board}
    board.sort_by! do |board|
      if board.title == "President"
        "AAAAAAAA"
      elsif board.title == "Vice-President"
        "AAAAAAAb"
      elsif board.title == "Treasurer"
        "AAAAAAAc"
      elsif board.title == "Secretary"
        "AAAAAAAd"
      else
        board.name.split(" ")[1].capitalize || "Z"
      end
    end
  end
end
