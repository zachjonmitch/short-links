require "rails_helper"

RSpec.describe "Link redirection", type: :request do
  
  it "redirects to the orginal URL for a given short Link" do
    url = "https://google.com"
    shortener = Shortener.new(url)
    link = shortener.generate_short_link

    get link.shortened_url

    expect(response).to redirect_to(link.original_url)
  end

end