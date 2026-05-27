# AI-Generated Non-Consensual Pornography: Research Brief

*Compiled May 2026 — Background research for ethics article*

---

## 1. The Scale of the Problem

The numbers are staggering and accelerating:

- **244,625 deepfake porn videos** uploaded to the top 35 dedicated websites over 7 years (as of Oct 2023)
- In 2023 alone: **113,000 new videos** — a 54% increase over 2022, more than every prior year combined
- **96% of all deepfakes online are non-consensual pornography** targeting women (Sensity AI, 2023)
- **~90% of victims are women**
- An additional **~300 general porn sites** host deepfake content beyond dedicated sites
- **4 million monthly users** on Telegram "nudify" bots alone (Oct 2024)
- During the Grok/X scandal (Dec 2025): **~6,700 explicit AI images generated per hour** through a single chatbot
- 50-80% of traffic to deepfake porn sites comes via **Google and Bing search**

### How Accessible Is It?

What once required deep ML expertise now takes seconds:

- **One-click "nudify" apps and bots** — upload a photo, get a fake nude
- **Open-source models** with safety filters removed — anyone with a GPU can generate anything
- **Keyword hacks** bypass content filters on mainstream AI tools (the Taylor Swift deepfakes were made using Microsoft Designer)
- A single "nudify" site claimed to have processed **350,000 photos**
- Researchers describe the process as taking **"two seconds"**

---

## 2. Who Are the Victims?

### Demographics
- Overwhelmingly **women and girls**
- Spans from celebrities to ordinary people — anyone with a social media photo is a potential target
- **Increasingly minors**: school-age children targeted in multiple countries

### Victim Categories

| Category | Examples |
|----------|----------|
| **Celebrities** | Gal Gadot, Emma Watson, Scarlett Johansson, Taylor Swift (45M views on one post) |
| **Streamers/creators** | Female Twitch streamers (Atrioc scandal, Jan 2023) |
| **Journalists/activists** | Rana Ayyub (India, 2018) — deepfake porn as political retaliation |
| **Students** | Almendralejo, Spain — 20+ girls aged 11-17; South Korea — 200+ schools affected |
| **Ordinary women** | Photos harvested from Facebook, Instagram, KakaoTalk |

### Psychological Impact
- High rates of **anxiety, depression, self-injury, and suicidal ideation**
- Feelings of **powerlessness and paranoia**
- Fear of **retraumatization** — images can resurface anytime
- Some victims forced to **change their names** or withdraw entirely from the internet
- Long-term erosion of trust in close relationships

---

## 3. Key Incidents Timeline

| Date | Incident | Significance |
|------|----------|-------------|
| **Dec 2017** | Reddit user "deepfakes" posts celebrity face-swaps | Coins the term, starts the problem |
| **2018** | Rana Ayyub targeted (India) | Demonstrates political weaponization |
| **2019** | DeepNude app goes viral | Shows commercial exploitation potential |
| **Oct 2020** | Telegram bot scandal — 100K+ victims incl. minors | Reveals industrial scale |
| **Jan 2023** | Atrioc/Twitch caught with deepfake porn of colleagues | Mainstream cultural moment |
| **Sep 2023** | Almendralejo, Spain — girls 11-17 targeted | Minors as victims enters mainstream debate |
| **Jan 2024** | Taylor Swift deepfakes — 45M views on X | White House condemns; bipartisan legislation introduced |
| **Aug 2024** | South Korean Telegram rings — 800+ cases, 6K protesters | Strongest legal response globally |
| **Oct 2024** | 4M monthly users on Telegram nudify bots | Scale of "casual" abuse revealed |
| **Dec 2025** | Grok/X generates explicit images incl. minors at scale | AI companies directly implicated |

---

## 4. Legal & Regulatory Landscape

### United States — Federal

| Law | Status | Key Provisions |
|-----|--------|---------------|
| **TAKE IT DOWN Act** | **Signed May 2025** | Criminalizes NCII publication (up to 2yr prison). Platforms must remove within 48hrs. FTC enforces. First conviction April 2026 |
| **DEFIANCE Act** | **Passed Senate Jan 2026**, awaiting House | Civil right to sue creators/distributors for damages |
| **SHIELD Act** | Pending (reintroduced Feb 2025) | Bolsters law enforcement tools |

