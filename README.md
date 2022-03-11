### Hexlet tests and linter status:
[![Actions Status](https://github.com/AnnAErmak/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/AnnAErmak/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/b0bc0c01000448648233/maintainability)](https://codeclimate.com/github/AnnAErmak/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b0bc0c01000448648233/test_coverage)](https://codeclimate.com/github/AnnAErmak/frontend-project-lvl2/test_coverage)

# Gendiff
Allows you to find the differences between two configuration files. Supports two formats json  и yaml

## Usage
```  
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Arguments:
filepath1            path to file1
filepath2            path to file2

Options:
-V, --version        output the version number
-f, --format [type]  output format [stylish, plain, json] (default: "stylish")
-h, --help           display help for command
```
___
## Installation
Clone this repo
```
make install
make link  
```

___
## Examples
#### Flat file comparison .json .yml
[![asciicast](https://asciinema.org/a/eMqMXy6c6lvwcTnsjRk4QHzdM.svg)](https://asciinema.org/a/eMqMXy6c6lvwcTnsjRk4QHzdM)

#### Comparison .json .yml files with nesting
- stylish

[![asciicast](https://asciinema.org/a/cfFM8fgGOPWtiLeRFKFD78q3k.svg)](https://asciinema.org/a/cfFM8fgGOPWtiLeRFKFD78q3k)
- plain

[![asciicast](https://asciinema.org/a/9RI9LDY4etkPpd8ZM5oW2FkdE.svg)](https://asciinema.org/a/9RI9LDY4etkPpd8ZM5oW2FkdE)
- json

[![asciicast](https://asciinema.org/a/dfAouH73RxEkXj7onWvgrpvya.svg)](https://asciinema.org/a/dfAouH73RxEkXj7onWvgrpvya)
