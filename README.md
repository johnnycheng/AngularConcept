AngularConcept
==============

AngularJs and ASP.Net MVC site scaffolded with [Yeoman](http://guides.rubyonrails.org/getting_started.html) and uses Grunt and Bower.

##Getting Started

Requires Node.js to be installed on your machine.

1. Pull down repository

2. Start Node.js command prompt and cd to repository

3. Install Node packages:

        npm update

4. Install Bower components:

        bower install
    
5. Build the csproj with msbuild:
    
        grunt msbuild

You should now be ready to start

##Grunt Tasks

Start the dev site in IIS Express

    grunt serve
    
Build a release _(dist)_ version of the site 

    grunt build

Start the release version of the site in IIS Express

    grunt serve:dist
    
##Testing

The project uses the Jasmine testing framework and Karma as the test runner.

To run the tests, you can either use Grunt or WebStorm.

__Run tests with Grunt__

    grunt test
    
__Run tests with WebStorm__

1. Right click on _karma.conf.js_ file

2. Select _Run 'karma.conf.js'_

  
    

    