### US States
- **48+ states** have some form of NCII laws
- CA, VA, NY explicitly cover AI-generated content
- Major gap: no framework for student-on-student AI CSAM in schools

### International

| Jurisdiction | Status |
|-------------|--------|
| **UK** | Online Safety Act 2023 criminalizes *sharing*; Data (Use and Access) Act 2025 criminalizes *creating* (rare globally) |
| **EU** | AI Act classifies deepfakes as "limited risk" — transparency labeling only. Widely criticized as too weak for NCII |
| **South Korea** | **Strongest laws globally**: 3-7yr mandatory prison. Creation, distribution, AND possession/viewing all criminalized |
| **Australia** | First AI-specific deepfake prosecution April 2025 |
| **China** | Leverages existing anti-pornography laws + deep synthesis labeling rules |

### The Biggest Legal Gaps

1. **No comprehensive federal US civil remedy yet** (DEFIANCE still pending)
2. **Creation rarely criminalized** — most laws target distribution only
3. **AI tool developers face zero liability** for what their models produce
4. **No international treaty** despite inherently cross-border nature
5. **Encryption vs. takedown** tension unresolved
6. **Open-source models can't be controlled** post-release
7. **Enforcement lags** — law moves slower than technology

---

## 5. Countermeasures & What Exists

### Detection Technology
No universal detector exists. Current tools are **reactive and degrading** (accuracy drops with new models):

- **Intel FakeCatcher** — analyzes blood flow in facial pixels (96% accuracy in controlled settings)
- **Sensity AI** — enterprise platform used by governments
- **Hive Moderation** — real-time API classifying images by source model
- **Reality Defender** — multi-model ensemble ($15M+ funded)
- **Microsoft Video Authenticator** — distributed to select partners only

### Watermarking & Provenance
- **C2PA / Content Credentials** — open standard backed by 500+ companies (Adobe, Google, Meta, Microsoft, OpenAI). Cryptographically signed provenance. Closest to an industry standard.
- **Google SynthID** — watermarks images, audio, video, text from Google models. Survives cropping/compression.
- **Critical gap**: Open-source models don't embed watermarks. Social media often strips metadata.

### Takedown Services
- **StopNCII.org** — for adults 18+. Hash-based (image never leaves device). 90%+ removal rate, 300K+ images removed. Partners: Meta, TikTok, Bumble, Reddit, Pornhub, Snap.
- **Take It Down (NCMEC)** — same approach for minors.
- **Alecto AI** — proactively scans web using facial recognition (not just participating platforms).
- **Limitation**: Only works on cooperating platforms. Dedicated abuse sites don't participate.

### Advocacy Organizations
- **NCMEC** — 195M+ CyberTipline reports processed
- **Thorn** — 658B files processed, 12.4M flagged
- **#MyImageMyChoice** — contributed to US AI Executive Order + UK Online Safety Act
- **Cyber Civil Rights Initiative**, **Revenge Porn Helpline**, **IWF**, **ECPAT**

### Industry Self-Regulation
- All major AI companies (OpenAI, Google, Stability AI, Midjourney, Meta) block explicit content generation
- Most adopting C2PA/Content Credentials
- **The fundamental gap: open-source models.** Once weights are released, safety filters can be removed. 290+ "nudify" apps emerged in 2023-24 using open model weights.

### Defensive Tech for Individuals
- **Photoguard / Glaze** — image perturbations that prevent AI from using photos as source material
- **Nightshade** — data poisoning tool
- Require proactive adoption (victim must act *before* being targeted)

---

## 6. Core Ethical Questions for the Article

1. **Consent & bodily autonomy** — AI enables violation of someone's body without touching them. Is a synthetic nude image of a real person a form of sexual assault?

2. **The open-source dilemma** — Free, open AI models democratize innovation but also enable abuse at scale. Should model weights be restricted?

