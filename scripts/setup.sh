#!/bin/bash

# **************************************************
# Variables
# **************************************************

RUBY_VERSION = "2.4.3"
DEBIAN_FRONTEND = "noninteractive"
APP_PATH = "/var/www/wpdeploybot"

# Set the working directory
cd $APP_PATH


# **************************************************
# Updates
# **************************************************

apt-get update
apt-get upgrade -y


# **************************************************
# Packages
# **************************************************

# *************************
# Common
# *************************

apt-get install -y \
software-properties-common \
build-essential \
pkg-config \
libssl-dev \
zlib1g-dev \
ruby-dev \
rubygems \
dirmngr \
gnupg \
cmake \
curl \
sudo \
git

# Node JS
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -

# Yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

apt-get update
apt-get install -y nodejs yarn

# Bundler
gem install bundler --no-ri --no-rdoc


# *************************
# Phusion Passenger
# *************************

# Install Apache, Phusion PGP key, add https support, and add repository for passenger
apt-get install -y apache2
apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 561F9B9CAC40B2F7
apt-get install -y apt-transport-https ca-certificates
echo deb https://oss-binaries.phusionpassenger.com/apt/passenger xenial main > /etc/apt/sources.list.d/passenger.list

# Install Passenger + Apache module
apt-get install -y libapache2-mod-passenger

# Enable Passenger module and restart Apache
a2enmod passenger

# Remove default passenger user (nobody), recreate with home directory
userdel nobody
useradd nobody -d /home/nobody -m -p nobody


# *************************
# PHP
# *************************
apt-get install -y \
php7.0 \
php7.0-fpm \
php7.0-gd \
php7.0-mbstring \
php7.0-xmlrpc \
php7.0-curl \
php7.0-xml \
php7.0-mcrypt \
php7.0-mysql \
libapache2-mod-php7.0

# Enable PHP mods
a2enmod php7.0
a2enmod rewrite


# *************************
# MariaDB
# *************************

apt-get update && \
apt-get install -y \
libmysqlclient-dev \
libmariadbd-dev


# *************************
# Wordpress
# *************************

# Install wordpress CLI utility, setup wrapper to make calls without running into permissions issues
curl -o /bin/wp-cli.phar https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
echo "#!/bin/sh\nsudo -E -u www-data /bin/wp-cli.phar \$*" > /bin/wp && \
chmod +x /bin/wp /bin/wp-cli.phar
