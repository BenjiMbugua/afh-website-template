#!/bin/sh
set -e

echo "Running Payload migrations..."
npx payload migrate

echo "Starting Next.js server..."
exec npm start
