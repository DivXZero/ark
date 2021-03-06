source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

# Server
gem 'rails', '~> 5.1.4'
gem 'puma', '~> 3.7'
gem 'webpacker', '~> 3.2'
gem 'sucker_punch', '~> 2.0', '>= 2.0.4'

# Database
gem 'mysql2', '>= 0.3.18', '< 0.5'

# JS
gem 'coffee-rails', '~> 4.2'
gem 'uglifier', '>= 1.3.0'

# UI
gem 'haml', '~> 5.0', '>= 5.0.4'
gem 'sass-rails', '~> 5.0'

# Util
gem 'dotenv-rails', '~> 2.2', '>= 2.2.1'
gem 'rails-settings-cached', '~> 0.6.6'
gem 'pattern_generator', '~> 0.1.0'
gem 'foreman', '~> 0.84.0'
gem 'rugged', '~> 0.26.0'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end
