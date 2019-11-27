# -*- encoding: utf-8 -*-
# stub: html5_validator 1.0.0 ruby lib

Gem::Specification.new do |s|
  s.name = "html5_validator".freeze
  s.version = "1.0.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Damian Nicholson".freeze]
  s.date = "2014-07-27"
  s.description = "Ruby gem to test for valid HTML5 markup with RSpec".freeze
  s.email = ["damian.nicholson21@gmail.com".freeze]
  s.homepage = "http://github.com/damian/html5_validator".freeze
  s.rubygems_version = "3.0.6".freeze
  s.summary = "Ruby gem to test for valid HTML5 markup with RSpec".freeze

  s.installed_by_version = "3.0.6" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<json>.freeze, [">= 0"])
      s.add_runtime_dependency(%q<rest-client>.freeze, [">= 0"])
      s.add_runtime_dependency(%q<rspec>.freeze, [">= 0"])
      s.add_runtime_dependency(%q<rspec-collection_matchers>.freeze, ["~> 1.0.x"])
    else
      s.add_dependency(%q<json>.freeze, [">= 0"])
      s.add_dependency(%q<rest-client>.freeze, [">= 0"])
      s.add_dependency(%q<rspec>.freeze, [">= 0"])
      s.add_dependency(%q<rspec-collection_matchers>.freeze, ["~> 1.0.x"])
    end
  else
    s.add_dependency(%q<json>.freeze, [">= 0"])
    s.add_dependency(%q<rest-client>.freeze, [">= 0"])
    s.add_dependency(%q<rspec>.freeze, [">= 0"])
    s.add_dependency(%q<rspec-collection_matchers>.freeze, ["~> 1.0.x"])
  end
end
