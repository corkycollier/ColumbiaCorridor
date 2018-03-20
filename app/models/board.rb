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

  scope :published, -> { where(published: true) }

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

  def self.find_by_title(title)
    board.find_by()
  end

  def self.safe_order
    ordered_titles = [
      "President",
      "Vice-President",
      "Treasurer",
      "Secretary",
    ]

    title_ordered_board_members = ordered_titles.map do |title|
      Board.find_by(title: title)
    end

    other_board_members = Board.where.not(title: ordered_titles)

    orderd_other_board_members = other_board_members.to_a.sort_by! do |board|
      v = board.name.try(:split).try(:last) || "ZZZZZ"
      puts v
      board.name.try(:split).try(:last) || "ZZZZZ"
    end

    (title_ordered_board_members + orderd_other_board_members).compact
  end
end
