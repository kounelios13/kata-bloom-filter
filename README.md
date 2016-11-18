# Feed Post Importer

This is the post importer that is able to get data for RSS or ATOM feeds.

## Getting Started

After the repository is cloned into the desired path, `cd` into the project folder and then install the dependencies based on the environment. If you are in development mode then running `npm install` is enough. In production environment it is better to execute `npm prune --production` followed by `npm install --production`.

## Available Commands

* `npm run check`: Executes the `lint` task followed by a check that all modules used in the lib folder are also listed as dependencies in the _package.json_.
* `npm test`: Executes the test suite of the project.
* `npm run coverage`: Executes the test suite of the project and generates test coverage information. Look for the *coverage* folder as soon as this task is over.
