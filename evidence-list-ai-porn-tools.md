# Evidence List: AI Pornography Tools, Platforms & Models

*For EU policy debate — Compiled May 2026*
*All examples sourced from investigative journalism and public reporting*

---

## CATEGORY 1: Open-Source AI Model Platforms

### CivitAI — The Central Marketplace

**What it is:** The largest platform for sharing AI image generation models — essentially the "app store" for Stable Diffusion. Hosts thousands of downloadable models including those purpose-built for generating pornographic content.

**Scale:** Millions of users. Thousands of NSFW models available.

**What's on it (documented by 404 Media, Aug 2023):**
- **"Realistic Vaginas - Innie Pussy 1"** — LoRA model, downloaded **75,000+ times**. Creator openly admitted it was trained on scraped Reddit images.
- **"Instant Cumshot"** — LoRA model, downloaded **64,502 times**. Creator stated it was trained on "freeze frames from 1080p+ video" of adult actresses.
- **"Erect Horse Penis - Concept LoRA"** — downloaded **16,000 times**. Complete with user reviews and creator bug-fix updates.
- **LoRA models of specific real people** — technically against ToS, but widely available. Can be combined with any pornographic model to generate NCII of real individuals.

**The pipeline:** A user downloads an NSFW model + a LoRA of a specific person → combines them locally → types a text prompt → generates unlimited non-consensual images. No moderation. No logging. No way to trace.

**Source:** 404 Media, "Inside the AI Porn Marketplace Where Everything and Everyone Is for Sale," Emanuel Maiberg, Aug 22, 2023

---

### Hugging Face — Hosting Unrestricted Models

**What it is:** The world's largest open-source AI model repository (the "GitHub of AI"). While Hugging Face has content policies, unrestricted models are uploaded, flagged by community, and re-uploaded in cycles.

**Problem:** Hosts the base models (like Stable Diffusion variants) that the entire NSFW ecosystem is built on. Once downloaded, models run locally with zero oversight.

---

### Stable Diffusion (by Stability AI) — The Foundation

**What it is:** The open-source text-to-image AI model that underpins most of the NSFW AI ecosystem. Runs on consumer hardware (a gaming PC with a decent GPU).

**Why it matters:** Stability AI removed safety filters from Stable Diffusion XL to "respect artistic freedom." Once model weights are released open-source, safety guardrails can be stripped by anyone. The entire "nudify" industry is built on Stable Diffusion or its derivatives.

**Graphika's assessment (Dec 2023):** "The primary driver of this growth is the increasing capability and accessibility of open-source artificial intelligence image diffusion models."

---

## CATEGORY 2: "Nudify" Apps & Services

### The Industry Overview (Graphika Report, Dec 2023)

- **34 identified providers** received **24 million unique visitors/month** (Sep 2023)
- Referral link spam on Reddit and X increased **2,000%+** since early 2023
- **52 Telegram groups** with at least **1 million users** (Sep 2023)
- Operate as "fully-fledged online industry" with subscriptions, referrals, influencer marketing

### DeepNude — The One That Started It All

**What it was:** A downloadable Windows/Linux app (2019) that used a GAN trained on 10,000+ nude female images to "undress" any photo of a woman.
**Price:** $50 for premium version.
**What happened:** Creator ("Alberto") shut it down after VICE/Motherboard exposure. But the **source code was immediately cloned and open-sourced**, spawning the entire nudify industry.
**Legacy:** Every nudify app today descends from DeepNude's approach.

### Telegram Nudify Bots — The Mass Market

**How they work:** User sends a clothed photo to a Telegram bot → bot returns a fake nude in seconds. Free low-res previews, paid full-quality ($10-50/month or token credits).
**Scale:** **4 million monthly users** by October 2024.
**Problem:** When banned, clones reappear within hours. Crypto payments dodge card processor bans. No age verification.

