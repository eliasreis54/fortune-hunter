#!/bin/bash
container=$1
host=$2
port=$3
user=$4
password=$5
database=$6

echo "Waiting database connection"
until docker exec "$container" psql "postgres://$user:$password@$host:$port/$database" -c "select 1" > /dev/null 2>&1;
do
  printf "."
  sleep 1
done
echo -e "\ndatabase is ready!"
