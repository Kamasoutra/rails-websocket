# rails-websocket [![CircleCI](https://circleci.com/gh/Kamasoutra/rails-websocket/tree/master.svg?style=svg)](https://circleci.com/gh/Kamasoutra/rails-websocket/tree/master)

Simple demo implementing WebSockets in Ruby on Rails made for my students

Nothing really fancy, just a simple chat

[Demo available on Heroku](https://kamasoutra-rails-websocket.herokuapp.com/)

## Known issues

### eventmachine fails to install on macOS

Try the following :

~~~
brew install openssl
bundle config build.eventmachine --with-cppflags=-I/usr/local/opt/openssl/include
~~~

Then run :

~~~
bundle install
~~~
