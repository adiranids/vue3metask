# Vue 3 Metamask Authentication

Easy to use and lightweight package to authenticate using Metamask wallet. Build with TypeScript.

## Installation

```
npm i @adiranids/vue3-metamask
```

## Usage 

```
<script setup lang="ts">
import {useMetamask} from "@adiranids/vue3-metamask"

const {isLoggedIn, connectWallet} = useMetamask()

</script>

<template>
  <button @click="connectWallet">
    {{isLoggedIn ? 'Connected' : 'Connect'}}
  </button>
</template>




```

The useMetamask composable returns following parameters

isLoggedIn = Returns true if the wallet is connected otherwise returns false

connectWallet = Callback that initiates Metamask login from the browser

address = Address string

isMetamaskSupported = Callback to check if Metamask is installed in the browser



# Issues

Any issues, kindly report here.


# License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


MIT License

Copyright (c) 2022 Adirani Digital Solutions Ltd

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.