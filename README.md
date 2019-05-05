# API Testing Sandbox

## Tools to use

- [Docker](https://www.docker.com/) - Providers you the means to run containers

- [Httpbin](https://httpbin.org/) - This is a simple service that providers a way to test HTTP Requests and Responses

**Start your playground**

``` bash

# Use Ctrl+C when you want to exit the service (this will not remove the container)

docker run -p 8001:80 --name httpbin kennethreitz/httpbin

```

This will start httpbin on port 8001, so if you navigate to `http://localhost:8001` you will see httpbin. Now you can start making requests from Postman.

## Commands to remember

**Start httpbin**

``` bash

# Use Ctrl+C when you want to exit the service (this will not remove the container)

docker run -p 8001:80 --name httpbin kennethreitz/httpbin

```

**Remove httpbin** - when you see the following error `Error response from daemon: Conflict. The container name "/httpbin" is already in use by container` use the command below.

``` bash 

# Or if you are still running in the terminal use CTRL+C

docker rm -f httpbin

```

**See containers running**

```

docker ps

```
