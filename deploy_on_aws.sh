#!/bin/bash
aws ecr get-login-password --region eu-west-1 | docker login --username AWS --password-stdin 701428029528.dkr.ecr.eu-west-1.amazonaws.com
docker build -t searcher-ninja-public-website .
docker tag searcher-ninja-public-website:latest 701428029528.dkr.ecr.eu-west-1.amazonaws.com/searcher-ninja-public-website:latest
docker push 701428029528.dkr.ecr.eu-west-1.amazonaws.com/searcher-ninja-public-website:latest