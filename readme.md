# This Repo is a Sandbox for testing (new) front end techniques

## Requirements

* [NodeJS (v0.10.26)](http://nodejs.org/dist/v0.10.26/node-v0.10.26.pkg)
* [NPM](https://www.npmjs.com/)
* [Sass](http://sass-lang.com/)
* [Bourbon](http://bourbon.io/)

Install the npm modules:
```
npm install
```

## Development

To compile sass run:
```
make sass
```

To let gulp watch for changes in your sass files run:
```
make watch
```

## Code Style and Linting

It's important to check your changes against our styling and linting guidelines. We use gulp to process this.

To check the Javascript Linting run:
```
make lint
```

To check the Javascript code styling run:
```
make jscs
```

To check the Scss code styling run:
```
make scss
```

All issues should be resolved before committing your changes.

## Generating Build
To generate a production ready (kind of) build run:
```
make compress
```
This will compile all the sass and zip the project directory.

## Questions

If you have any questions please contact Peter Kuiper or Sjaak Luthart.