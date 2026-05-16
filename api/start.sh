# This tells the system: “Run this file using the shell”
#!/bin/sh

echo "Starting app..."

# Run seed / migrations
npm run seed

# Start the server
npm run prod