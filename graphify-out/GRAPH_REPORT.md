# Graph Report - Tic-Tac-Toe-ReactJs  (2026-05-19)

## Corpus Check
- 4 files · ~982 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 33 nodes · 33 edges · 6 communities (3 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]

## God Nodes (most connected - your core abstractions)
1. `scripts` - 5 edges
2. `Board` - 5 edges
3. `dependencies` - 4 edges
4. `Game` - 4 edges
5. `calculateWinner()` - 3 edges
6. `register()` - 2 edges
7. `registerValidSW()` - 2 edges
8. `name` - 1 edges
9. `version` - 1 edges
10. `private` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities (6 total, 3 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.25
Nodes (7): dependencies, react, react-dom, react-scripts, name, private, version

### Community 2 - "Community 2"
Cohesion: 0.4
Nodes (3): isLocalhost, register(), registerValidSW()

### Community 3 - "Community 3"
Cohesion: 0.4
Nodes (5): scripts, build, eject, start, test

## Knowledge Gaps
- **12 isolated node(s):** `name`, `version`, `private`, `react`, `react-dom` (+7 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `scripts` connect `Community 3` to `Community 0`?**
  _High betweenness centrality (0.077) - this node is a cross-community bridge._
- **Why does `Game` connect `Community 4` to `Community 1`?**
  _High betweenness centrality (0.054) - this node is a cross-community bridge._
- **What connects `name`, `version`, `private` to the rest of the system?**
  _12 weakly-connected nodes found - possible documentation gaps or missing edges._