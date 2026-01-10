---
layout: post
title: "Synapse: An Experiment in AI-First Personal Knowledge Management"
date: 2026-01-10 10:00:00.000000000 +07:00
permalink: /synapse-ai-first-pkm
comments: true
comments_locked: false
categories:
- AI
- Productivity
---

*Building an Obsidian vault that AI can actually understand.*

I recently stumbled on [Jason Cyr's video on organizing Obsidian notes with AI,](https://www.youtube.com/watch?v=1ig8wHXSv0g) and my whole perspective on PKM shifted.

After using Notion for years for personal knowledge management (PKM), I'm exploring a new workflow. I'm still using Notion and intend to continue, but not for everything. I'm a huge fan of Notion's databases. In my opinion, it is its superpower.

However, with the flexibility comes great potential for mess and for forgetting information. In addition, it is difficult to get an overview of my personal knowledge and to find connections and insights.

This post introduces **Synapse**, the framework I'm developing for this experiment. I'm sharing it publicly because I think others might find it useful, but I want to be upfront: I don't know if this will work as well as I hope. It's an experiment.

![Synapse PKM for Obsidian](/assets/images/2026-01-10-synapse-ai-first-pkm/obsidian-synapse.webp)

## An Investment With Low Return

I have lots of resources saved in Notion. Some are relevant to certain projects, some are general knowledge, and some are related to ideas and self-reflection. However, connecting the dots, finding patterns, and uncovering insights is practically impossible in Notion.

At the same time, I have been extensively embedding AI into my workflows: drafting documents, analyzing content, brainstorming ideas, writing code... And it is crystal clear that the benefits are enormous *when used efficiently.*

One thing that's become undeniable is that the more context, and the better the context I provide to LLMs, the better the results. Seeing Jason demonstrate how AI could help structure and organize thousands of notes and surface insights never seen before from his trove of notes and resources pushed me to try moving to Obsidian.

I know that Notion has an MCP that can, to an extent, be used for what I'm describing, but using local `.md` files is infinitely more effective.

I started researching Obsidian best practices to set up my vault and got to work. As I set up my workspace, however, one thing hit me: **most of the best practices out there are optimized for humans. My goal was to have an AI-first PKM.**

![Notion migration, all done with Claude](/assets/images/2026-01-10-synapse-ai-first-pkm/notion-migration-obsidian-synapse.webp)

_(The migration from Notion was entirely done with Claude, and Synapse includes a command for migrating resources from Notion.)_

## When It All Flipped

What if we structured notes specifically for AI consumption? Not in a way that makes them significantly worse for humans, markdown is still markdown, but with deliberate choices about:

- What metadata to include
- How to write opening paragraphs
- When to be explicit vs. implicit
- How to link related content

The hypothesis is that small structural changes can dramatically improve how well AI assistants understand and work with your personal knowledge base. The human experience may degrade slightly, but it's a compromise I can accept for greater efficiency through AI assistance.

## My (Limited) Understanding of LLMs

I should be clear: I'm not an ML engineer. My understanding of how LLMs process information comes from:

1. **Using them extensively** - Thousands of conversations across different use cases
2. **Reading explanations aimed at practitioners** - Not the papers, but the practical guidance
3. **Experimenting** - Trying different approaches and seeing what works

Here's my working mental model of what matters for retrieval:

- **Frontmatter is searchable metadata** - Fields like `type`, `status`, `summary` let you filter and find notes without reading content
- **First paragraphs carry disproportionate weight** - Whether through attention mechanisms or chunking, opening content matters more
- **Explicit beats implicit** - "Sarah (Engineering Lead at Acme Corp)" retrieves better than "Sarah" with the context buried elsewhere
- **Consistent structure enables pattern matching** - If all meeting notes follow the same format, the AI learns what to expect
- **Redundancy is acceptable** - Repeating context across notes helps when notes are retrieved in isolation

I could be wrong about the mechanisms. But the practical outcomes have been noticeably better when I follow these principles.

## Sources and Influences

I didn't come up with these ideas in a vacuum. Here are the resources that shaped my thinking:

### Research and Guides

- **Anthropic's documentation on Claude** - Particularly their guidance on prompt engineering and context windows
- **OpenAI's best practices for embeddings** - Useful even outside their ecosystem
- **Various RAG (Retrieval-Augmented Generation) guides** - The patterns for preparing documents for retrieval apply directly to personal notes

### Community Knowledge

- **Obsidian forums and Discord** - Lots of discussion about AI integration, though most focuses on plugins rather than structure
- **PARA method (Tiago Forte)** - The Projects/Areas/Resources/Archive taxonomy influenced my folder structure (I've been using PARA in my Notion setup for years)
- **Zettelkasten principles** - Atomic notes, explicit links, and the idea that structure aids thinking

### Conversations with Claude

A significant portion of this framework emerged from extended conversations with Claude (specifically Claude Code). I'd describe what I was trying to achieve, Claude would suggest structures or approaches, I'd push back or ask for alternatives, and we'd iterate.

This wasn't "AI generated my framework." It was more like having an extremely patient collaborator who could:

- Explain tradeoffs between different approaches
- Point out edge cases I hadn't considered
- Help me articulate principles I was intuiting but couldn't name
- Actually implement the tooling (commands, templates) as we designed them

The `/synapse-setup`, `/synapse-review`, and other commands in the framework were designed and built through this collaborative process.

## What Synapse Actually Is

Synapse is a framework for structuring Obsidian vaults so AI assistants can effectively read, understand, and work with your notes. It includes:

**Folder structure:**

```
vault/
├── inbox/          # Unprocessed captures
├── meetings/       # Meeting notes
├── projects/       # Active project briefs
├── areas/          # Ongoing responsibilities
├── resources/      # Reference material
├── people/         # Contact notes
├── templates/      # Note templates
└── daily/          # Daily notes
```

**Frontmatter conventions:**

- Required fields for each note type
- A `summary` field for every note (one sentence describing its purpose)
- Consistent metadata that enables filtering and retrieval

**Content principles:**

- Self-contained first paragraphs (context without following links)
- Explicit references (full names and roles, not just pronouns)
- Hierarchical headers that provide semantic structure

**Claude commands:**

- `/synapse-setup` - Personalize the vault for your context
- `/synapse-review` - Clean up manually-created notes
- `/synapse-update` - Pull framework updates
- Plus maintenance commands for framework contributors

## The Play

Here's what I'm testing:

1. **Can I actually maintain this?** - Structured notes require discipline. Will I stick with it, or will entropy win? This is where the `/synapse-review` Claude command comes to help.
2. **Does it improve AI interactions?** - When I ask Claude about my notes, projects, or past decisions, are the answers noticeably better?
3. **Is the overhead worth it?** - Adding summaries and explicit context takes time. Does the payoff justify the investment?
4. **What breaks?** - Which principles turn out to be unnecessary? Which are missing?

I'll be updating this post (or writing follow-ups) as I learn more.

## Try It Yourself

The framework is open source: [github.com/julien731/synapse-pkm](https://github.com/julien731/synapse-pkm)

To get started:

1. Clone the repo (or use it as a template)
2. Open it in Obsidian
3. Run `/synapse-setup` to personalize it
4. Start taking notes

If you try it, I'd love to hear what works and what doesn't. This is very much a v0.x release. Feedback will shape where it goes.

## What I Don't Know

Plenty:

- Whether these principles generalize beyond my use case (CPO at a software consultancy)
- How well this works with other AI assistants (I've only tested with Claude)
- If the complexity is justified for smaller vaults
- Whether better AI tooling will make structural optimization unnecessary
- If I'll still be using this in a year

The honest answer is that I'm building this because it *seems* like the right approach based on my current understanding. That understanding will evolve. The framework will too.

*Synapse is named for the connection point between neurons and, by extension, the connection point between human knowledge and AI. It's also just a word that sounds nice and wasn't taken on GitHub.*
