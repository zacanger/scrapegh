#!/usr/bin/env node

var gs        = require('github-scraper')
  , user      = process.argv[2]
  , query     = process.argv[3]
  , repos     = '?tab=repositories'
  , activity  = '?tab=activity'
  , followers = '/followers'
  , following = '/following'
  , url

if(query && query == 'repos'){
  url = user + repos
}
else if(query && query == 'activity'){
  url = user + activity
}
else if(query && query == 'followers'){
  url = user + followers
}
else if(query && query == 'following'){
  url = user + following
}
else {
  url = user
}


gs(url, function(err, data){
  if(err){
    console.error(err)
  }
  console.log(data)
})

