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
├── company.md      # Identity, industry, story
├── products.md     # Offerings, differentiators
├── customers.md    # Audience, personas, pain points
├── competitors.md  # Landscape, positioning
├── voice.md        # Tone, terminology
└── goals.md        # Priorities, challenges
```

## Git Workflow

All work happens on `main`. The AI commits autonomously at logical checkpoints. You don't need to manage git.

## Tips

- **Be conversational** - Talk naturally, not in formal requests
- **Iterate freely** - Ask for changes, refinements, different angles
- **Context matters** - The more the AI knows about your business, the better the output