3. **Platform responsibility** — Search engines direct traffic; platforms host content; Telegram enables bots. How much liability should intermediaries bear?

4. **Tool developer liability** — If an AI company's model generates NCII, are they responsible? Current answer: legally, no.

5. **The detection arms race** — Detection tools can't keep up. Is a purely technical solution even possible?

6. **Criminalization of creation vs. distribution** — Most laws target sharing, not making. But is creating a non-consensual intimate image already a harm?

7. **Cultural normalization** — 4M monthly users on nudify bots suggests widespread acceptance. How did this become so normalized so fast?

8. **Disproportionate impact** — 96% targets women. This is a gendered violence issue, not just a tech issue.

9. **Minors at unprecedented risk** — AI CSAM creation is "faster and easier than ever." Traditional child protection frameworks weren't designed for synthetic content.

10. **The right to one's own image** — In an age of AI, what does it mean to own your likeness?

---

## 7. Key Sources

| Source | Date | URL |
|--------|------|-----|
| WIRED, "Deepfake Porn Is Out of Control" | Oct 2023 | https://www.wired.com/story/deepfake-porn-is-out-of-control/ |
| MIT Tech Review, "Deepfake porn is ruining women's lives" | Feb 2021 | https://www.technologyreview.com/2021/02/12/1018222/deepfake-revenge-porn-coming-ban/ |
| Wikipedia, "Deepfake pornography" | Ongoing | https://en.wikipedia.org/wiki/Deepfake_pornography |
| TAKE IT DOWN Act coverage | 2025 | Various news sources |
| Sensity AI reports | 2018-2024 | https://sensity.ai |
| StopNCII.org | Ongoing | https://stopncii.org |
| C2PA standard | Ongoing | https://c2pa.org |

---

## 8. The Tools & Ecosystem — How It Actually Works

### Telegram Nudify Bots

A Telegram bot is an automated account inside the Telegram messaging app. You send it a photo, it runs AI on it, sends back a "nudified" version in seconds. No technical skill needed — it's like texting.

**How the ecosystem works:**
- User finds a bot via referral links on Reddit/X (referral spam up **2,000%+** since 2023 — Graphika)
- Sends a clothed photo of *anyone*
- Bot returns a low-res watermarked preview for free
- Full-quality: pay $10-50/month or buy token credits
- Payments via crypto to dodge card processor bans
- When a bot gets banned, clones appear within hours

**Scale:** 52 Telegram groups serving NCII had at least **1 million users** (Graphika, Sep 2023). By Oct 2024: **4 million monthly users** on nudify bots.

**South Korea scandal (Aug 2024):** Journalist Ko Narin exposed Telegram groups where *mainly teenagers* created deepfakes of classmates and teachers. One group had **220,000 members**. 200+ schools affected. 800+ police cases. Led to criminalization of even *viewing* deepfake porn (3yr prison).

### DeepNude & Its Successors

**DeepNude** (June 2019) was the app that opened Pandora's box:
- Created by anonymous developer "Alberto"
- GAN trained on 10,000+ nude women's images
- Only worked on female bodies
- Premium version: $50
- Creator shut it down after VICE coverage — but **the source code was immediately cloned and redistributed**
- Spawned the entire "nudify" industry

**Today's ecosystem** (Graphika, Dec 2023): 34 identified providers received **24 million unique visitors/month**. They operate as polished e-commerce businesses with tiered subscriptions, referral programs, and influencer marketing.

### Face-Swapping Tools

- **DeepFaceLab** — most-used open-source tool for video face-swaps. Requires computation time but produces high-quality results.
- **Roop/InsightFace** — the game-changer. Requires only **ONE photo** of the target (vs. hundreds before). Near-instant face swap. Available as Stable Diffusion extension.
- **Commercial deepfake porn sites** — subscription services where you pay to swap specific people's faces onto porn. This is what streamer Atrioc was caught using.

### The Stable Diffusion / Open-Source Pipeline

This is the engine behind everything. Here's how it works:

