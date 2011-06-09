require 'rubygems'
require 'sinatra'
require 'sinatra/reloader' if development?
require 'haml'

set :haml, {:format => :html5, :attr_wrapper => '"' }

## Index
get '/' do

	@base_size = params.has_key?('base-size') ? params['base-size'].to_i : 10
	@element_size = params.has_key?('element-size') ? params['element-size'].to_i : 12
	@result_precision = params.has_key?('result-precision') ? params['result-precision'].to_i : 5

	@em_size = sprintf("%.#{@result_precision}f", 100.0 / @base_size * @element_size / 100.0).to_f.to_s

  haml :index
end

