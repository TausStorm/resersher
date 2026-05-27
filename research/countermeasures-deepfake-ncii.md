# Countermeasures Against AI-Generated Non-Consensual Intimate Imagery

Research compiled May 2026. Focus: detection, provenance, takedown, advocacy, industry self-regulation, and technical prevention.

---

## 1. Detection Technology

### Major Tools

| Tool | Developer | Method | Status |
|------|-----------|--------|--------|
| **FakeCatcher** | Intel Labs | Analyzes blood flow patterns ("photoplethysmography") in facial pixels — real faces show subtle color changes from blood circulation, deepfakes don't | Announced 2022; claimed 96% accuracy in controlled tests. Research-stage; not widely deployed commercially. |
| **Video Authenticator** | Microsoft | Analyzes photos/videos for subtle greyscale manipulation artifacts invisible to humans; outputs a confidence score | Announced 2020 as part of Defending Democracy Program. Distributed to select partners (news orgs, political campaigns) — not publicly available. |
| **Sensity AI** | Sensity (startup, formerly Deeptrace) | Multi-model deepfake detection platform for enterprises; detects face swaps, face reenactment, GANs, diffusion-based fakes | Commercial product; used by governments and platforms. Published the first major deepfake landscape report (2019). URL: sensity.ai |
| **Hive Moderation** | Hive AI | Real-time API for detecting AI-generated images/video; classifies by model (DALL-E, Midjourney, Stable Diffusion, etc.) | Commercial API; used by platforms and enterprises. Claims >99% accuracy on known model outputs. URL: thehive.ai |
| **Reality Defender** | Reality Defender (startup) | Multi-model ensemble approach — combines multiple detection signals for robustness against evasion; real-time API + browser extension | Raised $15M+ in funding. Targets enterprises, government, media. URL: realitydefender.com |
| **Illuminarty** | Illuminarty (startup) | Web tool + API for detecting AI-generated images; identifies likely source model | Free web tool + commercial API. URL: illuminarty.ai |
| **AI or Not** | Optic (startup) | Consumer-facing tool to detect AI-generated images and audio | Free web tool + API. URL: aiornot.com |

### How Detection Works (General)

