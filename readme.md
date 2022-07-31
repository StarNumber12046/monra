<div align="center">
  <h1>Monra</h1>
  </br>
  <p>A cli program to edit and create a mono repo project</p>
</div>
<div align="center">
  </br>
  <h2>Installation</h2>
</div>

```bash
npm i -g monra
```

```bash
yarn global add monra
```

```bash
pnpm add -g monra
```

<div align="center">
  </br>
  <h1>Command</h1>
  </br>
  <p>All Monra commands for manage your project</p>
</div>

<div align="center">
  </br>
  <h2>help</h2>
  </br>
  <p>Get the list of all commands in Monra</p>
</div>

```bash
monra help
```
**Aliases**: -h, --help

<div align="center">
  </br>
  <h2>init</h2>
  </br>
  <p>Initialize a project with Monra</p>
</div>

```bash
monra init
```
**Aliases**: i, -i, --init 

<div align="center">
  </br>
  <h2>create</h2>
  </br>
  <p>Create a new package the in specific folder</p>
</div>

```bash
monra create [directory-name]
```
**Aliases**: build 

<div align="center">
  </br>
  <h2>delete</h2>
  </br>
  <p>Remove a package from the packages directory</p>
</div>

```bash
monra delete [package-name]
```
**Aliases**: d 

<div align="center">
  </br>
  <h2>publish</h2>
  </br>
  <p>Publish all packages in a packages folder</p>
</div>

```bash
monra publish
```
**Aliases**: -p, --publish, p

<div align="center">
  </br>
  <h2>version</h2>
  </br>
  <p>Get the version of current installed Monra</p>
</div>

```bash
monra version
```
**Aliases**: -v, --version

<div align="center">
  </br>
  <h2>list</h2>
  </br>
  <p>List all packages in the directory</p>
</div>

```bash
monra list
```
**Aliases**: -l, --list

<div align="center">
  </br>
  <h2>run</h2>
  </br>
  <p>Run a command in one package, or in all packages</p>
</div>

```bash
monra run [directory-name || --global]
```
**Options**: -g or --global = Run a command in all packages
**Aliases**: r

<div align="center">
  </br>
  <h2>touch</h2>
  </br>
  <p>Create a file in a package or in all packages</p>
</div>

```bash
monra touch [directory-name || --global]
```
**Options**: -g or --global = Create file in all packages
**Aliases**: t

<div align="center">
  </br>
  <h2>mkdir</h2>
  </br>
  <p>Create a directory in a package or in all packages</p>
</div>

```bash
monra mkdir [directory-name || --global]
```
**Options**: -g or --global = Create a directory in all packages
**Aliases**: mk

<div align="center">
  </br>
  <h2>rm</h2>
  </br>
  <p>Remove a file from a package or from all packages</p>
</div>

```bash
monra rm [directory-name || --global]
```
**Options**: -g or --global = Remove file in all packages

<div align="center">
  </br>
  <h2>rmdir</h2>
  </br>
  <p>Remove a directory from a package or from all packages</p>
</div>

```bash
monra rmdir [directory-name || --global]
```
**Options**: -g or --global = Remove directory in all packages


<div align="center">
  </br>
  <h1>Help Individual</h1>
  </br>
  <p>Get help for a specific command</p>
</div>

```bash
monra [command] -h
```
**Aliases**: --help
