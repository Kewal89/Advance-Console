# Advance-Console
## WebPack Configration To Use For Browsers

<hr>

<h3>1. CRACO</h3><br>

> craco.config.js
```JavaScript
module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          "fs": false
        }
      }
    }
  }
}
```

<h3>2. WebPack</h3><br>

> webpack.config.js
```JavaScript
module.exports = {
  resolve: {
    fallback: {
      "fs": false
    }
  }
}
```