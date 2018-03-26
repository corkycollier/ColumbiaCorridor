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

class Archive < ActiveRecord::Base

  def self.year_in_review
    fallback_year = '2017'
    fallback_url = '/pdfjs/minimal?file=%2Fpdf%2Fyear-in-review.pdf'

    archive = Archive.where(title: "Year in Review", doc_type: "file pdf outline")
                     .reorder(year: :desc)
                     .first

    {
      year: archive.try(:year) || fallback_year,
      url: archive.try(:url) || fallback_url,
    }
  end

  def safe_show
    self.attributes
  end
end
