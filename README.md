# Gemini beefy plugin

Serve your gemini tests with [beefy](https://github.com/chrisdickinson/beefy).

Example `.gemini.yml` that also uses [gemini-sauce](https://github.com/Saulis/gemini-sauce):

```yml
rootUrl: http://127.0.0.1:9966
gridUrl: http://ondemand.saucelabs.com/wd/hub

plugins:
  sauce:
    username:
    accessKey:
  beefy:
    quiet: false
    entries:
      - page.js
    live: false
    watchify: false
    index: page.html
    bundlerFlags: '-p [css-modulesify -o dist/style.css]'
```

Note: this is experimental and has no tests at the moment.
Created for [this example](https://github.com/w0rm/react-image-regression-test-example).
