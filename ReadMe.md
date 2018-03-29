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
`npm i @enablon/my-package`

## To publish a private package
if your packages name starts with `@enablon/...` it will automatically be pushed the private repo.
