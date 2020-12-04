const templates = {
  amponent: "https://github.com/AlexMercedCoder/amponent-parcel-template.git",
  basicelement: "https://github.com/AlexMercedCoder/BasicElementTemplate.git",
  funcomponent: "https://github.com/AlexMercedCoder/funComponent-template.git",
  reactparcel:
    "https://github.com/AlexMercedCoder/Alex-Merced-React-Parcel-Template.git",
  renderblocks: "https://github.com/AlexMercedCoder/renderblocks-template.git",
  mercedui: "https://github.com/AlexMercedCoder/mercedui-template-webpack.git",
  vue: "https://github.com/AlexMercedCoder/vue-router-buefy-template.git",
  superfunc: "https://github.com/AlexMercedCoder/superfunc-template.git",
  mblocks: "https://github.com/AlexMercedCoder/mBlocks-template.git",
  componentzoo: "https://github.com/AlexMercedCoder/componentzoo-template.git",
  angular: "https://github.com/AlexMercedCoder/angular-template.git",
  svelte: "https://github.com/AlexMercedCoder/svelte-template.git",
  expressreact:
    "https://github.com/AlexMercedCoder/express-react-views-MVC-template.git",
  expressejs: "https://github.com/AlexMercedCoder/express-ejs-template.git",
  expressrest: "https://github.com/AlexMercedCoder/express-rest-template.git",
  merver: "https://github.com/AlexMercedCoder/Merver-Template.git",
  reactwebp: "https://github.com/AlexMercedCoder/ReactWebpackTemplate.git",
  reactrouter: "https://github.com/AlexMercedCoder/ReactRouterTemplate.git",
  koa: "https://github.com/AlexMercedCoder/KoaTemplate.git",
  polka: "https://github.com/AlexMercedCoder/polkatemplate.git",
  apollo: "https://github.com/AlexMercedCoder/ApolloServerTemplate.git",
  reactredux: "https://github.com/AlexMercedCoder/reactreduxtemplate.git",
  reactreducer: "https://github.com/AlexMercedCoder/reactreducertemplate.git",
  jquerywebpack: "https://github.com/AlexMercedCoder/jqeurywebpacktemplate.git",
  basichtml: "https://github.com/AlexMercedCoder/basichtmlcssjstemplate.git",
  ts: "https://github.com/AlexMercedCoder/BasicTypescriptTemplate.git",
  reactts:
    "https://github.com/AlexMercedCoder/ReactWebpackTypescriptTemplate.git",
  fastify: "https://github.com/AlexMercedCoder/FastifyTemplate.git",
  kofu:
    "https://github.com/arthurbernierjr/kofuscript-starter-kit-template.git",
  expresssocket:
    "https://github.com/AlexMercedCoder/express_socketio_template.git",
  plainwebpack: "https://github.com/AlexMercedCoder/plainwebpacktemplate.git",
  plainrollup: "https://github.com/AlexMercedCoder/plainrolluptemplate.git",
  commander: "https://github.com/AlexMercedCoder/commanderclitooltemplate.git",
  basicreact: "https://github.com/AlexMercedCoder/react_webpack_basic.git",
  reacthtml: "https://github.com/AlexMercedCoder/reacthtml.git",
  vuehtml: "https://github.com/AlexMercedCoder/vuehtml.git",
  angularjs: "https://github.com/AlexMercedCoder/basicangularjstemplate.git",
  jqueryhtml: "https://github.com/AlexMercedCoder/jquerybasictemplate.git",
  mongoexpressreact:
    "https://github.com/AlexMercedCoder/express-mongo-reactviews-template.git",
  reactrollup: "https://github.com/AlexMercedCoder/ReactRollupTemplate.git",
  nexts: "https://github.com/AlexMercedCoder/NextTSTemplate.git",
  gulp: "https://github.com/AlexMercedCoder/gulptemplate.git",
  grunt: "https://github.com/AlexMercedCoder/GruntTemplate.git",
  gruntreact: "https://github.com/AlexMercedCoder/GruntReactTemplate.git",
  expressmongo: "https://github.com/AlexMercedCoder/expressmongotemplate.git",
  expresspg: "https://github.com/AlexMercedCoder/expressrestpostgres.git",
  reactsassbootstrap:
    "https://github.com/AlexMercedCoder/ReactSassRouterContextBootstrap.git",
  reactsassmaterialui:
    "https://github.com/AlexMercedCoder/ReactSassMaterialUI.git",
  reactsasscontext:
    "https://github.com/AlexMercedCoder/ReactSassContextRouter.git",
  reactstyled:
    "https://github.com/AlexMercedCoder/reactstyledcomponentscontext.git",
  reactjss: "https://github.com/AlexMercedCoder/ReactJssRouterContext",
  reactloaded: "https://github.com/AlexMercedCoder/react-fully-loaded.git",
  express: "https://github.com/AlexMercedCoder/expressdotenv.git",
  react: "git@github.com:AlexMercedCoder/reactbasicrouter.git",
  snowreact: "snowpackjs/snowpack/create-snowpack-app/app-template-react",
  snowvue: "snowpackjs/snowpack/create-snowpack-app/app-template-vue",
  snowreacts:
    "snowpackjs/snowpack/create-snowpack-app/app-template-react-typescript",
  snowsvelte: "snowpackjs/snowpack/create-snowpack-app/app-template-svelte/",
  snowpack: "snowpackjs/snowpack/create-snowpack-app/app-template-blank",
  snowts:
    "snowpackjs/snowpack/create-snowpack-app/app-template-blank-typescript",
  snowlit: "snowpackjs/snowpack/create-snowpack-app/app-template-lit-element",
  snowlitts:
    "snowpackjs/snowpack/create-snowpack-app/app-template-lit-element-typescript",
  snowreactloaded: "https://github.com/AlexMercedCoder/showreactloaded.git",
  snowreacttask: "https://github.com/AlexMercedCoder/snowreacttask.git",
  expresshandlebars:
    "https://github.com/AlexMercedCoder/expresshandlebarstemplate.git",
  expressmustache:
    "https://github.com/AlexMercedCoder/expressmustachetemplate.git",
  expressmarko: "https://github.com/AlexMercedCoder/expressmarkotemplate.git",
  expresspug: "https://github.com/AlexMercedCoder/expresspugtemplate.git",
  gatsbymarkdown:
    "https://github.com/AlexMercedCoder/GatsbyMarkdownTemplate.git",
};

module.exports = templates;
