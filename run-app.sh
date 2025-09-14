#!/bin/bash

set -e

# Change these if your paths or commands are different
BACKEND_DIR="backend"
BACKEND_CMD="npm run dev"

FRONTEND_DIR="frontend"
FRONTEND_CMD="npm run dev"

# Function to check directory exists
check_directory() {
    if [ ! -d "$1" ]; then
        echo "❌ Directory '$1' not found!"
        exit 1
    fi
}

echo "🚀 Starting full stack app..."

# Start backend
check_directory "$BACKEND_DIR"
echo "➡️ Starting backend in '$BACKEND_DIR'..."
cd "$BACKEND_DIR"
$BACKEND_CMD &
BACKEND_PID=$!
cd - > /dev/null

# Start frontend
check_directory "$FRONTEND_DIR"
echo "➡️ Starting frontend in '$FRONTEND_DIR'..."
cd "$FRONTEND_DIR"
$FRONTEND_CMD &
FRONTEND_PID=$!
cd - > /dev/null

# Handle Ctrl+C to kill both
trap "echo '🛑 Stopping...'; kill $BACKEND_PID $FRONTEND_PID; exit" SIGINT

# Wait for both processes
wait $BACKEND_PID $FRONTEND_PID
