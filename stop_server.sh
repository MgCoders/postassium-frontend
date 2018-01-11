#!/usr/bin/env bash
#/bin/bash
set -x

echo cd potassium-frontend-deploy en home
cd /home/ubuntu/potassium-frontend-deploy
echo docker-compose kill
docker-compose -f docker-compose.production.yml kill
