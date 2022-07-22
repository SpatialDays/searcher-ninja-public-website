#!/bin/bash
#!/bin/bash

# create variable called tag
tag="$1"

# if tag is not set use latest
if [ -z "$tag" ]; then
  tag="latest"
fi

aws ecr get-login-password --region eu-west-1 | docker login --username AWS --password-stdin 701428029528.dkr.ecr.eu-west-1.amazonaws.com
docker build -t searcher-ninja-public-website::${tag} .
docker tag searcher-ninja-public-website:${tag} 701428029528.dkr.ecr.eu-west-1.amazonaws.com/searcher-ninja-public-website:${tag}
docker push 701428029528.dkr.ecr.eu-west-1.amazonaws.com/searcher-ninja-public-website:${tag}
