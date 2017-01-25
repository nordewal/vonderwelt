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

  def image_small_path(img_name)
    image_path(img_name.gsub(/\.(.*)$/, '_small.\1'))
  end

  def image_large_path(img_name)
    image_path(img_name.gsub(/\.(.*)$/, '_large.\1'))
  end
end