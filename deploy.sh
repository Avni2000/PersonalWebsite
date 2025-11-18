#!/usr/bin/env bash

# Build and Deploy Script for PersonalWebsite

set -e  # Exit on error
npm run build -- --base=/~avni/


# Deploy using rsync over SSH
# The -avz flags: archive mode, verbose, compress
# --delete removes files on server that don't exist locally
rsync -avz --delete --progress \
  dist/ \
  avni@best-linux.cs.wisc.edu:~/public/html/

