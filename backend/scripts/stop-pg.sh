#!/bin/bash
if [[ ${#PG_CONTAINER} -eq 0 ]]; then
   echo "No POSTGRES to kill"
   exit 0
fi

echo "Killing POSTGRES: $PG_CONTAINER"
docker rm -f $PG_CONTAINER >/dev/null 2>&1
