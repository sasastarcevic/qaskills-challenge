# Configure your environment before challenge.


1. Install Git for your operating system:
    - Windows: https://git-scm.com/download/win 
    - Linux: https://git-scm.com/download/linux 
    - Mac: https://git-scm.com/download/mac 

2. Open console for your specific operating system and type command:
    - Open new terminal
    - Check version "git --version"
    - Response should be something like: "git version 2.28.0"
    - Set your username (replace first and last name with yours): 
    ```
    git config --global user.name FIRST_NAME LAST_NAME
    ```
    - Set your email address (replace with you email):
    ```
    git config --global user.email "MY_NAME@example.com"
    ```

3. Install Nodejs for your operating system: https://nodejs.org/en/download/

4. Download and install VSC (Visual Studio Code) for your operating system: https://code.visualstudio.com/download 

5. Go to url https://github.com/qaskills/qaskills-challenge and fork this repo:
    
    - Fork this repo: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#forking-a-repository

    - Clone you newly forked repo: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#cloning-your-forked-repository


6. Start 'fake-rest-api' application:
    - Open new terminal (must stay working)
    - Got to folder with command: 'cd fake-rest-api'
    - Install dependencies with command 'npm install'
    - Start fake rest api with command 'npx json-server db.json'
    - Application is started below logo is visible

```bash
sasas@latitude-5491:~/Development/qaskills-free-guide/fake-rest-api$ npx json-server db.json

  \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:3000/posts
  http://localhost:3000/comments
  http://localhost:3000/users
  http://localhost:3000/profile

  Home
  http://localhost:3000

  Type s + enter at any time to create a snapshot of the database

```

7. Start 'demo-frontent-app' application:
    - Open new terminal ( must stay working)
    - Go to folder with command: 'cd demo-frontend-app'
    - Install dependencies with command 'npm install'
    - Start demo frontend app with command 'npm run dev'
    - Application is started on url 'http://localhost:3006' and visible in browser

![alt text](../images/demo-fe-app.png)

Back to [QASkills Challenge](./../README.md)

