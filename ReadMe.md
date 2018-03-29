## Setting up the Enablon private registry as a source
You can skip this step if you have already added enablon as a registry source

- To your `.npmrc` file add:
```
@enablon:registry=https://enab.pkgs.visualstudio.com/_packaging/Enablon/npm/registry/
always-auth=true
```
- install the vsts-npm-auth package :
`npm i -g vsts-npm-auth`
- Authenticate with Enablon using vsts-npm-auth
`vsts-npm-auth -config path\to\.npmrc`

## Adding the library to your project
`yarn add @enablon/my-package`

## To publish a private package
If your **package name** starts with `@enablon/` like `@enablon/my-package` it will automatically be pushed the private repo.
The **package name** is configured in `package.json`. 
It is not the name of the current folder.
``` bash
yarn publish
```
