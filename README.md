# rails-websocket


## Known issues 

### eventmachine fail to install on macOS

Try the following 

~~~
brew install openssl
bundle config build.eventmachine --with-cppflags=-I/usr/local/opt/openssl/include
~~~

Then run

~~~
bundle install
~~~