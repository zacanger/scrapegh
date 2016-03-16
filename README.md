## scrapegh

This is a little command-line utility to scrape Github for useful things!

It's essentially just a wrapper around [this](https://github.com/nelsonic/github-scraper).

Usage:

```
scrapegh username
scrapegh username repos
scrapegh username activity
scrapegh username followers
scrapegh username following
```

It'll give you what you've asked for, in nice, pretty JSON.

Try it with [jq](https://stedolan.github.io/jq/): `scrapegh zacanger following | jq .`

Or with [ccat](https://github.com/jingweno/ccat): `scrapegh r-walsh | ccat`.

Or with [prettyjson](https://www.npmjs.com/package/prettyjson): `scrapegh geordyn repos | prettyjson`

Notes: Non-exsistent users will get a 404.  `activity` seems broken right now. Working on that.

The Future:
  * Features
  * Usability
  * Decent docs
  * Tests
  * Using all of `github-scraper`'s functionality in this tool.
  * Basically everything

