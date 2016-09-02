# rails-websocket

Simple demo implementing WebSockets in Ruby on Rails made for my students

Nothing really fancy, just a simple chat

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