1. **Artifact analysis**: AI-generated images contain subtle statistical artifacts — unnatural frequency distributions, inconsistent noise patterns, anomalous compression signatures. Detectors train classifiers on these patterns.
2. **Biological signal analysis** (Intel's approach): Real video of faces contains physiological signals (blood flow, micro-expressions, blink patterns). Deepfakes lack or distort these.
3. **GAN/Diffusion fingerprinting**: Each generative model leaves a "fingerprint" — detectors trained to recognize specific model signatures.
4. **Ensemble methods**: Combine multiple signals for robustness.

### Effectiveness and Limitations

- **Accuracy degrades** with new/unknown generative models — detection is always playing catch-up with generation
- **Compression and post-processing** (social media re-encoding, screenshots) degrades detection signals
- **Adversarial attacks** specifically designed to evade detectors are possible
- **False positive/negative rates** vary significantly across tools and content types
- **No universal detector** exists that reliably catches all AI-generated content
- Detection works best as a **triage tool** (flagging for human review), not as a definitive oracle

---

## 2. Watermarking & Provenance

### C2PA (Coalition for Content Provenance and Authenticity)

- **URL**: https://c2pa.org
- **What**: Open technical standard for embedding content provenance metadata (origin, edits, AI involvement) into digital files
- **How**: Cryptographically signed metadata attached to content at creation time — like a "nutrition label" for digital content
- **Steering Committee**: Adobe, Amazon, BBC, Google, Meta, Microsoft, OpenAI, Publicis Groupe, Sony, Truepic
- **Scale**: 500+ member companies
- **Implementation**: Called "Content Credentials" — visible via a small pin/icon on images and video
- **Spec**: Open, version 2.3 as of 2025
- **Verify tool**: https://verify.contentauthenticity.org

### Content Credentials / Content Authenticity Initiative (CAI)

- **URL**: https://contentcredentials.org
- **What**: The consumer-facing implementation of C2PA — the "brand" for content provenance
- **Led by**: Adobe, with broad industry participation
- **How it works**: A "pin" icon on content signals provenance information is available. Clicking reveals creation method, editing history, whether AI was involved
- **Adoption**: Adobe Photoshop, Lightroom, Firefly embed Content Credentials by default. Camera manufacturers (Leica, Nikon, Sony) building it into hardware

### Google SynthID

- **URL**: https://deepmind.google/technologies/synthid/
- **What**: Google DeepMind's watermarking system for AI-generated content
- **Modalities**: Images, video, audio, and text
- **How it works**:
  - *Images/video*: Embeds invisible digital watermark at generation time. Survives cropping, filters, lossy compression, frame rate changes
  - *Audio*: Inaudible watermark embedded in generated audio. Survives noise addition, MP3 compression, speed changes. Used in Lyria (music model) and NotebookLM podcasts
  - *Text*: Adjusts token probability scores during LLM generation to create a statistical watermark. Invisible to readers, doesn't affect output quality. Applied in Gemini
- **Detection**: Users can upload content to Gemini and ask if it was created by Google AI. Also: SynthID Detector portal (early tester waitlist open as of 2026)
- **Limitations**: Only watermarks content generated by Google's own models. Not cross-platform

### Other Provenance Solutions

| Solution | Notes |
|----------|-------|
| **Truepic** | Hardware-level photo/video authentication; captures "sealed" media with cryptographic provenance. C2PA steering committee member |
| **Digimarc** | Digital watermarking for commercial media (packaging, print, digital). Imperceptible marks survive physical and digital transformations |
| **IPTC metadata standards** | International Press Telecommunications Council standards for photo metadata — not tamper-proof but widely adopted in journalism |

### Provenance Limitations

- **Voluntary adoption**: No requirement for AI tools to embed provenance markers
- **Strippable**: Metadata can often be removed (though C2PA's cryptographic signing makes tampering detectable)
- **Open-source gap**: Open-source models (e.g., open Stable Diffusion weights) don't embed watermarks — users generate content with no provenance
- **Retroactive problem**: Cannot add provenance to content already generated
- **Social media stripping**: Many platforms strip metadata on upload (improving, but inconsistent)

---

## 3. Takedown Services

### StopNCII.org

- **URL**: https://stopncii.org
- **Operated by**: Revenge Porn Helpline (part of SWGfL, UK charity), founded 2015
- **How it works**: Victims select intimate images on their own device. The tool generates a hash (digital fingerprint) locally — the image never leaves the device. Hash is shared with participating platforms who scan for matches and remove content
- **For**: Adults 18+ who are in the images
- **Stats**: 90%+ removal rate; 300,000+ individual images removed
- **Participating platforms**: Facebook/Instagram (Meta), TikTok, Bumble, Reddit, Pornhub, OnlyFans, Snap, Niantic, and others
- **Languages**: 30+
- **Privacy**: Only the hash is transmitted, never the actual image
- **Limitation**: Requires victim to still possess the original image. Only works on participating platforms

### Take It Down (NCMEC)

- **URL**: https://takeitdown.ncmec.org
- **Operated by**: National Center for Missing & Exploited Children (NCMEC)
- **For**: People whose nude/explicit images were taken when they were under 18
- **How it works**: Same hash-based approach as StopNCII — generates fingerprint on-device, shares only the hash with participating platforms
- **Participating platforms**: Meta, Google, Snap, Pornhub, TikTok, OnlyFans, Mega, Yubo, and others
- **Key feature**: Works for minors; anonymous; free
- **Also reports to**: CyberTipline for additional law enforcement follow-up

### Alecto AI

- **URL**: https://alectoai.com
- **What**: AI-powered tool that automates the detection and takedown of non-consensual intimate images across the web
- **Approach**: Proactively scans the web (not just participating platforms) for intimate images of a specific person using facial recognition + image matching

### Platform-Level Reporting

All major platforms have specific reporting mechanisms for non-consensual intimate imagery:
- **Google**: Content removal request for non-consensual explicit images (also covers deepfakes since 2024; deindexes from search results)
- **Meta (Facebook/Instagram)**: Dedicated NCII reporting flow
- **TikTok, Snap, Reddit, X/Twitter**: Specific NCII categories in content reporting
- **Pornhub/MindGeek (Aylo)**: Verification requirements + content removal

### Effectiveness Assessment

- **Hash-based systems** (StopNCII, Take It Down) are effective for exact/near-exact copies but can be defeated by minor modifications (cropping, re-rendering)
- **Platform cooperation** is the bottleneck — tools only work where platforms participate
- **Dedicated abuse sites** (e.g., deepfake porn sites) typically don't participate in takedown programs
- **Whack-a-mole problem**: Content can be re-uploaded, re-shared on non-participating platforms, distributed via encrypted messaging
- **International jurisdiction**: Many hosting providers and sites operate from jurisdictions with weak or no NCII laws

---

## 4. Advocacy Organizations

### Major Organizations

| Organization | Focus | URL |
|-------------|-------|-----|
| **NCMEC (National Center for Missing & Exploited Children)** | Operates CyberTipline (195M+ reports since 1998), Take It Down, Child Victim Identification Program. 30,000+ child victims identified. Receives mandatory reports from US ESPs | missingkids.org |
| **Thorn** | Founded by Ashton Kutcher & Demi Moore. Builds tech tools for platforms to detect CSAM. 12.4M+ files flagged for removal. 658B+ files processed. 1,046 law enforcement agencies using Thorn tools. Published AI safety checklist for model developers | thorn.org |
| **#MyImageMyChoice** | Grassroots cultural movement from creators of documentary ANOTHER BODY. Advocacy for legislation, amplifying survivor voices. Worked with White House, UK Parliament, World Economic Forum. Contributed to AI Executive Order and UK Online Safety Act | myimagemychoice.org |
| **Cyber Civil Rights Initiative (CCRI)** | Founded by victims' advocate Mary Anne Franks. Legal advocacy, research, crisis helpline (844-878-CCRI). Pioneered model state legislation on NCII | cybercivilrights.org |
| **Revenge Porn Helpline** | UK-based. Operates StopNCII.org. Direct victim support + takedown assistance. Part of SWGfL charity | revengepornhelpline.org.uk |
| **ECPAT International** | Global network of 125+ orgs in 104 countries fighting child sexual exploitation. Research + policy advocacy | ecpat.org |
| **Internet Watch Foundation (IWF)** | UK-based. Finds and removes CSAM from the internet. Works with industry, government, law enforcement globally | iwf.org.uk |
| **Canadian Centre for Child Protection** | Operates Cybertip.ca and Project Arachnid (automated CSAM detection crawler). Manages the CSAM hash list Cleanfeed Canada | protectchildren.ca |
| **INHOPE** | Network of 50+ national hotlines across 46 countries for reporting illegal content online, primarily CSAM | inhope.org |
| **All Tech Is Human** | Convenes responsible tech community. Published "Safety by Design" principles. Partnered with Stability AI and Thorn on child safety commitments | alltechishuman.org |
| **Panorama Global / Reclaim Coalition** | Coalition to end online image-based sexual violence. Funds and coordinates organizations working on this issue | panoramaglobal.org/reclaim |
| **Equality Now** | International women's rights org. Advocates for laws against image-based sexual abuse globally | equalitynow.org |

### Key Legislative Wins (Advocacy Impact)

- **US AI Executive Order (Oct 2023)**: Included section on deepfake abuse — #MyImageMyChoice directly contributed
- **UK Online Safety Act (Oct 2023)**: Criminalized sharing of deepfake intimate images. Parliament later announced plans to criminalize creation regardless of intent to distribute
- **DEFIANCE Act (US, introduced 2024)**: Federal civil right of action for deepfake NCII victims (Senate Bill 3696)
- **TAKE IT DOWN Act (US, signed into law 2025)**: Requires platforms to remove NCII within 48 hours of notification
- **EU AI Act**: Transparency requirements for deepfake content
- **South Korea**: Criminal penalties up to 5 years for deepfake sexual abuse (tightened after school deepfake scandal, 2024)

---

## 5. Industry Self-Regulation

### OpenAI

- **DALL-E**: Refuses to generate sexual/pornographic content, images of real people, or photorealistic faces of public figures
- **ChatGPT / GPT-4 image generation**: Safety filters block explicit content requests
- **Policy**: Usage policies explicitly prohibit generating NCII, CSAM, or "content that sexualizes minors in any way"
- **C2PA**: Images generated by DALL-E/ChatGPT include C2PA Content Credentials metadata
- **Membership**: C2PA steering committee member

### Stability AI

- **Safety page**: https://stability.ai/safety
- **Six safety principles**: Safety-first open source, banning misuse, expert collaboration, data integrity, transparent AI content, encouraging responsible use
- **Training data filtering**: Applies filters to remove unsafe/explicit images from training data before training
- **Hosted API**: Prompt and output filters for NSFW content
- **Licensing**: Ethical use license prohibits unlawful/exploitative use
- **Partnerships**: Partnered with Thorn and All Tech Is Human on child safety commitments
- **C2PA**: Implementing content authenticity standards + watermarking on hosted services
- **Open-source tension**: Open model weights can be used without safety filters — community has produced "uncensored" variants (e.g., NSFW-capable fine-tunes of Stable Diffusion)

### Midjourney

- Prohibits NSFW content generation via content moderation system
- Blocks prompts containing suggestive/explicit terms and names of real people in sexual contexts
- Bans users for attempting to circumvent filters
- No open-source weights — closed platform gives more control
- Does not participate in C2PA (as of last check)

### Google (Imagen, Gemini)

- Blocks explicit content generation across all consumer products
- SynthID watermarks embedded in all generated content
- Safety filters on prompts and outputs
- Published responsible AI practices and model cards
- C2PA steering committee member

### Meta (AI image generation)

- Safety filters on Meta AI image generation
- C2PA steering committee member
- Labels AI-generated content on Facebook/Instagram
- Participates in StopNCII.org

### Self-Regulation Limitations

- **Voluntary**: No legal requirement for these safeguards (though EU AI Act is changing this)
- **Open-source circumvention**: Open model weights (Stable Diffusion, Flux, LLaMA) can be fine-tuned with NSFW data, run locally without any safety filters. This is the single biggest gap in industry self-regulation
- **Jailbreaking**: Even closed models can sometimes be prompt-engineered to bypass safety filters
- **Competitive pressure**: Companies that restrict too aggressively risk losing users to less-restricted alternatives
- **Inconsistent enforcement**: Policies vary significantly across companies; enforcement quality varies

---

## 6. Technical Prevention: Can AI Be Built to Refuse?

### What Works (for closed models)

- **Prompt filtering**: Block input prompts containing sexual + person-identifying language patterns
- **Output filtering**: Classifier on generated images checks for nudity/explicit content before showing to user
- **RLHF / Constitutional AI**: Train models to refuse harmful requests via reinforcement learning from human feedback
- **Training data curation**: Remove explicit content from training data so the model has limited capability to generate it
- **Concept erasure**: Research techniques to surgically remove specific concepts (nudity, specific people) from model weights — e.g., "Erasing Concepts from Diffusion Models" (Gandikota et al., 2023)

### Why Prevention is Fundamentally Hard

1. **Open-source models can't be controlled**: Once model weights are released, anyone can:
   - Remove safety fine-tuning
   - Fine-tune on explicit/NCII datasets
   - Run locally with no filters
   - There are already "uncensored" versions of Stable Diffusion, Flux, and LLaMA models freely available
   
2. **Nudify apps exploit this**: 290+ "nudify" apps existed as of 2024 (up from a handful in Jan 2023). One app (Undress.ai) processed 600,000 photos in its first 21 days. Most use open-source model weights

3. **Dual-use problem**: The same capabilities that enable legitimate artistic/creative uses (generating human bodies, faces) enable abuse. You can't remove the capability to generate a nude body without also removing legitimate artistic capabilities

4. **Adversarial robustness**: Any safety filter can potentially be circumvented through:
   - Prompt engineering / obfuscation
   - Image-to-image workflows (starting from a partially explicit image)
   - Multi-step generation (generate parts separately, compose)
   - Fine-tuning on target-specific data
   
5. **Decentralization**: Local inference means no server-side monitoring is possible. Even if all commercial APIs are locked down, local GPU inference is freely available

6. **Arms race dynamic**: Each safety measure creates incentive and instructions for circumvention. Detection vs. generation is fundamentally adversarial

### Promising Technical Research

| Approach | Description | Limitation |
|----------|-------------|------------|
| **Concept erasure** | Surgically remove concepts from model weights (e.g., ability to generate nudity) | Can be reversed with fine-tuning on small datasets |
| **Unlearning** | Train models to "forget" how to generate certain content | Still reversible; active research area |
| **Robust watermarking** | Watermarks that survive model fine-tuning and image transformation | Open question whether any watermark can be truly unremovable |
| **Photoguard / Glaze** | Tools that add perturbations to real photos to prevent AI from using them as inputs (style mimicry, face swapping) | Requires users to proactively protect every photo; doesn't protect existing online images |
| **Nightshade** | "Poisons" images so that AI models trained on them produce distorted outputs | Only effective if widely adopted and if poisoned data enters training sets |

### Bottom Line on Technical Prevention

Technical prevention **can significantly raise the barrier** but **cannot eliminate the threat**. The existence of open-source generative models means that sufficiently motivated actors will always be able to generate non-consensual content. The most effective countermeasures are:

1. **Legal deterrence** (criminalization + enforcement)
2. **Platform-level detection + takedown** (faster removal)
3. **Provenance standards** (making it easier to identify AI-generated content)
4. **Social/cultural change** (stigmatizing consumption and creation)
5. **Technical barriers** (making it harder, but not impossible)

---

## Key Sources

| Source | URL |
|--------|-----|
| C2PA | https://c2pa.org |
| Content Credentials | https://contentcredentials.org |
| Google SynthID | https://deepmind.google/technologies/synthid/ |
| StopNCII.org | https://stopncii.org |
| Take It Down (NCMEC) | https://takeitdown.ncmec.org |
| NCMEC / CyberTipline | https://missingkids.org/theissues/csam |
| Thorn | https://thorn.org |
| #MyImageMyChoice | https://myimagemychoice.org |
| Cyber Civil Rights Initiative | https://cybercivilrights.org |
| Alecto AI | https://alectoai.com |
| Stability AI Safety | https://stability.ai/safety |
| Intel Labs (FakeCatcher) | https://intel.com/content/www/us/en/research/overview.html |
| Sensity AI | https://sensity.ai |
| Reality Defender | https://realitydefender.com |
| Hive AI Moderation | https://thehive.ai |
| Revenge Porn Helpline | https://revengepornhelpline.org.uk |
| ECPAT International | https://ecpat.org |
| Internet Watch Foundation | https://iwf.org.uk |
| Canadian Centre for Child Protection | https://protectchildren.ca |
| INHOPE | https://inhope.org |
| Panorama Global / Reclaim Coalition | https://panoramaglobal.org/reclaim |
| Thorn AI Safety Guide | https://info.thorn.org/hubfs/Thorn-SolutionsForAI.pdf |
| #MyImageMyChoice Deepfake Landscape Dossier | https://drive.google.com/file/d/1LlPw6TIh-l0qtFNXtfN_vpTf2sIv49t3/view |
