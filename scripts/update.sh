#!/bin/bash

APP_PATH="/var/www/ark"

cd $APP_PATH

git pull

bundle install
yarn install

bundle exec rake db:create db:migrate

sudo cp host.conf /etc/apache2/sites-available/000-default.conf

sudo service apache2 restart
