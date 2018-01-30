FROM juliabalfour/apache-passenger-ruby-php

MAINTAINER Nick Brabant <nick@juliabalfour.com>

ENV APP_PATH /var/www/ark

# These Environment variables are environment specific
ENV BASE_URL http://localhost:8080

WORKDIR $APP_PATH

COPY host.conf /etc/apache2/sites-available/000-default.conf

COPY Gemfile Gemfile.lock package.json ./
RUN bundle

ADD . .
