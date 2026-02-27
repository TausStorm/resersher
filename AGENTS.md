# Business Project

This is a VLTRA business project for research, writing, and strategic work.

## Available Commands

| Command     | Description                                                              |
| ----------- | ------------------------------------------------------------------------ |
| `/onboard`  | Set up business context through conversation. Creates `.context/` files. |
| `/research` | Deep research on any topic with sources and insights.                    |

## How It Works

1. **Run `/onboard` first** - Teaches the AI about your business through a conversational interview
2. **Use other commands** - They automatically read `.context/` for better, more relevant output
3. **Re-run `/onboard` anytime** - Update context as your business evolves

## Project Structure

```
.context/           # Business context (created by /onboard)
├── company.md      # Identity, industry, story, Sacpro internal issues
├── products.md     # Offerings, differentiators
├── customers.md    # Audience, personas, pain points
├── competitors.md  # Landscape, positioning (incl. Boldan/Trelleborg, Linervent)
├── partnerships.md # Sacpro, APS, resellers, Linervent, Picote
├── voice.md        # Tone, terminology
└── goals.md        # Priorities, challenges, financial notes

## Key Documents

- board/email-draft-styrelsen-oro.md          # Formal board escalation letter (Taus + Peter)
- board/bilaga-sammanfattning-forslag-och-initiativ.md  # All 17 initiatives raised, with status
- board/bilaga-sammanfattning-forslag-och-initiativ.pdf # PDF version of bilaga (for attachment)
- linervent-strategic-analysis.md       # Strategic analysis of Linervent/FLEX situation
- sacpro-picote-cooperation-proposal.md # Picote partnership proposal
- iso-audit-prep-forsaljning.md         # ISO audit prep for sales process
- email-draft-lucas-iso-concerns.md     # ISO concerns flagged to Lucas
- research/T&C/email-draft-fredrik.md   # T&C/warranty feedback to CEO
```

## Git Workflow

All work happens on `main`. The AI commits autonomously at logical checkpoints. You don't need to manage git.

## Tips

- **Be conversational** - Talk naturally, not in formal requests
- **Iterate freely** - Ask for changes, refinements, different angles
- **Context matters** - The more the AI knows about your business, the better the output
