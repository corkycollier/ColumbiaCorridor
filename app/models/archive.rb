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

    yir_year = '2017'
    yir_url = '/pdfjs/minimal?file=%2Fpdf%2Fyear-in-review.pdf'

    archive = Archive.where(title: "Year in Review", doc_type: "file pdf outline")
                     .reorder(year: :desc)
                     .first
    if archive && archive.url.present?
      yir_year = archive.year
      yir_url = archive.reverse_proxy_path
    end

    {
      year: yir_year,
      url: yir_url,
    }
  end

  def reverse_proxy_path
      require 'uri'
      uri = URI::parse(self.url)
      "/pdfjs/minimal?file=#{uri.path}"
  end

  def self.cloudinary_reverse_proxy_paths
    require 'uri'

    # Determine the required reverse proxy path
    urls = Archive.pluck(:url)

    return nil if urls.empty?

    cloudinary_urls = urls.select { |url| url.starts_with?('https://res.cloudinary.com') }

    paths = cloudinary_urls.map { |url| URI::parse(url).path }

    paths.map { |path| path.split('/').second }.compact.uniq
  end

  def safe_show
    self.attributes
  end
end
