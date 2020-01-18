#!/bin/bash
if [[ ${#PG_PORT} -gt 0 ]]; then
  echo "POSTGRES already started."
else
  ms=fortunehunter

  dir=$(dirname $0)
  PG_HOST=127.0.0.1
  PG_PORT=5432

  set -a
  . "$dir/config/test.env"
  containerId=$(docker run --rm --name "$ms" --label "ms=$ms" -e "POSTGRES_DB=$DB_DATABASE" -e "POSTGRES_USER=$DB_USER" -e "POSTGRES_PASSWORD=$DB_PASSWORD" -p "$PG_PORT:$PG_PORT" -d postgres:latest)

  $dir/scripts/wait-pg.sh $containerId $PG_HOST $PG_PORT $DB_USER $DB_PASSWORD $DB_DATABASE
  set +a

  export PG_CONTAINER=$containerId
fi

export DB_HOST="$PG_HOST"
export DB_PORT="$PG_PORT"
