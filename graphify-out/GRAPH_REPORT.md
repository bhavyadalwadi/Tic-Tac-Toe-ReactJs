# Graph Report - Tic-Tac-Toe-ReactJs  (2026-05-26)

## Corpus Check
- 21 files · ~2,946 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 143 nodes · 126 edges · 21 communities (12 shown, 9 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `94c4f51f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]

## God Nodes (most connected - your core abstractions)
1. `Tic-Tac-Toe-ReactJs Project Context` - 16 edges
2. `Primary App` - 15 edges
3. `Tic-Tac-Toe-ReactJs Architecture` - 14 edges
4. `Tic-Tac-Toe-ReactJs Workflows` - 10 edges
5. `Tic-Tac-Toe-ReactJs Coding Rules` - 9 edges
6. `Tic-Tac-Toe-ReactJs [Archived]` - 8 edges
7. `Tic-Tac-Toe-ReactJs Onboarding` - 6 edges
8. `scripts` - 5 edges
9. `Board` - 5 edges
10. `dependencies` - 4 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities (21 total, 9 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.15
Nodes (12): dependencies, react, react-dom, react-scripts, name, private, scripts, build (+4 more)

### Community 1 - "Community 1"
Cohesion: 0.21
Nodes (3): Board, calculateWinner(), Game

### Community 2 - "Community 2"
Cohesion: 0.4
Nodes (3): isLocalhost, register(), registerValidSW()

### Community 3 - "Community 3"
Cohesion: 0.12
Nodes (16): Business Purpose, Critical Dependencies, Current Architecture Themes, Deployment Model, Environments, Important APIs, Important Databases, Important Queues / Events (+8 more)

### Community 4 - "Community 4"
Cohesion: 0.12
Nodes (15): Critical Workflows, Dangerous Code Paths, Databases Used, Dependencies, Failure Modes, Important Source Files, Inbound APIs, Known Technical Debt (+7 more)

### Community 5 - "Community 5"
Cohesion: 0.2
Nodes (9): Current status, Key files, Maintenance note, Resume value, Run locally, This Tic-Tac-Toe App is Created using React Js, Tic-Tac-Toe-ReactJs [Archived], What it does (+1 more)

### Community 6 - "Community 6"
Cohesion: 0.13
Nodes (14): Auth Flow, Caching Layers, Deployment Topology, End-to-End Request Flows, Event-Driven Architecture, Failover Behavior, Frontend / Backend Interaction, Observability Architecture (+6 more)

### Community 7 - "Community 7"
Cohesion: 0.18
Nodes (10): Debugging, Deployment, Feature Rollout, Incident Response, Local Development, Migrations, Observability Investigation, Rollback (+2 more)

### Community 8 - "Community 8"
Cohesion: 0.2
Nodes (9): API Conventions, Architecture Patterns, Database / Migration Patterns, Error Handling / Logging, Naming / Structure, State Management, Testing Conventions, Tic-Tac-Toe-ReactJs Coding Rules (+1 more)

### Community 9 - "Community 9"
Cohesion: 0.29
Nodes (6): Critical Entrypoints, First Read, How To Start Reasoning, Local Run Baseline, Module Map, Tic-Tac-Toe-ReactJs Onboarding

### Community 10 - "Community 10"
Cohesion: 0.5
Nodes (3): Graphify-first repo discovery, Preserve repo separation, Tic-Tac-Toe-ReactJs Decision Log

### Community 11 - "Community 11"
Cohesion: 0.5
Nodes (3): Critical Entrypoints, Read First, Top-Level Modules

## Knowledge Gaps
- **97 isolated node(s):** `name`, `version`, `private`, `react`, `react-dom` (+92 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `name`, `version`, `private` to the rest of the system?**
  _97 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.12 - nodes in this community are weakly interconnected._
- **Should `Community 4` be split into smaller, more focused modules?**
  _Cohesion score 0.12 - nodes in this community are weakly interconnected._
- **Should `Community 6` be split into smaller, more focused modules?**
  _Cohesion score 0.13 - nodes in this community are weakly interconnected._