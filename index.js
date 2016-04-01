#!/usr/bin/env node

'use strict'

const
  gs        = require('github-scraper')
, user      = process.argv[2]
, query     = process.argv[3]
, out       = process.stdout
, repos     = '?tab=repositories'
, followers = '/followers'
, following = '/following'
, starred   = '/stars/'

let url

console.log = function(){}

// no results
if (!user) {
  out.write('\nplease provide a username, and optionally a query.\n\n')
}

// right now, only one query is processed. i'll work on this
if (process.argv[4]) {
  out.write('\none query at a time, please!\n\n')
}

else if (user || query) {
  if (query == 'repos') {
    url = user + repos
  } else if (query == 'followers') {
    url = user + followers
  } else if (query == 'following') {
    url = user + following
  } else if (query == 'starred') {
    url = starred + user
  } else if (user) {
    url = user
  }

  // gs returns objects; we want json
  gs(url, (err, data) => {
    if (err) {
      console.error(err)
    }
    out.write('\n' + JSON.stringify(data, null, 2) + '\n\n')
    if (data.next_page) {
      gs(data.next_page, (err, data2) => {
        out.write('\n' + JSON.stringify(data2, null, 2) + '\n\n')
        // need to decide what the limit will be, here
        if (data.next_page) {
          console.log('\nplease visit the url for more pages of data!\n\n')
        }
      })
    }
  })
}
