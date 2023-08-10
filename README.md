```
# README

This is a simple project that demonstrates how to install and run a Node.js project using Yarn.

## Requirements

* Node.js
* Yarn

## Installation

1. Install Node.js from [nodejs.org](https://nodejs.org/en/).
2. Install Yarn by running the following command:

```

npm install -g yarn

```

## Tested Node.js versions

* 18.16.0
* 16.14.0

Other Node.js versions may also work, but they have not been tested.

## Environment variables

The following environment variables are required to run the project:

* `AUTH_TOKEN`: The auth token for the API.

You can set these environment variables in your `.env` file. For example:

```

VITE_AUTH_TOKEN=my-auth-token

## Running the project

1. In the project directory, run the following command:

```

yarn

```

2. To start the development server, run the following command:

```

yarn dev

```

The development server will start on port 3000. You can access the project at http://localhost:3000.
