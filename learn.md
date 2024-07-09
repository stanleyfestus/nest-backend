## Services
services communicate with database for example

## Controllers
services are imported into controllers to respond to http calls
register endpoints in controllers

## Modules
make imports in form of an array that specifies modules needed for the current module

## Providers

## Pipes in nestjs
two use cases 
 - use case 1 -> use ParseIntPipe to transform string value from params for example to string value
 - use case 2 -> validate input parameters

 ## Custom Providers
 - create for example services and make it injectable by using @Injectable decorator
 - in the controller we add the servce created in the constructor like this constructor(private: someService: SomeService)
 - nest creates instance of service and cache it. Singleton pattern
