#!/bin/bash
ms=cloudhealth

echo "Cleaning postgres images and volumes"

images=$(docker ps -f "label=ms=$ms"| grep -v CONTAINER | awk '{print $1}')

if [[ ${#images} -gt 0 ]]; then
  docker rm -f $images >/dev/null 2>&1
fi

# Cleaning volumes
docker volume rm $(docker volume ls -qf dangling=true)
