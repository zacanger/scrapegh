## scrapegh

## DEPRECATED

GitHub's markup and CSS keep changing, and it's not worth it to me to keep this
updated, since that means constantly patching deps. Sorry, folks.

--------

This is a little command-line utility to scrape Github for useful things!

It's essentially just a wrapper around [this](https://github.com/nelsonic/github-scraper).

Installation: `npm i -g scrapegh`.

Usage:

```
scrapegh username
scrapegh username repos
scrapegh username followers
scrapegh username following
scrapegh username starred
scrapegh username reponame
```

* You can see the above with `scrapegh -h`.
* It'll give you what you've asked for, in nice, pretty JSON.
* Try it with [jq](https://stedolan.github.io/jq/): `scrapegh zacanger following | jq .`
* Or with [ccat](https://github.com/jingweno/ccat): `scrapegh r-walsh | ccat`.
* Or with [prettyjson](https://www.npmjs.com/package/prettyjson): `scrapegh geordyn repos | prettyjson`
* Or just on its own: `scrapegh pharaoh-js pharaoh`

* To do:
  * Better message (instead of 404) for non-existent users
  * Better way to get rid of the banner text
  * Features
  * Usability
  * Decent docs
  * Tests
  * Using all of `github-scraper`'s functionality in this tool.
  * Basically everything
