require 'fastimage'
module CustomHelpers
  def resp_img(title, image)
    return "![#{title}](images#{image} \"#{title}\")"
    #![Alternative text](images/IMG_0017.JPG "Title attribute"){: srcset="images/IMG_0017.JPG 2x"}
    #return image_path("IMG_0017.JPG", resize_to: 1200)
  end

  def article_images(article)
    images = []
    Dir.glob("source/#{File.dirname(article.path)}/*").grep(/^.*(?<!_small|large)\.(jpg|png)$/i) do |item|
      images << File.basename(item)
    end
    images
  end

  def image_small_path(article, img_name)
    image_path("/#{File.dirname(article.path)}/#{img_name.gsub(/\.(.*)$/, '_small.\1')}")
  end

  def image_large_path(article, img_name)
    image_path("/#{File.dirname(article.path)}/#{img_name.gsub(/\.(.*)$/, '_large.\1')}")
  end

  def image_large_size(article, img_name)
    image_size(article, img_name, 'large')
  end

  def image_size(article, img_name, type)
    postfix = "_#{type}" if !type.nil?
    size = FastImage.size("source/#{File.dirname(article.path)}/#{img_name.gsub(/\.(.*)$/, "#{postfix}.\\1")}")
    "#{size[0]}x#{size[1]}"
  end

  def pretty_date(article)
    I18n.l(article.date, format: "%-d. %B %Y")
  end
end