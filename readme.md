# node-basher

With node-basher you can fire up a variety of bash scripts remotely for several use cases :)

**NOTE:** These scripts run bash commands in a child process, if you are on windows you should run these scripts from git bash or on windows subsystem for linux.

## spinup

This is the bash version of my merced-spinup tool. It clones the same templates but will also install dependencies and remove the git remote from the clone saving you time.

The command

`npx node-basher spinup |TEMPLATE| |PROJECTNAME|`

If template not specified will spinup a react project by default

If projectname not specified will clone to folder "myproject"

List of templates and their names

### AVAILABLE TEMPLATES

#### Frontend

- react
- angular
- vue
- svelte
- amponent
- mercedui
- renderblocks
- mblocks
- basicelement
- componentzoo
- superfunc
- funcomponent
- basicreact
- reactwebp
- reactrouter
- reactredux
- reactreducer
- jquerywebpack
- basichtml (basic html/css/js setup)
- reactts
- kofu
- vuehtml (vue with a script tag)
- reacthtml (react with a script tag)
- angularjs (AngularJS 1.8, LTS Support Ends 12/31/21)
- jqueryhtml (jquery with a script tag)
- reactrollup
- gruntreact
- reactsassbootstrap
- reactsassmaterialui
- reactsasscontext
- reactstyled
- reactjss
- reactloaded
- reactparcel
- snowreactloaded
- snowreacttask

### Snowpack Bundler Templates (From Snowpacks Official Templates)

- snowpack
- snowreact
- snowreactts
- snowsvelte
- snowvue
- snowts
- snowlit
- snowlitts

#### Backend

- fastify
- koa
- polka
- apollo
- expressreact
- expressejs
- expressmustache
- expressmarko
- expresspug
- expressrest
- expressrest
- merver
- expresssocket
- mongoexpressreact
- expressmongo
- expresspg
- express

### Markdown Blog Templates
- gatsbymarkdown (react)
- nextmarkdown (react)
- sappermarkdown (svelte)
- scullymarkdown (angular)
- gridsomemarkdown (Vue)
- nuxtmarkdown (Vue)

### Other

- ts
- plainwebpack
- plainrollup
- commander
- nextts (Next Static Site Generator with Typescript)
- gulp
- grunt
