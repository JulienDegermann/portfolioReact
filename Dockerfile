FROM php:8.3-apache-bookworm

RUN apt-get update && apt-get install -y \
    # openssl \
    zip \
    unzip \
    libpng-dev libjpeg-dev libfreetype6-dev libwebp-dev libzip-dev \
    && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

RUN a2enmod rewrite

COPY . /var/www/html

COPY ./docker.sh /var/opt/docker.sh

COPY apache.conf /etc/apache2/sites-available/000-default.conf


RUN chmod +x /var/opt/docker.sh

RUN chown -R www-data:www-data /var/www/html
RUN chmod -R 775 /var/www/html


ENTRYPOINT ["/var/opt/docker.sh"]

WORKDIR /var/www/html

EXPOSE 80
