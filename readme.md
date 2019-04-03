# React Boilerplate

I learned React using **create-react-app**. After some time I felt I missed out on what happened behind the scenes. Luckily for me I found the course [Modern JavaScript Tooling with React](https://egghead.io/courses/modern-javascript-tooling-with-react) on [egghead.io](https://egghead.io/). Which I have followed to create this React boilerplate.

## How to clone and make a new git repository

1. Clone the repo from [https://github.com/NatalieCyreus/react-boilerplate](https://github.com/NatalieCyreus/react-boilerplate) by copy the link from the cloning button.

2. In your terminal clone the repo using the link you just copied with `git clone --depth=1 https://github.com/NatalieCyreus/react-boilerplate.git the-name-of-your-project` _(`--depth=1` will remove all but the latest git history from the cloned repo)_

3. If you run `git log` in your terminal you will se the latest commit. Run `ls -a` and you will see all files, even the hidden. To remove the git history run `rm -rf .git`

4. `git status` will now tell you the project is not a git repository.

5. `git init` to make your new project a git repository.

6. Run `git add .` to add all files. Check with `git status` so the files are tracked.

7. Commit all files with `git commit -m "initial commit"`. Now the project is stored locally.

8. Create a new repository on github. When its done you will get a option **...or push an existing repository from the command line**. Copy the text that looks like `git remote add origin git@github.com:YOURNAME/MY-NEW-APP.git` and run it in the terminal. You can verify it worked with `git remote -v`.

9. Push to master with `git push -u origin master`. Reload the github page and you should see your new repo.

10. Clean up the `package.json` file in your project by changing the name, author etc to match your project description. Remember to delete the whole `repository`, `bugs` and `homepage` fields. Save the file.
11. Run `npm init -y` and those field will be re created with your git information.
12. Remove the readme and replace it with a readme for your new project.
13. Finnaly run `npm i` to install all dependencies for the project.

## How to run application

1. To run development mode: `npm run dev`
2. To run development without state re-render: `npm run dev:hot`
3. To build for production: `npm run build`
4. To run tests: `npm test`
5. To make sure code is great run eslint: `npm run lint`

## Commit to git

I try to follow this [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)
