# JOCKY AST v1.0 Contract

## 1. Status
**Frozen — M2 → M3 Interface Baseline (Contract #2)**  
- **Version**: 1.0  
- **Producer**: M2 (Compiler Frontend — Lexer, Parser, AST)  
- **Consumer**: M3 (Semantic Analysis, Type Checking, Forensic IR Generation)  
- **Authoritative Specifications**:
  - *JOCKY Grammar Specification v0.1 (M1 — Architecture & Language Design)*
  - *JOCKY 14-Day MVP Implementation & Execution Plan §5 (Contract #2)*
  - *JOCKY Engineering Handbook §14.3, §14.4*
  - *JOCKY Team Work Allocation & Responsibility Document (M2/M3 Sections)*

---

## 2. Scope & Responsibility Boundary

### M2 Responsibilities:
- Turn UTF-8 JOCKY source into tokens via `jocky-lexer`.
- Parse the token stream into a strictly structured syntactic tree via `jocky-parser`.
- Produce the canonical AST node representations defined in `jocky-ast` (`compiler/ast/src/lib.rs`).
- Reject syntactically malformed programs (unbalanced braces/parentheses, bare top-level statements, invalid assignment targets, multiple investigation blocks, missing expressions).
- Preserve 1-based source location spans on all AST nodes for downstream diagnostic reporting.

### M3 Responsibilities (Explicit Non-Goals for M2):
- **Module & Function Allowlists**: M2 accepts any `Identifier.Identifier(Arguments)` shape syntactically. M3 validates whether the module (`System`, `Process`, `Network`, `Evidence`) and function (`info`, `collect`, `filter`, `connections`, `listeners`, `preserve`, `verify`) exist in the MVP allowlist.
- **Type Checking & Inference**: M2 parses optional type annotations (`processes: ProcessSet = ...`) as syntax identifiers. M3 verifies type compatibility, ensures declared types match inferred types, and enforces return-type bindings.
- **Filter Field Scoping**: M2 parses filter conditions as general boolean/comparison expressions. M3 resolves bare field identifiers (e.g. `memory`, `pid`, `name`) against the receiver record type (e.g. `Process`), ensuring the field exists and that literal operand types are compatible.
- **Arity & Evidentiary Rules**: M3 checks that niladic functions (`System.info()`, `Process.collect()`) take 0 arguments, and that evidentiary functions (`Evidence.preserve(src)`, `Evidence.verify(ev)`) receive valid evidentiary identifiers.
- **Forensic IR Generation**: M3 translates the validated AST into Forensic IR instructions (`INVESTIGATION_BEGIN`, `COLLECT_SYSTEM_INFO`, `COLLECT_PROCESSES`, `FILTER_PROCESSES`, `COLLECT_NETWORK_CONNECTIONS`, `COLLECT_NETWORK_LISTENERS`, `PRESERVE_EVIDENCE`, `VERIFY_EVIDENCE`, `INVESTIGATION_END`).

---

## 3. Compiler Pipeline

```
  .jocky Source Text
          │
          ▼
   [ jocky-lexer ]        (Tokenizes keywords, identifiers, literals, operators, newlines)
          │
          ▼
   [ jocky-parser ]       (Recursive-descent syntax parsing, expression precedence)
          │
          ▼
     AST v1.0             (Frozen Rust Structs & Serde-compatible JSON data model)
          │
          ▼
  [ M3 Semantic ]         (Allowlists, type checks, field resolution, IR generation)
```

---

## 4. Top-Level AST Structure

A valid JOCKY program consists of **exactly one** top-level investigation block. Bare top-level statements outside an investigation block and empty source files are strictly rejected at the parser level.

```rust
pub struct Program {
    pub investigation: Investigation,
}

pub struct Investigation {
    pub name: StringLiteral,
    pub body: Vec<Statement>,
    pub span: Span,
}

pub struct StringLiteral {
    pub value: String,
    pub span: Span,
}
```

- `investigation.name.value`: Contains the string title without enclosing double quotes (e.g. `"Endpoint Triage"`).
- `investigation.body`: An ordered list of statements representing the sequential forensic actions inside the block.
- `investigation.span`: Source position of the `investigation` keyword.

---

## 5. Statement Types

Inside an investigation block body, statements belong to one of two mutually exclusive variants:

```rust
pub enum Statement {
    /// A variable assignment: target = expr or target: TypeName = expr
    Assignment(Assignment),
    /// A standalone expression statement, e.g. Evidence.preserve(processes)
    ExpressionStatement(Expr),
}
```

### Assignment
Represents intermediate variable bindings required to chain forensic data between operations:
```rust
pub struct Assignment {
    pub target: Identifier,
    pub type_annotation: Option<Identifier>,
    pub value: Expr,
    pub span: Span,
}
```
- `target`: The identifier receiving the assigned value.
- `type_annotation`: `Some(Identifier)` if explicitly annotated (`processes: ProcessSet = ...`), or `None` if inferred (`processes = ...`).
- `value`: The right-hand expression subtree.
- `span`: Location of the target identifier.

### ExpressionStatement
Represents standalone terminal operations whose results are not assigned to variables (e.g., standalone evidence preservation or verification):
- Wraps any `Expr`, typically an `Expr::Call`.

---

## 6. Expression Hierarchy & Variants

Expressions are evaluated according to Grammar v0.1 precedence:  
`or` < `and` < `not` < comparison (`==`, `!=`, `>`, `<`, `>=`, `<=`) < postfix (`.`).

```rust
pub enum Expr {
    Call(Call),
    Filter(Filter),
    Comparison(Comparison),
    BinaryLogical(BinaryLogical),
    UnaryLogical(UnaryLogical),
    Identifier(Identifier),
    Literal(Literal),
}
```

### 1. Call
Standard-library accesses and method invocations:
```rust
pub struct Call {
    pub object: Box<Expr>,
    pub function: Identifier,
    pub arguments: Vec<Expr>,
    pub span: Span,
}
```
- `object`: Receiver subtree (e.g., `Expr::Identifier("Process")`, or a chained `Expr::Call`).
- `function`: Identifier naming the invoked function/method (e.g. `"collect"`, `"preserve"`).
- `arguments`: Ordered argument expression subtrees (empty for niladic calls).
- `span`: Location of the function identifier.

### 2. Filter
Method-style collection filtering (`source.filter(condition)`):
```rust
pub struct Filter {
    pub source: Box<Expr>,
    pub condition: Box<Expr>,
    pub span: Span,
}
```
- `source`: The collection expression being filtered (e.g., `Expr::Identifier("processes")` or a chained `Expr::Call(Process.collect())`).
- `condition`: A boolean expression subtree (typically a `Comparison` or `BinaryLogical`).
- `span`: Location of the `filter` keyword token.

### 3. Comparison
Binary relational operations between expressions:
```rust
pub struct Comparison {
    pub left: Box<Expr>,
    pub operator: ComparisonOp,
    pub right: Box<Expr>,
    pub span: Span,
}

pub enum ComparisonOp {
    EqualEqual,   // ==
    BangEqual,    // !=
    Greater,      // >
    Less,         // <
    GreaterEqual, // >=
    LessEqual,    // <=
}
```

### 4. BinaryLogical
Left-associative boolean combinators (`and`, `or`):
```rust
pub struct BinaryLogical {
    pub left: Box<Expr>,
    pub operator: LogicalBinaryOp,
    pub right: Box<Expr>,
    pub span: Span,
}

pub enum LogicalBinaryOp {
    And, // and
    Or,  // or
}
```

### 5. UnaryLogical
Prefix boolean negation (`not`):
```rust
pub struct UnaryLogical {
    pub operator: LogicalUnaryOp,
    pub expr: Box<Expr>,
    pub span: Span,
}

pub enum LogicalUnaryOp {
    Not, // not
}
```

### 6. Identifier
Identifiers representing variables, modules, fields, or types:
```rust
pub struct Identifier {
    pub name: String,
    pub span: Span,
}
```

### 7. Literal
Constants recognized by the DSL:
```rust
pub enum Literal {
    String(StringLiteral),
    Integer {
        value: i64,
        span: Span,
    },
    Float {
        value: f64,
        span: Span,
    },
    Boolean {
        value: bool,
        span: Span,
    },
    ByteSize {
        bytes: u64,
        raw: String,
        span: Span,
    },
}
```

---

## 7. ByteSizeLiteral Representation

Grammar v0.1 §2.8.5 defines byte-size literals as integer digits immediately followed by a 2-character unit suffix (`KB`, `MB`, `GB`, `TB`) without whitespace.

### Representation in AST:
```rust
Literal::ByteSize {
    bytes: u64,
    raw: String,
    span: Span,
}
```

### Normalization Multipliers:
- **`KB`**: `digits * 1,024`
- **`MB`**: `digits * 1,048,576` (`1024 * 1024`)
- **`GB`**: `digits * 1,073,741,824` (`1024 * 1024 * 1024`)
- **`TB`**: `digits * 1,099,511,627,776` (`1024 * 1024 * 1024 * 1024`)

### Concrete Example:
For the source literal `500MB`:
- `bytes`: `524288000` (computed as `500 * 1024 * 1024`)
- `raw`: `"500MB"`
- `span`: Position in source text

> **Benefit for M3**: M3 does not need to re-parse units or perform conversion math. The pre-calculated byte count in `bytes` can be directly encoded as an integer threshold parameter in the Forensic IR. The original `raw` string remains available for diagnostic messages.

---

## 8. Source Spans & Diagnostics

Every node in the AST carries a `Span`:
```rust
pub struct Span {
    pub line: usize,   // 1-based line number
    pub column: usize, // 1-based character column number
}
```

- **Coordinates**: Line and column numbers are 1-based to align with standard compiler diagnostics and code editors.
- **Coverage**: Every node (`Investigation`, `Assignment`, `Call`, `Filter`, `Comparison`, `BinaryLogical`, `UnaryLogical`, `Identifier`, and all `Literal` variants) stores the exact starting span of its primary token.

---

## 9. JSON Serialization Architecture

All AST data structures derive `serde::Serialize` and `serde::Deserialize`.

Serialization compatibility for `jocky_lexer::Span` is implemented using Serde's remote derive pattern:
```rust
#[derive(Serialize, Deserialize)]
#[serde(remote = "Span")]
pub struct SpanDef {
    pub line: usize,
    pub column: usize,
}
```
Every struct and enum variant holding a `span` applies `#[serde(with = "SpanDef")]`.

### Enum Tagging Format:
- **Enums with fields** (`Statement`, `Expr`, `Literal`): External tagging (e.g. `{"Assignment": { ... }}`, `{"Filter": { ... }}`).
- **Fieldless enums** (`ComparisonOp`, `LogicalBinaryOp`, `LogicalUnaryOp`): Plain string identifiers (e.g. `"EqualEqual"`, `"And"`, `"Not"`).

---

## 10. Representative Examples & Serialized JSON

### Example 1: Full Investigation with All 7 MVP Operations

#### JOCKY Source:
```jocky
investigation "Endpoint Triage" {
    sys = System.info()
    processes = Process.collect()
    suspicious = processes.filter(name == "powershell.exe" and memory > 500MB)
    netconns = Network.connections()
    listeners = Network.listeners()
    ev = Evidence.preserve(suspicious)
    Evidence.verify(ev)
}
```

#### Serialized JSON (Actual Output):
```json
{
  "investigation": {
    "name": {
      "value": "Endpoint Triage",
      "span": { "line": 1, "column": 15 }
    },
    "body": [
      {
        "Assignment": {
          "target": {
            "name": "sys",
            "span": { "line": 2, "column": 5 }
          },
          "type_annotation": null,
          "value": {
            "Call": {
              "object": {
                "Identifier": {
                  "name": "System",
                  "span": { "line": 2, "column": 11 }
                }
              },
              "function": {
                "name": "info",
                "span": { "line": 2, "column": 18 }
              },
              "arguments": [],
              "span": { "line": 2, "column": 18 }
            }
          },
          "span": { "line": 2, "column": 5 }
        }
      },
      {
        "Assignment": {
          "target": {
            "name": "processes",
            "span": { "line": 3, "column": 5 }
          },
          "type_annotation": null,
          "value": {
            "Call": {
              "object": {
                "Identifier": {
                  "name": "Process",
                  "span": { "line": 3, "column": 17 }
                }
              },
              "function": {
                "name": "collect",
                "span": { "line": 3, "column": 25 }
              },
              "arguments": [],
              "span": { "line": 3, "column": 25 }
            }
          },
          "span": { "line": 3, "column": 5 }
        }
      },
      {
        "Assignment": {
          "target": {
            "name": "suspicious",
            "span": { "line": 4, "column": 5 }
          },
          "type_annotation": null,
          "value": {
            "Filter": {
              "source": {
                "Identifier": {
                  "name": "processes",
                  "span": { "line": 4, "column": 18 }
                }
              },
              "condition": {
                "BinaryLogical": {
                  "left": {
                    "Comparison": {
                      "left": {
                        "Identifier": {
                          "name": "name",
                          "span": { "line": 4, "column": 35 }
                        }
                      },
                      "operator": "EqualEqual",
                      "right": {
                        "Literal": {
                          "String": {
                            "value": "powershell.exe",
                            "span": { "line": 4, "column": 43 }
                          }
                        }
                      },
                      "span": { "line": 4, "column": 40 }
                    }
                  },
                  "operator": "And",
                  "right": {
                    "Comparison": {
                      "left": {
                        "Identifier": {
                          "name": "memory",
                          "span": { "line": 4, "column": 64 }
                        }
                      },
                      "operator": "Greater",
                      "right": {
                        "Literal": {
                          "ByteSize": {
                            "bytes": 524288000,
                            "raw": "500MB",
                            "span": { "line": 4, "column": 73 }
                          }
                        }
                      },
                      "span": { "line": 4, "column": 71 }
                    }
                  },
                  "span": { "line": 4, "column": 60 }
                }
              },
              "span": { "line": 4, "column": 28 }
            }
          },
          "span": { "line": 4, "column": 5 }
        }
      },
      {
        "Assignment": {
          "target": {
            "name": "netconns",
            "span": { "line": 5, "column": 5 }
          },
          "type_annotation": null,
          "value": {
            "Call": {
              "object": {
                "Identifier": {
                  "name": "Network",
                  "span": { "line": 5, "column": 16 }
                }
              },
              "function": {
                "name": "connections",
                "span": { "line": 5, "column": 24 }
              },
              "arguments": [],
              "span": { "line": 5, "column": 24 }
            }
          },
          "span": { "line": 5, "column": 5 }
        }
      },
      {
        "Assignment": {
          "target": {
            "name": "listeners",
            "span": { "line": 6, "column": 5 }
          },
          "type_annotation": null,
          "value": {
            "Call": {
              "object": {
                "Identifier": {
                  "name": "Network",
                  "span": { "line": 6, "column": 17 }
                }
              },
              "function": {
                "name": "listeners",
                "span": { "line": 6, "column": 25 }
              },
              "arguments": [],
              "span": { "line": 6, "column": 25 }
            }
          },
          "span": { "line": 6, "column": 5 }
        }
      },
      {
        "Assignment": {
          "target": {
            "name": "ev",
            "span": { "line": 7, "column": 5 }
          },
          "type_annotation": null,
          "value": {
            "Call": {
              "object": {
                "Identifier": {
                  "name": "Evidence",
                  "span": { "line": 7, "column": 10 }
                }
              },
              "function": {
                "name": "preserve",
                "span": { "line": 7, "column": 19 }
              },
              "arguments": [
                {
                  "Identifier": {
                    "name": "suspicious",
                    "span": { "line": 7, "column": 28 }
                  }
                }
              ],
              "span": { "line": 7, "column": 19 }
            }
          },
          "span": { "line": 7, "column": 5 }
        }
      },
      {
        "ExpressionStatement": {
          "Call": {
            "object": {
              "Identifier": {
                "name": "Evidence",
                "span": { "line": 8, "column": 5 }
              }
            },
            "function": {
              "name": "verify",
              "span": { "line": 8, "column": 14 }
            },
            "arguments": [
              {
                "Identifier": {
                  "name": "ev",
                  "span": { "line": 8, "column": 21 }
                }
              }
            ],
            "span": { "line": 8, "column": 14 }
          }
        }
      }
    ],
    "span": { "line": 1, "column": 1 }
  }
}
```

---

### Example 2: Chained Method Call `Process.collect().filter(pid > 1000)`

#### JOCKY Source:
```jocky
investigation "Process Check" {
    processes = Process.collect().filter(pid > 1000)
}
```

#### Serialized JSON (Actual Output):
```json
{
  "investigation": {
    "name": {
      "value": "Process Check",
      "span": { "line": 1, "column": 15 }
    },
    "body": [
      {
        "Assignment": {
          "target": {
            "name": "processes",
            "span": { "line": 2, "column": 5 }
          },
          "type_annotation": null,
          "value": {
            "Filter": {
              "source": {
                "Call": {
                  "object": {
                    "Identifier": {
                      "name": "Process",
                      "span": { "line": 2, "column": 17 }
                    }
                  },
                  "function": {
                    "name": "collect",
                    "span": { "line": 2, "column": 25 }
                  },
                  "arguments": [],
                  "span": { "line": 2, "column": 25 }
                }
              },
              "condition": {
                "Comparison": {
                  "left": {
                    "Identifier": {
                      "name": "pid",
                      "span": { "line": 2, "column": 42 }
                    }
                  },
                  "operator": "Greater",
                  "right": {
                    "Literal": {
                      "Integer": {
                        "value": 1000,
                        "span": { "line": 2, "column": 48 }
                      }
                    }
                  },
                  "span": { "line": 2, "column": 46 }
                }
              },
              "span": { "line": 2, "column": 35 }
            }
          },
          "span": { "line": 2, "column": 5 }
        }
      }
    ],
    "span": { "line": 1, "column": 1 }
  }
}
```

---

### Example 3: Typed Assignment with Type Annotation

#### JOCKY Source:
```jocky
investigation "Typed Script" {
    procs: ProcessSet = Process.collect()
}
```

#### Serialized JSON (Actual Output):
```json
{
  "investigation": {
    "name": {
      "value": "Typed Script",
      "span": { "line": 1, "column": 15 }
    },
    "body": [
      {
        "Assignment": {
          "target": {
            "name": "procs",
            "span": { "line": 2, "column": 5 }
          },
          "type_annotation": {
            "name": "ProcessSet",
            "span": { "line": 2, "column": 12 }
          },
          "value": {
            "Call": {
              "object": {
                "Identifier": {
                  "name": "Process",
                  "span": { "line": 2, "column": 25 }
                }
              },
              "function": {
                "name": "collect",
                "span": { "line": 2, "column": 33 }
              },
              "arguments": [],
              "span": { "line": 2, "column": 33 }
            }
          },
          "span": { "line": 2, "column": 5 }
        }
      }
    ],
    "span": { "line": 1, "column": 1 }
  }
}
```

---

## 11. M3 Integration Notes

### What M3 Can Rely On:
1. **Valid Structural Shape**: The AST is guaranteed to be a single `Investigation` containing well-formed statements. Syntax errors are already filtered out.
2. **Precedence Invariant**: In compound filter conditions, operator precedence (`or` < `and` < `not` < comparison) and left-associativity are already resolved into the tree structure.
3. **Byte Normalization**: `Literal::ByteSize` values provide ready-to-use byte quantities as `u64` integers in the `bytes` field.
4. **Declared vs. Inferred Types**: `Assignment.type_annotation` is `Some(Identifier)` if explicitly written and `None` if omitted.
5. **Exact Locations**: Every AST node carries non-zero 1-based source spans.

### What M3 Must Validate:
1. **Module & Function Names**: Validate identifiers against the 7 MVP operations allowlist.
2. **Type Compatibility**: Type check function call returns and argument types (e.g. `Evidence.preserve` requires a `ProcessSet`, `NetworkConnectionSet`, or `SystemInfo`).
3. **Filter Fields**: Resolve filter condition left-hand identifiers against fields of the element type being filtered (e.g. `memory`, `pid`, `name` on `Process`).
4. **Operation Arity**: Ensure `System.info()`, `Process.collect()`, `Network.connections()`, and `Network.listeners()` have 0 arguments; ensure `Evidence.preserve()` and `Evidence.verify()` have exactly 1 argument.

---

## 12. Versioning & Change Policy

- **Contract Version**: `v1.0`
- **Freeze Status**: This contract is frozen as the implementation baseline between M2 and M3.
- **Change Procedure**: Any modification to AST structs, enum variants, field names, or serialization formats requires mutual agreement between M2 and M3, with an explicit version bump to `v1.1` or `v2.0`.

---

## 13. Open Coordination Items

1. **Forensic IR Serialization of ByteSize Thresholds (M3)**:
   - `Literal::ByteSize` provides both `bytes: u64` (`524288000`) and `raw: String` (`"500MB"`).
   - M3 should confirm that encoding `bytes: u64` directly into Forensic IR parameter blocks matches the backend agent/collector deserialization expectations.
2. **Arithmetic Operator Rejection Error Classification (M1)**:
   - Grammar v0.1 §8 Invalid Example 9 describes `bad = processes + 5` as a Parser-stage rejection.
   - The current pipeline rejects `+` at the Lexer stage as an unrecognized character, preventing invalid tokens from reaching the parser. If M1 strictly requires this rejection to occur during Parser execution with the specific arithmetic advisory message, M1 should specify whether the Lexer should emit an unsupported operator token.
