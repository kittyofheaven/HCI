#!/bin/bash

# Create directories if they don't exist
mkdir -p img/maps

# Download map images
echo "Downloading Breeze map..."
curl -L "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt29d0d5c11a975d91/5eb7d76b6b7e0218f8f4e1d4/breeze_1.jpg" -o img/maps/breeze.png

echo "Downloading Fracture map..."
curl -L "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0ac5d73b0081f391/6131a93d71ca312b0b6e8c7a/fracture_1.jpg" -o img/maps/fracture.png

echo "Download complete!" 