# guid-finder

cli-tool to find referenced file for unity

# Getting Started

`guid-finder` is cli-tool to find referenced file for unity.  
Recursively search the specified path and search for the file referring to the target guid.

## Install

```
$ npm install -g guid-finder
```

## Usage

```
$ guidf -g [guid] -p [path]
```

- [guid]: The guid specified by the Unity you want to search.
- [path]: Search target path.

## Options

### -g, --guid

type: `string` : required  
Target guid you want to search.

### -p, --path

type: `string` : optional  
Search target path.  
If not specified, the current directory will be used.

### -V, --version

Show version.

### -h, --help

Show options.

# Example

```
$ guidf -g 61a8c645ea58d43279eefb1183bbc0b4 -p ./
```

```
searching...
test/unity-project/Assets/Scenes/TopScene.unity
test/unity-project/Assets/Scenes/Used.prefab
```

# TODO

- Testing
- Support search by filename

# License

The MIT License (MIT)

Copyright 2018~ moshisora
