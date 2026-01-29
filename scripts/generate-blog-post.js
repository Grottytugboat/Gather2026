#!/usr/bin/env node

/**
 * Automated SEO Blog Post Generator for Gather
 * Generates daily blog posts optimized for:
 * - Lightspeed POS + Klaviyo integration keywords
 * - Retail data integration
 * - Email marketing for retail
 */

const fs = require('fs').promises;
const path = require('path');
const { marked } = require('marked');
const matter = require('gray-matter');

// Blog post topics bank - SEO-optimized for Gather's target audience
const TOPIC_TEMPLATES = [
  // Lightspeed specific
  { keyword: "lightspeed pos integration", title: "Lightspeed POS Integration: {year} Complete Setup Guide", category: "Integration Guides" },
  { keyword: "lightspeed klaviyo sync", title: "How to Sync Lightspeed Data to Klaviyo (Step-by-Step)", category: "Integration Guides" },
  { keyword: "lightspeed email marketing", title: "Email Marketing for Lightspeed Users: The Ultimate {year} Guide", category: "Email Marketing" },
  { keyword: "lightspeed x-series klaviyo", title: "Lightspeed X-Series + Klaviyo: Integration Best Practices", category: "Integration Guides" },
  { keyword: "lightspeed customer data", title: "How to Leverage Lightspeed Customer Data for Marketing", category: "Strategy" },
  { keyword: "lightspeed retail automation", title: "Retail Automation with Lightspeed: Save 10+ Hours Weekly", category: "Strategy" },
  { keyword: "lightspeed vs square integration", title: "Lightspeed vs Square: Which Has Better Email Integration?", category: "Comparisons" },
  { keyword: "lightspeed loyalty klaviyo", title: "Sync Lightspeed Loyalty Data to Klaviyo: Complete Guide", category: "Integration Guides" },
  
  // Klaviyo specific
  { keyword: "klaviyo pos integration", title: "Klaviyo POS Integration: Connect Your Retail Store in {year}", category: "Integration Guides" },
  { keyword: "klaviyo retail segmentation", title: "Klaviyo Segmentation for Retail: {count} Powerful Segments", category: "Email Marketing" },
  { keyword: "klaviyo abandoned cart retail", title: "Abandoned Cart Flows for Retail Stores in Klaviyo", category: "Email Marketing" },
  { keyword: "klaviyo win-back campaigns", title: "Win-Back Email Campaigns: Klaviyo Best Practices for Retail", category: "Email Marketing" },
  { keyword: "klaviyo vs mailchimp retail", title: "Klaviyo vs Mailchimp for Retail: {year} Comparison", category: "Comparisons" },
  { keyword: "klaviyo customer lifetime value", title: "Track Customer Lifetime Value in Klaviyo with POS Data", category: "Strategy" },
  
  // Retail data integration
  { keyword: "retail data integration", title: "Retail Data Integration: The Complete {year} Playbook", category: "Best Practices" },
  { keyword: "omnichannel retail data", title: "Omnichannel Data Strategy for Retailers: A Practical Guide", category: "Strategy" },
  { keyword: "pos to email sync", title: "POS to Email Sync: Why Real-Time Matters for Retail", category: "Best Practices" },
  { keyword: "retail customer data platform", title: "Building a Customer Data Platform for Your Retail Store", category: "Strategy" },
  { keyword: "in-store email capture", title: "In-Store Email Capture: {count} Strategies That Actually Work", category: "Best Practices" },
  
  // Specific use cases
  { keyword: "post purchase email retail", title: "Post-Purchase Email Flows for Retail: Boost Repeat Sales", category: "Email Marketing" },
  { keyword: "retail vip program email", title: "VIP Customer Programs: Email Strategies for Retail", category: "Strategy" },
  { keyword: "seasonal retail email marketing", title: "Seasonal Email Marketing for Retail: Planning Guide", category: "Strategy" },
  { keyword: "retail sms marketing", title: "SMS Marketing for Retail: Integrating with Your POS", category: "Strategy" },
  { keyword: "retail customer retention", title: "Customer Retention for Retail: {count} Proven Strategies", category: "Strategy" },
  
  // Problem/solution
  { keyword: "duplicate customer profiles", title: "How to Fix Duplicate Customer Profiles in Klaviyo", category: "Troubleshooting" },
  { keyword: "retail data silos", title: "Breaking Down Retail Data Silos: Integration Solutions", category: "Best Practices" },
  { keyword: "email deliverability retail", title: "Email Deliverability for Retail: Best Practices Guide", category: "Email Marketing" },
  { keyword: "retail marketing automation mistakes", title: "{count} Marketing Automation Mistakes Retailers Make", category: "Best Practices" },
  
  // Industry specific
  { keyword: "fashion retail email marketing", title: "Email Marketing for Fashion Retailers: {year} Trends", category: "Industry" },
  { keyword: "health beauty retail klaviyo", title: "Klaviyo for Health & Beauty Retail: Complete Guide", category: "Industry" },
  { keyword: "sporting goods email marketing", title: "Email Marketing for Sporting Goods Retailers", category: "Industry" },
  { keyword: "home goods retail integration", title: "Home Goods Retailers: Email Integration Best Practices", category: "Industry" },
  
  // Agency focused
  { keyword: "retail agency email marketing", title: "Agency Guide: Managing Retail Email Marketing Clients", category: "Agency" },
  { keyword: "white label pos integration", title: "White-Label POS Integration for Marketing Agencies", category: "Agency" },
  { keyword: "retail client reporting", title: "Reporting for Retail Clients: Templates and Best Practices", category: "Agency" },
];

