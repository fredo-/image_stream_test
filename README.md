# node-boilerplate
Repo with basic node app layout and folder structure

# Use this as a template in a new repo
1. Clone the repo
1. Change the remote with `git remote set-url origin [YOUR_NEW_REPO]`

Or 

1. Set up a new repo from the template in github.com

# Set up node module/app
1. `npm init` 
    1. Walks you through setting up the node module, i.e. creating the package.json file

1. Update package.json to have a key value pair of `"type": "module"` inside top level object (this is for `import` to work instead of using `require`)

## Set up Express
1. `npm install express`

## Set up .env file
1. Create a `.env` file at the top level in the module folder

## Set up start script
1. Open `package.json` file and update the `scripts` object with: `"node --env-file=.env app"`

# Run the app
1. `npm start`