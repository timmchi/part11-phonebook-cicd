#!/bin/bash

echo "Build script"

npm install && cd frontend && npm install && cd ..
rm -rf dist && cd frontend && npm run build && cp -r dist ..