#!/bin/bash
# Daily Blog Publisher for Gather
# Generates a new SEO-optimized blog post and pushes to GitHub
# Vercel auto-deploys on push

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(dirname "$SCRIPT_DIR")"

cd "$REPO_DIR"

echo "=== Gather Daily Blog Publisher ==="
echo "Date: $(date)"
echo ""

# Pull latest changes
echo "📥 Pulling latest from GitHub..."
git pull origin main || git pull origin master || true

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Generate new blog post
echo ""
echo "✍️  Generating new blog post..."
node scripts/generate-blog-post.js

# Check if there are changes
if git diff --quiet && git diff --staged --quiet; then
    echo "⚠️  No changes to commit"
    exit 0
fi

# Stage changes
echo ""
echo "📝 Staging changes..."
git add data/blog-posts/ data/blog-posts.json

# Get the title from the most recent markdown file
LATEST_POST=$(ls -t data/blog-posts/*.md | head -1)
POST_TITLE=$(grep -m1 "^title:" "$LATEST_POST" | sed 's/title: *"\(.*\)"/\1/' | sed "s/title: *'\(.*\)'/\1/")

# Commit
echo "💾 Committing..."
git commit -m "📝 New blog post: $POST_TITLE

Auto-generated SEO blog post for Gather
Generated: $(date '+%Y-%m-%d %H:%M:%S UTC')"

# Push to GitHub
echo ""
echo "🚀 Pushing to GitHub..."
git push origin main || git push origin master

echo ""
echo "✅ SUCCESS! Blog post published."
echo "Vercel will auto-deploy in ~1-2 minutes."
echo "Post: $POST_TITLE"
