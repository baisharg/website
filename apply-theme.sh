#!/bin/bash

# Apply Enhanced Theme to All HTML Pages
# This script applies the enhanced theme to all HTML pages in the website

echo "Applying Enhanced Theme to All HTML Pages..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed. Please install Node.js to run this script."
    exit 1
fi

# Run the apply-enhanced-theme.js script
node js/apply-enhanced-theme.js

echo "Theme application complete!"
echo "All HTML pages have been updated with the enhanced styling and animations."
