(()=>{var e={};e.id=404,e.ids=[404],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3989:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>m,tree:()=>c});var r=a(482),s=a(9108),i=a(2563),o=a.n(i),n=a(8300),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);a.d(t,l);let c=["",{children:["blog",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,2163)),"/Users/eliaserpakulla/prop-firms-nextjs/app/blog/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,2917)),"/Users/eliaserpakulla/prop-firms-nextjs/app/layout.tsx"],error:[()=>Promise.resolve().then(a.bind(a,429)),"/Users/eliaserpakulla/prop-firms-nextjs/app/error.tsx"],loading:[()=>Promise.resolve().then(a.bind(a,7984)),"/Users/eliaserpakulla/prop-firms-nextjs/app/loading.tsx"],"not-found":[()=>Promise.resolve().then(a.bind(a,1429)),"/Users/eliaserpakulla/prop-firms-nextjs/app/not-found.tsx"]}],d=["/Users/eliaserpakulla/prop-firms-nextjs/app/blog/page.tsx"],p="/blog/page",u={require:a,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/blog/page",pathname:"/blog",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},9532:(e,t,a)=>{Promise.resolve().then(a.bind(a,2504))},2504:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>N});var r=a(5344),s=a(3729),i=a(4339),o=a(9119),n=a(9224);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,n.Z)("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]),c=(0,n.Z)("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),d=(0,n.Z)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);var p=a(4087),u=a(5299);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let m=(0,n.Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),h=(0,n.Z)("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]),g=(0,n.Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);var f=a(6153),x=a(9851),y=a(7126),w=a(6506),v=a(9410);let b=[{name:"All",icon:l},{name:"Trading Guide",icon:c},{name:"Trading Strategies",icon:l},{name:"Risk Management",icon:l},{name:"Trading Psychology",icon:l},{name:"Trading Tools",icon:l}],k={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6}}};function j({post:e}){return r.jsx(i.E.article,{variants:k,className:"group bg-bg-light border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-300",children:(0,r.jsxs)(w.default,{href:`/blog/${e.slug}`,children:[(0,r.jsxs)("div",{className:"relative h-48 overflow-hidden",children:[r.jsx("span",{className:"absolute top-4 left-4 z-20 px-3 py-1.5 bg-primary/90 rounded-full text-xs font-semibold text-white",children:e.category}),r.jsx(v.default,{src:e.image,alt:e.title,fill:!0,className:"object-cover transition-transform duration-500 group-hover:scale-110"})]}),(0,r.jsxs)("div",{className:"p-6",children:[(0,r.jsxs)("div",{className:"flex items-center gap-4 text-text-dim text-sm mb-3",children:[(0,r.jsxs)("span",{className:"flex items-center gap-1",children:[r.jsx(d,{className:"w-4 h-4"}),new Date(e.date).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})]}),(0,r.jsxs)("span",{className:"flex items-center gap-1",children:[r.jsx(p.Z,{className:"w-4 h-4"}),e.readTime]})]}),r.jsx("h3",{className:"text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary-light transition-colors",children:e.title}),r.jsx("p",{className:"text-text-muted text-sm line-clamp-2 mb-4",children:e.excerpt}),(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[r.jsx(v.default,{src:e.authorImage,alt:e.author,width:32,height:32,className:"w-8 h-8 rounded-full object-cover"}),r.jsx("span",{className:"text-sm text-text-muted",children:e.author})]}),(0,r.jsxs)("span",{className:"flex items-center gap-1 text-primary-light text-sm font-medium group-hover:gap-2 transition-all",children:["Read More ",r.jsx(u.Z,{className:"w-4 h-4"})]})]})]})]})})}function T({post:e}){return(0,r.jsxs)(i.E.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"relative grid lg:grid-cols-2 gap-8 bg-bg-light border border-white/10 rounded-3xl overflow-hidden mb-12",children:[r.jsx("div",{className:"relative h-64 lg:h-auto overflow-hidden",children:r.jsx(v.default,{src:e.image,alt:e.title,fill:!0,className:"object-cover"})}),(0,r.jsxs)("div",{className:"p-8 lg:p-12 flex flex-col justify-center",children:[(0,r.jsxs)("div",{className:"flex items-center gap-3 mb-4",children:[r.jsx("span",{className:"px-3 py-1.5 bg-gradient-to-r from-primary to-purple-500 rounded-full text-xs font-semibold text-white",children:"Featured Article"}),r.jsx("span",{className:"text-text-dim text-sm",children:e.category})]}),r.jsx("h2",{className:"text-2xl lg:text-3xl font-bold mb-4",children:e.title}),r.jsx("p",{className:"text-text-muted mb-6 line-clamp-3",children:e.excerpt}),(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[r.jsx(v.default,{src:e.authorImage,alt:e.author,width:40,height:40,className:"w-10 h-10 rounded-full object-cover"}),(0,r.jsxs)("div",{children:[r.jsx("p",{className:"font-medium",children:e.author}),r.jsx("p",{className:"text-text-dim text-sm",children:e.readTime})]})]}),r.jsx(w.default,{href:`/blog/${e.slug}`,className:"px-6 py-3 bg-gradient-to-r from-primary to-purple-500 rounded-xl text-white font-semibold hover:shadow-lg transition-all",children:"Read Article"})]})]})]})}function N(){let[e,t]=(0,s.useState)(""),[a,n]=(0,s.useState)("All"),[l,d]=(0,s.useState)(!1),p=y.nd.find(e=>e.featured),u=y.nd.filter(t=>{let r=t.title.toLowerCase().includes(e.toLowerCase())||t.excerpt.toLowerCase().includes(e.toLowerCase()),s="All"===a||t.category===a;return r&&s&&t!==p}).slice(0,6);return(0,r.jsxs)("main",{className:"min-h-screen",children:[r.jsx(f.default,{}),r.jsx("section",{className:"pt-32 pb-20",children:r.jsx("div",{className:"max-w-7xl mx-auto px-6",children:(0,r.jsxs)(i.E.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},className:"text-center max-w-4xl mx-auto",children:[(0,r.jsxs)("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-bold mb-6",children:["Our ",r.jsx("span",{className:"gradient-text",children:"Blog"})]}),r.jsx("p",{className:"text-xl text-text-muted max-w-2xl mx-auto",children:"Expert insights, trading strategies, and prop firm tips."})]})})}),r.jsx("section",{className:"py-8 -mt-10 relative z-20",children:r.jsx("div",{className:"max-w-7xl mx-auto px-6",children:(0,r.jsxs)("div",{className:"bg-bg-light border border-white/10 rounded-2xl p-6",children:[(0,r.jsxs)("div",{className:"flex flex-col lg:flex-row gap-4",children:[(0,r.jsxs)("div",{className:"relative flex-1",children:[r.jsx(m,{className:"absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-dim"}),r.jsx("input",{type:"text",placeholder:"Search articles...",value:e,onChange:e=>t(e.target.value),className:"w-full bg-background border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-text-dim focus:outline-none focus:border-primary"})]}),(0,r.jsxs)("button",{onClick:()=>d(!l),className:"flex items-center justify-center gap-2 px-6 py-3 bg-background border border-white/10 rounded-xl text-white hover:border-primary/50 transition-all",children:[r.jsx(h,{className:"w-5 h-5"}),a,r.jsx(g,{className:`w-4 h-4 transition-transform ${l?"rotate-180":""}`})]})]}),r.jsx(o.M,{children:l&&r.jsx(i.E.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"overflow-hidden",children:r.jsx("div",{className:"flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10",children:b.map(e=>(0,r.jsxs)("button",{onClick:()=>{n(e.name),d(!1)},className:`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${a===e.name?"bg-primary text-white":"bg-background text-text-muted hover:text-white border border-white/10"}`,children:[r.jsx(e.icon,{className:"w-4 h-4"}),e.name]},e.name))})})})]})})}),p&&"All"===a&&!e&&r.jsx("section",{className:"py-12",children:r.jsx("div",{className:"max-w-7xl mx-auto px-6",children:r.jsx(T,{post:p})})}),r.jsx("section",{className:"py-12 pb-24",children:(0,r.jsxs)("div",{className:"max-w-7xl mx-auto px-6",children:[r.jsx(i.E.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-6",children:u.map(e=>r.jsx(j,{post:e},e.slug))}),0===u.length&&(0,r.jsxs)("div",{className:"text-center py-16",children:[r.jsx(c,{className:"w-16 h-16 text-text-dim mx-auto mb-4"}),r.jsx("h3",{className:"text-xl font-bold mb-2",children:"No articles found"}),r.jsx("p",{className:"text-text-muted",children:"Try adjusting your search"})]})]})}),r.jsx("section",{className:"py-24 relative overflow-hidden",children:(0,r.jsxs)("div",{className:"max-w-4xl mx-auto px-6 text-center",children:[r.jsx("h2",{className:"text-3xl font-bold mb-6",children:"Stay Updated"}),r.jsx("p",{className:"text-text-muted mb-8",children:"Get the latest trading insights delivered to your inbox."}),(0,r.jsxs)("div",{className:"flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto",children:[r.jsx("input",{type:"email",placeholder:"Enter your email",className:"flex-1 bg-bg-light border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-text-dim focus:outline-none focus:border-primary"}),r.jsx("button",{className:"px-8 py-3 bg-gradient-to-r from-primary to-primary-dark rounded-xl text-white font-semibold hover:shadow-lg transition-all",children:"Subscribe"})]})]})}),r.jsx(x.default,{})]})}},7126:(e,t,a)=>{"use strict";a.d(t,{EE:()=>i,nd:()=>r,zQ:()=>s});let r=[{slug:"complete-guide-prop-trading-2024",title:"Complete Guide to Prop Trading in 2024",excerpt:"Everything you need to know about becoming a funded trader, from evaluation processes to scaling your account to millions.",content:`
# Complete Guide to Prop Trading in 2024

Prop trading firms have revolutionized the way traders access capital. In this comprehensive guide, we'll walk you through everything you need to know about becoming a funded trader.

## What is Prop Trading?

Proprietary trading firms provide capital to traders, allowing them to trade financial markets with the firm's money instead of their own. This eliminates the risk to your personal funds while still giving you the opportunity to earn significant profits.

## The Evaluation Process

Most prop firms require traders to complete an evaluation period. Here's what typically happens:

1. **Choose Your Account Size** - Select from various funding levels based on your experience
2. **Meet Profit Targets** - Achieve specified returns while following risk rules
3. **Stay Within Drawdown Limits** - Maintain discipline with maximum loss thresholds

## Key Strategies for Success

### Risk Management
- Never risk more than 2% per trade
- Use proper position sizing
- Set stop losses religiously

### Trading Psychology
- Stick to your trading plan
- Don't revenge trade after losses
- Keep a trading journal

## Scaling Your Account

Once funded, consistent traders can scale up to $2M or more in capital. This growth comes from proving your ability to generate returns while managing risk effectively.

## Conclusion

Prop trading offers an incredible opportunity for talented traders to access institutional-level capital. With the right approach and discipline, you can build a successful trading career without risking your personal savings.
    `,category:"Trading Guide",author:"Marcus Chen",authorImage:"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",date:"2024-04-15",readTime:"8 min read",image:"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",featured:!0},{slug:"risk-management-rules-funded-traders",title:"10 Risk Management Rules Every Funded Trader Must Know",excerpt:"Learn the essential risk management principles that top funded traders use to protect their capital and pass evaluations.",content:`
# 10 Risk Management Rules Every Funded Trader Must Know

Risk management is the difference between successful funded traders and those who fail. Here are the 10 essential rules you must master.

## 1. The 2% Rule

Never risk more than 2% of your account on a single trade. This ensures that even a series of losses won't significantly impact your account.

## 2. Use Proper Position Sizing

Calculate your position size based on your stop loss and account size. Never trade with arbitrary amounts.

## 3. Set Daily Loss Limits

Stop trading once you hit your daily loss limit. This prevents revenge trading and emotional decisions.

## 4. Never Average Down

Averaging down is a recipe for disaster. Accept the loss and move on.

## 5. Use Stop Losses Religiously

Always have a stop loss in place. It's your insurance policy against large losses.

## 6. Maintain Favorable Risk-Reward

Aim for at least 1:2 risk-reward ratio to ensure winners outweigh losers.

## 7. Keep Records

Track every trade. Analyze your performance to identify patterns and improve.

## 8. Diversify Your Trades

Don't put all your capital in one trade or one market segment.

## 9. Understand Correlation

Be aware of correlated positions. Trading multiple EUR pairs simultaneously isn't diversification.

## 10. Stick to Your Plan

Follow your trading plan religiously. Deviating leads to inconsistency.
    `,category:"Risk Management",author:"Sarah Williams",authorImage:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",date:"2024-04-12",readTime:"6 min read",image:"https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=400&fit=crop",featured:!0},{slug:"meta-trader-5-vs-mt4-comparison",title:"MetaTrader 5 vs MT4: Which Platform Should You Choose?",excerpt:"A detailed comparison of the two most popular trading platforms to help you make the right choice.",content:`
# MetaTrader 5 vs MT4: Which Platform Should You Choose?

Choosing the right trading platform is crucial for your success. Let's break down the key differences between MT4 and MT5.

## MetaTrader 4 (MT4)

### Pros:
- User-friendly interface
- Extensive third-party indicators
- Large community and resources
- Lower system requirements
- Excellent for forex trading

### Cons:
- Limited to forex and CFDs
- Older MQL4 language
- No native hedging options
- Single-threaded execution

## MetaTrader 5 (MT5)

### Pros:
- More advanced charting features
- Multi-threaded execution
- Built-in economic calendar
- Supports more asset classes
- MQL5 with more features
- Better for stocks and futures

### Cons:
- Steeper learning curve
- Fewer third-party indicators
- Higher system requirements

## Which Should You Choose?

**Choose MT4 if:**
- You're primarily trading forex
- You want easier platform navigation
- You rely on custom indicators

**Choose MT5 if:**
- You want to trade multiple asset classes
- You need better execution speed
- You want more advanced features
    `,category:"Trading Tools",author:"Alex Rodriguez",authorImage:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",date:"2024-04-10",readTime:"5 min read",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",featured:!1},{slug:"psychology-trading-drawdown",title:"Trading Psychology: How to Handle Drawdowns Like a Pro",excerpt:"Master your emotions during losing streaks and come out stronger as a trader.",content:`
# Trading Psychology: How to Handle Drawdowns Like a Pro

Drawdowns are an inevitable part of trading. How you handle them determines your success. Here's how to manage them like a professional.

## Understanding Drawdowns

A drawdown is the decline in your account balance from peak to valley. Even the best traders experience drawdowns.

## The Psychology of Loss

### Common Emotional Responses:
- Fear of further losses
- Desire to "make it back" quickly
- Loss of confidence
- Decision fatigue

## Strategies for Handling Drawdowns

### 1. Accept That Drawdowns Happen
They're not a sign of failure—they're a cost of doing business.

### 2. Take a Break
When emotions run high, step away. Clear your mind before trading again.

### 3. Review Your Trading Plan
Return to your original plan. Don't modify it based on recent results.

### 4. Focus on Process, Not Results
Good traders follow their system. Results follow good processes.

### 5. Journal Your Emotions
Document how you feel during drawdowns. Identify patterns.

## The Long-Term View

Remember: short-term losses are temporary. Long-term consistency is what matters.

## Conclusion

Mastering your psychology during drawdowns is what separates successful traders from those who quit. Stay disciplined, follow your plan, and remember that every professional has been through what you're experiencing.
    `,category:"Trading Psychology",author:"Emma Thompson",authorImage:"https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",date:"2024-04-08",readTime:"7 min read",image:"https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=400&fit=crop",featured:!0},{slug:"scalping-strategies-prop-trading",title:"Best Scalping Strategies for Prop Trading Success",excerpt:"Discover the most effective scalping techniques that work well with prop firm evaluations.",content:`
# Best Scalping Strategies for Prop Trading Success

Scalping is a popular trading style among prop traders due to its potential for quick profits. Here are the best strategies to master.

## What is Scalping?

Scalping involves making multiple small trades throughout the day, capturing tiny price movements. The goal is consistent small gains rather than large hits.

## Top Scalping Strategies

### 1. Price Action Scalping
- Focus on support and resistance levels
- Trade breakouts and bounces
- Use candlestick patterns for entries

### 2. Trend Scalping
- Trade with the intraday trend
- Enter on pullbacks to moving averages
- Use multiple timeframes for confirmation

### 3. Range Scalping
- Identify sideways markets
- Buy at support, sell at resistance
- Use oscillators for overbought/oversold signals

### 4. News Scalping
- Trade volatility around news events
- Be quick in and out
- Understand market direction before news

## Essential Scalping Rules

1. **Quick Decision Making** - Don't hesitate
2. **Strict Stop Losses** - Always protect capital
3. **Low Spread Pairs** - Trade major pairs
4. **High Liquidity Hours** - Trade during peak hours
5. **Small Position Sizes** - Risk 1% or less per trade

## Best Times to Scalping

- London Session: 8:00 AM - 12:00 PM GMT
- New York Session: 1:00 PM - 5:00 PM GMT
- Overlap: 1:00 PM - 4:00 PM GMT

## Conclusion

Scalping can be highly profitable when done correctly. Master one strategy, stay disciplined, and always prioritize capital preservation.
    `,category:"Trading Strategies",author:"Marcus Chen",authorImage:"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",date:"2024-04-05",readTime:"6 min read",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",featured:!1},{slug:"how-pass-prop-firm-evaluation",title:"How to Pass Your Prop Firm Evaluation on the First Try",excerpt:"Step-by-step guide to passing your prop firm evaluation with proven strategies.",content:`
# How to Pass Your Prop Firm Evaluation on the First Try

Passing your prop firm evaluation on the first attempt saves time and money. Here's your complete guide to success.

## Understanding the Evaluation

### Common Requirements:
- Profit target (usually 5-10%)
- Maximum drawdown (usually 5-10%)
- Minimum trading days
- Trading period (usually 30-60 days)

## Pre-Evaluation Preparation

### 1. Trade the Demo Account
- Treat the demo like real money
- Track your performance
- Prove consistency before funding

### 2. Define Your Strategy
- Have clear entry and exit rules
- Know your risk parameters
- Write down your trading plan

### 3. Know the Rules
- Read all evaluation requirements
- Understand what's prohibited
- Know the consequences of violations

## During the Evaluation

### Day 1-7: Build Your Buffer
- Don't rush to meet targets
- Focus on consistency
- Build a small cushion

### Day 8-21: Press the Advantage
- When conditions favor you, take trades
- Don't overtrade, but don't miss opportunities
- Stay within risk parameters

### Day 22-30: Protect Your Progress
- Reduce position sizes slightly
- Be more selective with entries
- Don't take unnecessary risks

## Common Mistakes to Avoid

1. **Overtrading** - More trades = more risk
2. **Revenge Trading** - Trying to recover losses
3. **Ignoring Risk Rules** - Never breach drawdown limits
4. **Changing Strategy** - Stick to what works
5. **Emotional Trading** - Stay calm under pressure

## Conclusion

Passing your evaluation requires preparation, discipline, and patience. Follow these guidelines, and you'll maximize your chances of success on the first try.
    `,category:"Trading Guide",author:"Sarah Williams",authorImage:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",date:"2024-04-02",readTime:"7 min read",image:"https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=400&fit=crop",featured:!0},{slug:"scaling-your-trading-account",title:"Scaling from $10K to $2M: The Complete Scaling Guide",excerpt:"Learn how successful funded traders scale their accounts from initial funding to millions in capital.",content:`
# Scaling from $10K to $2M: The Complete Scaling Guide

One of the greatest benefits of prop trading is the ability to scale your capital. Here's how to go from $10K to $2M.

## Understanding Scaling

Prop firms offer scaling plans that increase your capital based on performance. This allows you to manage more money and earn larger profits.

## The Scaling Tiers

### Tier 1: $10K - $25K
- Focus on consistency
- Build your track record
- Learn to manage larger positions

### Tier 2: $25K - $50K
- Prove continued profitability
- Maintain low drawdown
- Show emotional discipline

### Tier 3: $50K - $100K
- Advanced risk management
- Diversified trading
- Professional mindset

### Tier 4: $100K - $200K
- Institutional-level trading
- Complete risk mastery
- Team player mindset

### Tier 5: $200K - $2M
- Top 1% performance
- Leadership qualities
- Strategy development

## Requirements for Scaling

Most firms require:
- Consistent monthly profits
- Low drawdown maintained
- Minimum trading activity
- Professional conduct

## Tips for Fast Scaling

1. **Always Meet Targets** - Never miss a payout
2. **Stay Under Drawdown** - Leave room for errors
3. **Trade Regularly** - Maintain activity requirements
4. **Communicate Professionally** - Build relationships
5. **Develop New Strategies** - Show adaptability

## The Mental Game

Scaling brings more pressure:
- Larger position sizes
- Higher expectations
- More scrutiny

Prepare mentally before each tier jump.

## Conclusion

Scaling to $2M is achievable with the right approach. Stay consistent, manage risk, and the capital will follow.
    `,category:"Trading Guide",author:"Marcus Chen",authorImage:"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",date:"2024-03-28",readTime:"8 min read",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",featured:!1}];function s(e){return r.find(t=>t.slug===e)}function i(e,t=3){let a=s(e);return a?r.filter(t=>t.slug!==e&&t.category===a.category).slice(0,t):[]}},5299:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,a(9224).Z)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])},4087:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,a(9224).Z)("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]])},2163:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c,metadata:()=>l});var r=a(5036);let s=(0,a(6843).createProxy)(String.raw`/Users/eliaserpakulla/prop-firms-nextjs/app/blog/BlogPage.tsx`),{__esModule:i,$$typeof:o}=s,n=s.default,l={title:"Blog",description:"Expert insights, trading strategies, and prop firm tips to help you succeed in the markets."};function c(){return r.jsx(n,{})}}};var t=require("../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[638,178,357,89],()=>a(3989));module.exports=r})();