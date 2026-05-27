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

*This research brief provides the factual foundation. The article should weave these facts into a narrative that makes readers feel the urgency — this isn't a future problem, it's a now problem that's outpacing every safeguard we've built.*
