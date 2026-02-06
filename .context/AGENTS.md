# Business Context

This folder contains business context created by `/onboard`. All business skills read these files automatically.

## Files

| File             | Purpose                                         |
| ---------------- | ----------------------------------------------- |
| `company.md`     | Identity, industry, size, stage, story          |
| `products.md`    | Offerings, differentiators, value proposition   |
| `customers.md`   | Target segments, personas, pain points          |
| `competitors.md` | Competitive landscape, positioning              |
| `voice.md`       | Tone, terminology, glossary                     |
| `goals.md`       | Current priorities, challenges, success metrics |

## Usage

**Creating context:** Run `/onboard` to populate these files through a conversational interview.

**Updating context:** Run `/onboard` again anytime. It will offer to update specific files or go through everything.

**How skills use it:** Business skills (like `/research`) read relevant files at the start to:

- Frame output in terms relevant to your business
- Use your terminology and communication style
- Connect insights to your stated goals
- Prioritize what matters to your situation

## Notes

- Files are markdown for readability
- Not all files need content - skip what's not relevant
- Context improves over time as you refine it
