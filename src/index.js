#!/usr/bin/env node

'use strict'

const
  gs        = require('github-scraper')
, user      = process.argv[2]
, query     = process.argv[3]
, repos     = '?tab=repositories'
, activity  = '?tab=activity'
, followers = '/followers'
, following = '/following'

let url

// no results
if(!user){
  console.log('please provide a username, and optionally a query.')
}

// right now, only one query is processed.
// i'll work on this.
if(process.argv[4]){
  console.log('one query at a time, please!')
}

else if(user || query){
  if(query == 'repos'){
    url = user + repos
  } else if(query == 'activity'){
    url = user + activity
  } else if(query == 'followers'){
    url = user + followers
  } else if(query == 'following'){
    url = user + following
  } else if(user){
    url = user
  }

  // gs returns objects; we want json
  gs(url, function(err, data){
    if(err){
      console.error(err)
    }
    console.log(JSON.stringify(data, null, 2))
  })

}