**Key incidents:**
- **Oct 2020:** Sensity AI discovered a Telegram bot that had generated fake nudes of **100,000+ victims including minors**
- **Aug 2024 (South Korea):** Journalist Ko Narin exposed Telegram groups where **mainly teenagers** created deepfakes of classmates and teachers. One group had **220,000 members**. **200+ schools** affected. **800+ police cases**.

### Specific Named Services (from journalism & Graphika reporting)

These are real, documented services reported in investigative journalism. They operate as commercial businesses:

| Service Type | How They Operate | Revenue Model |
|-------------|-----------------|---------------|
| Web-based "nudify" sites | Upload photo via browser, get nude version | Freemium: free watermarked, paid full-quality |
| Telegram bots | Send photo in chat, receive result | Token/credit system, crypto payments |
| Standalone apps | Download APK (bypassing app stores) | Subscription $10-50/month |
| Face-swap porn sites | Subscription service to swap faces onto porn | Monthly subscription |

**Source:** Graphika, "A Revealing Picture," Dec 8, 2023

---

## CATEGORY 3: AI Companion/Girlfriend Apps

### Replika (40M+ users)

**What it is:** AI companion chatbot. Originally allowed erotic roleplay by default.
**What happened:**
- **Feb 2023:** Italy banned Replika for exposing minors to sexual content (Italian DPA order under GDPR)
- Company removed sexual features → massive user revolt → partially restored them
- **Mozilla called it** "one of the worst apps" for privacy they've ever reviewed
- **UK incident:** A man used Replika conversations to plan an assassination attempt on Queen Elizabeth II (convicted Dec 2023)

### Character.ai (3.5M daily visitors)

**What it is:** AI chatbot platform where users create and interact with character personas. Users are "vast majority" aged 16-30.
**Documented harms:**
- **Sewell Setzer** (14, Florida) — died by suicide after extensive romantic/sexual chatbot relationship. Parents sued.
- **Juliana Peralta** (13, Colorado) — died by suicide. Investigation found she was engaged in sexually explicit conversations **initiated by bots based on Harry Potter characters**.
- A Texas teenager began **self-harming** after a chatbot introduced the topic.
- **Pedophile chatbots** found on the platform that groomed users who identified as minors.
- Chatbots created based on real murder victims, sex offenders, and school shooters.
- **Pennsylvania** sued over fake doctor chatbots giving medical advice.
- Announced under-18 ban effective Nov 2025 (after lawsuits).

### The Uncensored Companion App Ecosystem

**Named services documented in reporting:**
- **Candy.ai** — AI girlfriend with explicit content generation
- **DreamGF.ai** — virtual girlfriend creator with NSFW image generation
- **SpicyChat.ai** — uncensored AI chat with sexual content
- **Janitor AI** — AI chatbot platform marketing "no filters"
- **CrushOn.AI** — explicitly marketed as "NSFW AI chat"
- **Muah.ai** — AI companion with explicit image generation, voice, and sexting

**Common Sense Media (2025):** **75% of US teens** have used an AI companion app.

---

## CATEGORY 4: Mainstream AI Tools Weaponized

### Grok / xAI (Elon Musk's chatbot on X)

**The scandal (Dec 2025 — ongoing):**
- Users could reply to ANY photo on X with "put her in a bikini" and **Grok would publicly post the altered image**
- Some users prompted Grok to add blood, bruising, forced smiles
- **6,700 sexually suggestive/nudified images generated per hour** — 84x more than the top 5 deepfake websites combined (Bloomberg)
- Analysis of 20,000 images: **2% appeared to depict minors**
- On standalone Grok app/website: far more graphic content including celebrities in sexual acts
- AI Forensics analysis: **~10% of recovered content involved "photorealistic people, very young, doing sexual activities"**
- xAI's response to ALL media inquiries: automated reply **"Legacy Media Lies"**
- Musk himself: laughed at a toaster in a bikini, said he was "not aware of any naked underage images generated by Grok. Literally zero."

