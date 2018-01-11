#!/usr/bin/env bash
#/bin/bash
set -x
echo Logging in to Amazon ECR...
$(aws ecr get-login --region us-east-1)
echo cd potassium-frontend-deploy en home
cd /home/ubuntu/potassium-frontend-deploy
cp ../conf/potassium-frontend-deploy.env /home/ubuntu/potassium-frontend-deploy/.env
echo docker-compose up
docker-compose -f docker-compose.production.yml pull && docker-compose -f docker-compose.production.yml up -d