// Generate a slug from title
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 80);
}

// Get today's date in YYYY-MM-DD format
function getTodayDate() {
  return new Date().toISOString().split('T')[0];
}

// Get current year
function getCurrentYear() {
  return new Date().getFullYear();
}

// Pick a topic that hasn't been used recently
async function pickTopic(existingSlugs) {
  const year = getCurrentYear();
  const counts = [5, 7, 10, 12, 15]; // For "{count}" templates
  
  // Shuffle topics
  const shuffled = [...TOPIC_TEMPLATES].sort(() => Math.random() - 0.5);
  
  for (const topic of shuffled) {
    let title = topic.title
      .replace('{year}', year)
      .replace('{count}', counts[Math.floor(Math.random() * counts.length)]);
    
    const slug = generateSlug(title);
    
    // Check if this slug already exists
    if (!existingSlugs.includes(slug)) {
      return { ...topic, title, slug };
    }
  }
  
  // If all topics used, add a random suffix
  const topic = shuffled[0];
  const suffix = Date.now().toString(36).slice(-4);
  let title = topic.title
    .replace('{year}', year)
    .replace('{count}', counts[Math.floor(Math.random() * counts.length)]);
  title = `${title} [Updated]`;
  
  return { ...topic, title, slug: generateSlug(title) };
}

// Generate the full blog post content
function generateBlogContent(topic) {
  const year = getCurrentYear();
  
  // This is a template system - in production you'd want AI generation
  // For now, creating high-quality structured content
  
  const content = `# ${topic.title}

${getIntroduction(topic)}

## Why This Matters for Retailers

${getWhyItMatters(topic)}

## Key Benefits

${getBenefits(topic)}

## Step-by-Step Implementation

${getImplementation(topic)}

## Best Practices

${getBestPractices(topic)}

## Common Mistakes to Avoid

${getCommonMistakes(topic)}

## Measuring Success

${getMeasuringSuccess(topic)}

## Tools and Resources

${getToolsSection(topic)}

## Conclusion

${getConclusion(topic)}

---

**Ready to implement this for your retail business?** Start your free 14-day trial with Gather and connect your POS to Klaviyo in under 20 minutes.
`;

  return content;
}