1. **Download an NSFW checkpoint** — a full AI model fine-tuned for explicit content generation (from sites like CivitAI)
2. **Download a LoRA of a specific person** — a small file (~10-200MB) trained on someone's social media photos. Per 404 Media: specific LoRAs have been downloaded **tens of thousands of times** each
3. **Combine them locally** in a free interface (Automatic1111, ComfyUI)
4. **Type a text prompt** describing whatever you want
5. **Generate unlimited images** — no moderation, no logging, no one to report to

**CivitAI** is the hub: thousands of models, LoRAs, and checkpoints. Models trained on real people are technically against ToS but widespread. A **Bloomberg investigation** found the major training dataset LAION-5B contained over **1,000 child sexual abuse images**.

### Where It Gets Shared

| Platform | Role |
|----------|------|
| **Telegram** | Primary distribution. Groups of 220K+ members |
| **Dedicated deepfake porn sites** | 35+ sites, 244K+ videos, some views in millions |
| **Reddit** | Subreddits pop up/get banned in cycles. Used to market nudify services |
| **X/Twitter** | Taylor Swift images reached 45M views. Grok itself generated 6,700 images/hour |
| **4chan** | Anonymous, minimal moderation. Origin point of Taylor Swift images |
| **Discord** | Coordination and sharing despite bans |
| **CivitAI** | The "GitHub" of AI porn models |

### The Business Model

This is a **fully commercialized industry**:
- Freemium subscriptions ($10-50/month)
- Token/credit systems (pay per image)
- Cryptocurrency payments (when Visa/Mastercard ban them, they switch to Bitcoin/Monero)
- Referral programs and affiliate marketing
- Advertising revenue
- Custom/bespoke deepfake creation as premium service
- Model sales (creators monetize their LoRAs)

**The whack-a-mole problem:** Payment processors block → switch to crypto. Domain seized → new domain. Bot banned → clone within hours. App removed from store → shift to APK downloads. Open-source models running locally → **cannot be moderated by anyone**.

---

## 9. The "Victimless" AI Porn Debate — Normalization vs. Safety Valve

This is the most philosophically complex dimension of the issue. When AI generates explicit content of *entirely fictional people* — no real person's likeness, no real victim — is it harmless?

### The "Safety Valve" Argument

Those who argue synthetic AI porn is harmless or even beneficial claim:

- **No real victim exists** — unlike real pornography, no one was exploited in production
- **Outlet for harmful urges** — people with deviant fantasies can satisfy them without involving real people
- **Milton Diamond's research** (Czech Republic): sex crime rates *declined* after pornography was legalized, suggesting availability of sexual content can reduce offending
- **Swiss studies**: only ~1% recidivism among child pornography viewers who had no prior contact offenses
- **Legal precedent**: *Ashcroft v. Free Speech Coalition* (2002) — US Supreme Court struck down a ban on virtual child pornography, ruling it "records no crime and creates no victims by its production"
- **Harm reduction logic**: if the choice is between someone acting on urges with a real person vs. with an AI image, the AI image is the lesser harm

### The Normalization Argument (Against)

The counter-argument — and the one with growing support — centers on what consuming this content *does to the consumer's mind*:

**Desensitization research:**
- **Kingston et al. (2008)**: deviant pornography consumption correlated with *higher recidivism* among convicted sex offenders
- **Neurology reviews (2016)**: repeated consumption of extreme pornography causes measurable brain changes — desensitization to arousal, requiring escalation to achieve the same response
- **Script theory**: repeated exposure to certain sexual scenarios shifts what people perceive as "normal." Fantasy becomes template for desire.

**The escalation problem:**
- Pornography researchers consistently document **escalation patterns** — users move from mainstream content to increasingly extreme material over time
- AI removes the last friction: no real person needs to be convinced, coerced, or paid. The content is infinite, instant, and can depict *anything*
- If AI normalizes content depicting illegal acts (rape, incest, minors), the concern is that it **bridges the gap between fantasy and action** for some users

