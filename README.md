# semgrep-interfaces

This repository contains IDL (Interface Definition Language) files specifying
the interface between different Semgrep components (e.g., between
the semgrep CLI and the playground). It also includes the schema for Semgrep rules,
as both Semgrep and Semgrep App rely on this.

This repository is meant to be used as a submodule.

You may need to install opam and mypy as pre-requisites for contributing to this repository.

To update an interface:
1. Run `make setup`
2. Run `eval $(opam env)`
3. Make changes to the appropriate .atd file or edit `generate`
4. Run `make`. This will propagate that change to the respective .py, .ts, .ml, etc.