function getIntroduction(topic) {
  const intros = {
    "Integration Guides": `Integrating your retail systems shouldn't require a developer or weeks of setup. In this guide, we'll walk through exactly how to ${topic.keyword.replace(/-/g, ' ')} and start seeing results immediately.

Whether you're managing a single location or multiple stores, this step-by-step guide covers everything you need to know.`,
    
    "Email Marketing": `Email marketing drives 30-40% of revenue for successful retailers, but only when you have the right data. Without proper integration, you're sending emails blind—missing purchase history, customer preferences, and critical segmentation data.

This guide shows you how to leverage ${topic.keyword.replace(/-/g, ' ')} to create campaigns that actually convert.`,
    
    "Strategy": `Retail success in ${new Date().getFullYear()} requires more than great products—it requires smart data strategy. Retailers who unify their customer data see 25-40% higher marketing ROI and 2-3x better customer lifetime value.

Let's explore how to implement ${topic.keyword.replace(/-/g, ' ')} for your business.`,
    
    "Comparisons": `Choosing the right tools can make or break your retail marketing. With so many options available, it's crucial to understand the real differences—not just feature lists, but actual impact on your business.

We've tested both options extensively and here's what we found.`,
    
    "Best Practices": `After working with hundreds of retailers, we've identified the patterns that separate high-performers from those struggling with their marketing. The difference often comes down to implementation details that most guides skip.

Here's what actually works.`,
    
    "Troubleshooting": `If you're facing challenges with ${topic.keyword.replace(/-/g, ' ')}, you're not alone. This is one of the most common issues we see, and thankfully, it's very solvable.

Let's walk through the diagnosis and fix.`,
    
    "Industry": `Every retail vertical has unique challenges and opportunities. What works for fashion doesn't always work for sporting goods. In this guide, we focus specifically on strategies proven to work in your industry.`,
    
    "Agency": `Managing multiple retail clients requires efficiency at scale. The strategies that work for a single store often break down when you're handling 10, 50, or 100+ clients.

Here's how top agencies handle ${topic.keyword.replace(/-/g, ' ')}.`,
  };
  
  return intros[topic.category] || intros["Strategy"];
}

function getWhyItMatters(topic) {
  return `Modern retail runs on data, but that data is scattered across systems:

- **POS systems** hold in-store transaction history
- **Ecommerce platforms** track online purchases
- **Email tools** see only subscriber behavior
- **Loyalty programs** have points and tier data

Without integration, each system has partial truth. Your email platform doesn't know about in-store purchases. Your POS doesn't know about email engagement. The result? Poor segmentation, wasted sends, and missed opportunities.

**The numbers don't lie:**
- 67% of retail purchases still happen in-store
- Omnichannel customers have 30% higher lifetime value
- Unified data leads to 25-40% increase in marketing ROI

This isn't optional anymore—it's table stakes for competing in ${new Date().getFullYear()}.`;
}

function getBenefits(topic) {
  return `### 1. Unified Customer View
See complete purchase history across all channels. No more separate profiles for the same customer.

### 2. Better Segmentation
Target customers based on actual behavior—not just email opens, but real purchases across all touchpoints.

### 3. Automated Personalization
Trigger the right message at the right time based on complete customer data.

### 4. Accurate Attribution
Finally measure true marketing ROI by tracking full customer journeys.

### 5. Time Savings
Eliminate manual data exports, CSV uploads, and duplicate cleanup.

### 6. Higher Revenue
Retailers who implement proper integration see 20-40% increases in email-attributed revenue within 3-6 months.`;
}