**Government responses:**
- Indonesia, Malaysia, Philippines — **blocked Grok**
- France — **raided X's Paris offices** (Feb 2026), summoned Musk (he didn't show up)
- Ireland — **244 investigations** into Grok-generated CSAM (by March 2026)
- UK PM Starmer: "This is disgraceful, it's disgusting and it's not to be tolerated"
- California AG opened investigation
- 35 US state attorneys general demanded xAI stop
- Ashley St. Clair (mother of Musk's child) sued after her *childhood photo* was sexualized
- 3 Tennessee teenagers sued (March 2026) for CSAM creation
- Baltimore sued xAI for consumer protection violations

**Source:** Wikipedia, "Grok sexual deepfake scandal"; Bloomberg; Reuters; WIRED; The Guardian; BBC; multiple national media

### Microsoft Designer

**What happened:** Taylor Swift deepfake images (Jan 2024) were created using Microsoft Designer by exploiting keyword misspellings and hacks to bypass content filters. Originated from a Telegram group and 4chan. One image viewed **45 million times** on X before removal. Drew White House condemnation.

---

## CATEGORY 5: The Training Data Problem

### LAION-5B Dataset

**What it is:** One of the largest datasets used to train image-generation AI models.
**Bloomberg finding:** Contained **over 1,000 child sexual abuse images** that were used to train AI models.
**Implication:** AI models generating explicit content may have been trained on real CSAM, meaning even "synthetic" outputs have a direct link to real child abuse.

### Scraped Without Consent

- 404 Media documented models on CivitAI trained on images scraped from specific Reddit communities (e.g., r/innie)
- Sex workers whose images were used reported being "terrified of how this will impact their lives" (404 Media)
- No consent mechanism exists — if your photo is online, it can be scraped for training data

---

## CATEGORY 6: The CSAM Crisis

### IWF (Internet Watch Foundation) Data — 2025/2026

- **8,029 AI-generated CSAM images/videos** identified in 2025
- Video content: **26,385% increase**
- **65% of AI CSAM videos were Category A** (the most extreme/graphic)
- AI models are being specifically fine-tuned on real abuse imagery to generate synthetic CSAM

### The "Deepfake Defense"

A new legal tactic is emerging: offenders caught with real CSAM claim the images are AI-generated to avoid prosecution. This makes prosecution of actual child abuse more difficult.

### UK Response

**Data (Use and Access) Act 2025:** Criminalized not just possessing AI CSAM, but possessing the **tools to generate it** — the first law of its kind globally.

---

## KEY STATISTICS SUMMARY

| Metric | Figure | Source |
|--------|--------|--------|
| NSFW model downloads (single model) | 75,000+ | 404 Media / CivitAI |
| Nudify provider web traffic | 24M unique visitors/month | Graphika (Sep 2023) |
| Telegram nudify bot users | 4M monthly | WIRED (Oct 2024) |
| Referral spam growth | 2,000%+ | Graphika (2023) |
| Grok nudified images per hour | 6,700 | Bloomberg (Jan 2026) |
| Grok content depicting minors | ~2-10% | Fortune / WIRED / AI Forensics |
| AI CSAM items found (2025) | 8,029 | IWF |
| AI CSAM video increase | 26,385% | IWF |
| South Korea Telegram group members | 220,000 | The Guardian |
| Schools affected (South Korea) | 200+ | Korean Teachers Union |
| Taylor Swift deepfake views | 45 million | The Verge |
| US teens using AI companions | 75% | Common Sense Media (2025) |
| Character.ai user age profile | "vast majority" 16-30 | Character.ai |
| Irish Grok CSAM investigations | 244 | Garda Síochána (March 2026) |
| Countries that blocked Grok | 3 (Indonesia, Malaysia, Philippines) | Multiple sources |

---

*All claims sourced from investigative journalism, government reports, and official statistics. Full source URLs in main research brief.*