**The CSAM dimension** (the hardest question):
- **IWF (Internet Watch Foundation) 2026 data**: 8,029 AI-generated CSAM images/videos found in 2025. **26,385% increase** for video content.
- **65% of AI CSAM videos were Category A** — the most extreme
- AI models are being trained on real abuse imagery to produce synthetic versions
- A new "deepfake defense" is emerging: offenders claiming real abuse images are AI-generated
- **Expert consensus is overwhelming**: child protection organizations unanimously consider synthetic CSAM harmful
- **Most jurisdictions now treat it as illegal** under obscenity laws. UK criminalized possessing AI CSAM *generation tools* (2025)
- The US **PROTECT Act** (2003) closed the Ashcroft loophole: virtual CSAM can be prosecuted if it fails the Miller obscenity test — which sexual content involving children almost certainly does

**The Mayo Clinic finding**: 30-80% of child pornography viewers had also molested a child. Directionality is unclear (does viewing cause offending, or do offenders seek out content?), but the correlation is stark.

### The Video Games Analogy — And Why It Doesn't Hold

People often compare this to the "violent video games cause violence" debate:
- *Brown v. EMA* (2011): Supreme Court rejected California's attempt to restrict violent video games, finding insufficient evidence of causation
- **But the Court explicitly distinguished** violence (historically protected speech) from obscenity (historically *unprotected*). This distinction works *against* synthetic porn.
- Violence in games is stylized, abstract, clearly fictional. AI-generated porn is photorealistic and designed to be indistinguishable from real content.
- The psychological mechanism is different: no one plays Call of Duty believing they're actually killing someone. AI porn is consumed *as if it were real.*

### The Unresolved Tension

The honest answer: **the research doesn't definitively resolve whether synthetic content acts as a safety valve or an accelerant** — and it may do *both*, in different populations.

For some people, it may genuinely reduce risk. For others, it may be a gateway to escalation. The problem is: **we can't reliably distinguish between those populations in advance**, and the stakes of getting it wrong are catastrophic when children are involved.

What we *can* say with confidence:

1. **Normalization is real** — exposure shifts norms. 4 million monthly nudify bot users didn't emerge from nowhere. The technology made the behavior seem normal.
2. **The line between "fictional" and "real" is collapsing** — when AI images are indistinguishable from photographs, the distinction between "synthetic" and "real" becomes meaningless to the consumer's brain.
3. **The slope is already slipping** — the same tools used for "victimless" AI porn are the exact same tools used to create NCII of real people and CSAM. They're not separate ecosystems.
4. **Cultural permission structures matter** — when a society normalizes the *creation* of sexual content without consent (even of fictional people), it erodes the cultural norm that consent matters.

---

## 10. Additional Sources

| Source | Date | URL |
|--------|------|-----|
| Graphika, "A Revealing Picture" | Dec 2023 | https://graphika.com/reports/a-revealing-picture |
| 404 Media, "Inside the AI Porn Marketplace" | Aug 2023 | https://www.404media.co/inside-the-ai-porn-marketplace-where-everything-and-everyone-is-for-sale/ |
| 404 Media, "AI-Generated Taylor Swift Porn" | Jan 2024 | https://www.404media.co/ai-generated-taylor-swift-porn-twitter/ |
| 404 Media, "Student-on-Student AI CSAM" | May 2025 | https://www.404media.co |
| Wikipedia, "Grok sexual deepfake scandal" | 2026 | https://en.wikipedia.org/wiki/Grok_sexual_deepfake_scandal |
| WIRED, "Grok Generating Far More Graphic Content" | Jan 2026 | https://www.wired.com/story/grok-is-generating-sexual-content-far-more-graphic-than-whats-on-x/ |
| IWF AI CSAM reports | 2025-2026 | https://www.iwf.org.uk |
| Kingston et al., deviant pornography & recidivism | 2008 | Academic paper |
| *Ashcroft v. Free Speech Coalition* | 2002 | US Supreme Court |
| *Brown v. Entertainment Merchants Assn.* | 2011 | US Supreme Court |
| PROTECT Act | 2003 | US Federal Law |

---

*This research brief provides the factual foundation. The article should weave these facts into a narrative that makes readers feel the urgency — this isn't a future problem, it's a now problem that's outpacing every safeguard we've built.*
