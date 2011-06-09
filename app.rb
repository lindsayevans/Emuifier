require 'rubygems'
require 'sinatra'
require 'sinatra/reloader' if development?
require 'haml'

set :haml, {:format => :html5, :attr_wrapper => '"' }

## Index
get '/' do
  haml :index
end

