#!/bin/bash

cd ../

bundle install
yarn install

bundle exec rake db:create db:migrate

sudo cp host.conf /etc/apache2/sites-available/000-default.conf

sudo service apache2 restart