function getImplementation(topic) {
  return `### Step 1: Audit Your Current Setup

Before connecting anything, document what you have:
- List all systems that hold customer data
- Identify your "source of truth" for each data type
- Note any existing integrations (even manual ones)

### Step 2: Choose Your Integration Method

**Option A: Purpose-Built Platform (Recommended)**
- Tools like Gather are built specifically for retail
- Real-time sync, automatic deduplication
- 20-minute setup, flat pricing
- Best for: Most retailers

**Option B: Native Integrations**
- Use built-in connectors when available
- Free but often limited
- Best for: Very simple needs

**Option C: Zapier/Automation Tools**
- Flexible but expensive at scale
- Requires ongoing maintenance
- Best for: Unique requirements

### Step 3: Connect Your Systems

For most retailers using Lightspeed + Klaviyo:

1. Sign up for Gather (14-day free trial)
2. Connect Lightspeed via OAuth (2 minutes)
3. Connect Klaviyo with your API key
4. Configure filtering (exclude wholesale, staff, etc.)
5. Let historical data sync (1-24 hours)
6. Verify data in Klaviyo

### Step 4: Build Your Foundation

Start with these essential segments:
- **In-store only customers** (opportunity to convert to online)
- **Omnichannel customers** (your VIPs)
- **High-value customers** (based on total spend, not just online)
- **At-risk customers** (no purchase in 60-90 days)

### Step 5: Launch Core Flows

Don't overthink it—start with:
1. Welcome flow (for new POS customers)
2. Post-purchase thank you (acknowledges in-store purchase)
3. Win-back flow (based on ALL purchase history)`;
}

function getBestPractices(topic) {
  return `### Clean Your Data First
Don't sync garbage. Remove test customers, fix duplicates, and standardize records before connecting systems.

### Filter Strategically
Not all POS data belongs in your email platform:
- Exclude wholesale accounts
- Filter staff purchases
- Skip test transactions
- Respect opt-out status

### Map Fields Correctly
Ensure data lands in the right places:
- Customer ID → External ID (for matching)
- Store location → Custom property (for geo-targeting)
- Purchase channel → Custom property (for segmentation)

### Test Before Full Launch
Create test segments before going live:
- Verify data accuracy
- Check for duplicates
- Test flow triggers
- Confirm consent mapping

### Document Everything
Future-you will thank you:
- Record all field mappings
- Note filtering rules
- Document edge cases
- Keep credentials secure`;
}

function getCommonMistakes(topic) {
  return `### Mistake 1: Syncing Without Filtering
Sending marketing emails to wholesale accounts or staff purchases tanks deliverability and wastes budget.

**Fix:** Set up proper filters before enabling sync.

### Mistake 2: Ignoring Duplicates
Multiple profiles for the same customer leads to:
- Wasted email sends
- Confused segmentation
- Inaccurate LTV calculations

**Fix:** Use a tool with built-in deduplication or implement merge rules.

### Mistake 3: Waiting for Perfect Data
Analysis paralysis kills more integrations than bad data. You can always improve later.

**Fix:** Start simple. Connect, verify, launch basic flows. Optimize over time.

### Mistake 4: Not Capturing Consent
Syncing customers who didn't opt in creates compliance nightmares.

**Fix:** Map POS consent flags to email consent. Train staff to capture opt-ins.

### Mistake 5: Set-and-Forget
Integrations need maintenance. APIs change, systems update, edge cases emerge.

**Fix:** Schedule monthly integration audits. Monitor sync health weekly.`;
}

function getMeasuringSuccess(topic) {
  return `### Technical Metrics

Track integration health:
- **Sync success rate**: Target 99%+
- **Data freshness**: Real-time preferred, <1 hour acceptable
- **Duplicate rate**: Target <1%
- **Error rate**: Target <0.5%

### Business Metrics

Measure what matters:
- **Email revenue %**: Target 25-30% of total revenue
- **Customer LTV**: Should increase 2-3x for synced customers
- **Retention rate**: Target 30% improvement
- **Time saved**: Track hours of manual work eliminated

### ROI Calculation

**Example for a $100k/month retailer:**
- Integration cost: $99/month (Gather)
- Revenue increase: 15% = $15,000/month
- Time saved: 20 hours × $50/hour = $1,000/month
- **Total benefit: $16,000/month**
- **ROI: 161x**`;
}

function getToolsSection(topic) {
  return `### Integration Platforms
- **Gather** (recommended): Purpose-built for retail, flat pricing, real-time sync
- **Zapier**: Flexible but expensive at scale
- **Alloy Automation**: Enterprise option

### Email Platforms
- **Klaviyo**: Best for serious retail email marketing
- **Mailchimp**: Budget-friendly starter option
- **Omnisend**: Good for omnichannel

### POS Systems with Good Integration Support
- **Lightspeed X-Series**: Excellent API, multiple integration options
- **Square**: Good native integrations
- **Shopify POS**: Seamless with Shopify ecosystem

### Learning Resources
- Klaviyo Academy (free courses)
- Gather documentation and guides
- Retail email marketing communities`;
}

