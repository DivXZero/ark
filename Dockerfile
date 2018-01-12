FROM juliabalfour/apache-passenger-ruby-php

MAINTAINER Nick Brabant <nick@juliabalfour.com>

ENV APP_PATH /var/www/ark

WORKDIR $APP_PATH

COPY host.conf /etc/apache2/sites-available/000-default.conf

COPY Gemfile Gemfile.lock ./
RUN bundle

ADD . .
