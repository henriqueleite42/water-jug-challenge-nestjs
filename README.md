# Water Jub Challenge

## What is the challenge?

The challenge has a full description located in this project, [click here](.water-jug-challenge.pdf) to access it.

## What do you need to run the project?

- Install [Docker](https://docs.docker.com/engine/install/)
- If you are using Linux, follow the instructions at [docker post-installation steps](https://docs.docker.com/engine/install/linux-postinstall/)
- Install [Docker Compose](https://docs.docker.com/compose/install/)

## How to run the project?

- Execute `docker-compose up`

## Routes Documentation

After executing the project locally, you can access `http://localhost:8080/swagger` to see an OpenAPI documentation.

## Production

Every push on the `master` branch automatically deploys a new production version on the `release` branch. You can change the criteria updating the `.github/workflows/deploy.yml` file.