function getConclusion(topic) {
  return `${topic.title.replace(/:.*/g, '')} isn't just a nice-to-have—it's essential for competing in modern retail. The retailers winning today have unified their data, automated their marketing, and freed up time to focus on what matters: serving customers.

The good news? Implementation is easier than ever. With the right tools, you can go from disconnected systems to unified data in a single afternoon.

**Start with one integration.** Connect your POS to your email platform. Build a basic welcome flow. Measure results. Then expand from there.

The retailers who wait will keep struggling with data silos, manual exports, and incomplete customer views. The retailers who act now will build competitive advantages that compound over time.

Which will you be?`;
}

// Parse markdown to HTML
function markdownToHtml(markdown) {
  return marked(markdown);
}

// Generate excerpt from content
function generateExcerpt(content, maxLength = 200) {
  // Remove markdown formatting
  const text = content
    .replace(/^#+ .*/gm, '') // Remove headers
    .replace(/\*\*/g, '') // Remove bold
    .replace(/\*/g, '') // Remove italic
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Replace links with text
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim();
  
  return text.length > maxLength 
    ? text.substring(0, maxLength) + '...'
    : text;
}

// Main function
async function main() {
  const blogPostsDir = path.join(__dirname, '..', 'data', 'blog-posts');
  const blogPostsJsonPath = path.join(__dirname, '..', 'data', 'blog-posts.json');
  
  try {
    // Read existing posts
    let existingData;
    try {
      const jsonContent = await fs.readFile(blogPostsJsonPath, 'utf8');
      existingData = JSON.parse(jsonContent);
    } catch {
      existingData = { posts: [], lastSync: null, syncCount: 0 };
    }
    
    const existingSlugs = existingData.posts.map(p => p.slug);
    
    // Pick a topic
    const topic = await pickTopic(existingSlugs);
    console.log(`Generating blog post: ${topic.title}`);
    
    // Generate content
    const markdownContent = generateBlogContent(topic);
    const date = getTodayDate();
    
    // Create frontmatter
    const frontmatter = {
      title: topic.title,
      description: `${topic.title.replace(/:.*/g, '')}. Learn best practices, step-by-step implementation, and expert tips for ${topic.keyword}.`,
      date: date,
      category: topic.category,
      slug: topic.slug,
    };
    
    // Create full markdown with frontmatter
    const fullMarkdown = matter.stringify(markdownContent, frontmatter);
    
    // Save markdown file
    const markdownPath = path.join(blogPostsDir, `${topic.slug}.md`);
    await fs.writeFile(markdownPath, fullMarkdown, 'utf8');
    console.log(`Saved markdown: ${markdownPath}`);
    
    // Generate HTML
    const htmlContent = markdownToHtml(markdownContent);
    
    // Create blog post object
    const newPost = {
      slug: topic.slug,
      title: topic.title,
      description: frontmatter.description,
      date: date,
      category: topic.category,
      content: htmlContent,
      excerpt: generateExcerpt(markdownContent),
    };
    
    // Add to existing posts
    existingData.posts.unshift(newPost);
    existingData.lastSync = new Date().toISOString();
    existingData.syncCount = (existingData.syncCount || 0) + 1;
    
    // Save JSON
    await fs.writeFile(blogPostsJsonPath, JSON.stringify(existingData, null, 2), 'utf8');
    console.log('Updated blog-posts.json');
    
    // Output for cron job
    console.log(`\nSUCCESS: Generated "${topic.title}"`);
    console.log(`Slug: ${topic.slug}`);
    console.log(`Category: ${topic.category}`);
    
    return { success: true, slug: topic.slug, title: topic.title };
    
  } catch (error) {
    console.error('Error generating blog post:', error);
    return { success: false, error: error.message };
  }
}

// Run
main();
