# Modules

This folder uses modules as the smallest unit. When compiling, it will be
packaged with index.ts in the module.

| Module       | Does it include sub-modules? | Need to bundle? |
| :----------- | ---------------------------: | --------------: |
| ./components |                          Yes |             Yes |
| ./colors     |                           No |             Yes |
| ./utils      |                           No |             Yes |
| ./tokens     |                           No |              No |
| ./internals  |                           No |             Yes |
