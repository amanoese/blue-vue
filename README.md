# blue-vue

todo list application.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at https://localhost:8080/
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## deploy
Please login if you are not logged in to cf.
``` bash
# login cf
cf login -u your@mail.address

# selecting your space
cf target -o your_organization -s your_space
```

fix pacakege.json before deploy if the application names are different.
``` bash
# built by webpack
npm run build

# release to node-red on bluemix 
npm run deploy
```

