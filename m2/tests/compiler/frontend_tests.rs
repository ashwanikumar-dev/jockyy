// JOCKY Compiler Frontend Compliance Tests -- Day 5 (M2)
//
// Normative test cases T1-T13 defined in:
// JOCKY Grammar Specification v0.1 Section 16 (Pages 31-32)

use jocky_ast::*;
use jocky_lexer::Lexer;
use jocky_parser::Parser;

fn parse_valid(source: &str) -> Program {
    let mut lexer = Lexer::new(source);
    let tokens = lexer.tokenize().expect("lexing should succeed for valid script");
    let mut parser = Parser::new(tokens);
    parser.parse().expect("parsing should succeed for valid script")
}

fn assert_parser_rejects(source: &str) {
    let mut lexer = Lexer::new(source);
    let tokens = lexer.tokenize().expect("lexing should succeed");
    let mut parser = Parser::new(tokens);
    assert!(parser.parse().is_err(), "expected parser to reject: {}", source);
}

fn assert_lexer_rejects(source: &str) {
    let mut lexer = Lexer::new(source);
    assert!(lexer.tokenize().is_err(), "expected lexer to reject: {}", source);
}

// -- Valid Cases (T1-T6) ----------------------------------------------

#[test]
fn test_t1_system_info() {
    let source = "investigation \"X\" {\n    sys = System.info()\n}";
    let prog = parse_valid(source);
    assert_eq!(prog.investigation.name.value, "X");
    assert_eq!(prog.investigation.body.len(), 1);
}

#[test]
fn test_t2_process_collect() {
    let source = "investigation \"X\" {\n    p = Process.collect()\n}";
    let prog = parse_valid(source);
    assert_eq!(prog.investigation.name.value, "X");
    assert_eq!(prog.investigation.body.len(), 1);
}

#[test]
fn test_t3_process_collect_and_filter() {
    let source = "investigation \"X\" {\n    p = Process.collect()\n    s = p.filter(memory > 500MB)\n}";
    let prog = parse_valid(source);
    assert_eq!(prog.investigation.name.value, "X");
    assert_eq!(prog.investigation.body.len(), 2);
}

#[test]
fn test_t4_filter_with_and() {
    let source = "investigation \"X\" {\n    p = Process.collect()\n    s = p.filter(name == \"a.exe\" and memory > 500MB)\n}";
    let prog = parse_valid(source);
    assert_eq!(prog.investigation.name.value, "X");
    assert_eq!(prog.investigation.body.len(), 2);
}

#[test]
fn test_t5_network_connections_and_listeners() {
    let source = "investigation \"X\" {\n    c = Network.connections()\n    l = Network.listeners()\n}";
    let prog = parse_valid(source);
    assert_eq!(prog.investigation.name.value, "X");
    assert_eq!(prog.investigation.body.len(), 2);
}

#[test]
fn test_t6_evidence_preserve_and_verify() {
    let source = "investigation \"X\" {\n    p = Process.collect()\n    e = Evidence.preserve(p)\n    ok = Evidence.verify(e)\n}";
    let prog = parse_valid(source);
    assert_eq!(prog.investigation.name.value, "X");
    assert_eq!(prog.investigation.body.len(), 3);
}

// -- Invalid Cases (T7-T13) --------------------------------------------

#[test]
fn test_t7_reject_no_investigation_wrapper() {
    let source = "s = Process.collect()";
    assert_parser_rejects(source);
}

#[test]
fn test_t8_reject_unclosed_call() {
    let source = "investigation \"X\" {\n    s = Process.collect(\n}";
    assert_parser_rejects(source);
}

#[test]
fn test_t9_reject_incomplete_filter() {
    let source = "investigation \"X\" {\n    s = processes.filter(memory >)\n}";
    assert_parser_rejects(source);
}

#[test]
fn test_t10_reject_invalid_assignment_target() {
    let source = "investigation \"X\" {\n    5 = Process.collect()\n}";
    assert_parser_rejects(source);
}

#[test]
fn test_t11_reject_unsupported_operator() {
    let source = "investigation \"X\" {\n    bad = p + 5\n}";
    let mut lexer = Lexer::new(source);
    match lexer.tokenize() {
        Ok(tokens) => {
            let mut parser = Parser::new(tokens);
            assert!(parser.parse().is_err(), "T11 should be rejected by parser");
        }
        Err(e) => {
            assert!(e.message.contains('+') || e.message.contains("unrecognized"));
        }
    }
}

#[test]
fn test_t12_reject_unterminated_string() {
    let source = "investigation \"X\" {\n    s = \"unterminated\n}";
    assert_lexer_rejects(source);
}

#[test]
fn test_t13_reject_illegal_character() {
    let source = "investigation \"X\" {\n    s = Process.collect() @\n}";
    assert_lexer_rejects(source);
}

// ── Day 7 Edge Case Tests ─────────────────────────────────────────────

#[test]
fn test_edge_process_filter_chained_multiple() {
    let source = r#"investigation "Chained Filters" {
    processes = Process.collect().filter(memory > 500MB).filter(pid != 0)
}"#;
    let prog = parse_valid(source);
    match &prog.investigation.body[0] {
        Statement::Assignment(a) => match &a.value {
            Expr::Filter(outer) => match outer.source.as_ref() {
                Expr::Filter(inner) => match inner.source.as_ref() {
                    Expr::Call(c) => assert_eq!(c.function.name, "collect"),
                    other => panic!("expected Call, got {:?}", other),
                },
                other => panic!("expected inner Filter, got {:?}", other),
            },
            other => panic!("expected outer Filter, got {:?}", other),
        },
        other => panic!("expected Assignment, got {:?}", other),
    }
}

#[test]
fn test_edge_process_filter_multiline_condition() {
    let source = r#"investigation "Multiline Filter" {
    suspicious = processes.filter(
        (name == "powershell.exe" or name == "cmd.exe")
        and memory > 500MB
    )
}"#;
    let prog = parse_valid(source);
    assert_eq!(prog.investigation.name.value, "Multiline Filter");
    assert_eq!(prog.investigation.body.len(), 1);
}

#[test]
fn test_edge_process_filter_escaped_path() {
    let source = r#"investigation "Escaped Path" {
    suspicious = processes.filter(path == "C:\\Windows\\System32")
}"#;
    let prog = parse_valid(source);
    match &prog.investigation.body[0] {
        Statement::Assignment(a) => match &a.value {
            Expr::Filter(f) => match f.condition.as_ref() {
                Expr::Comparison(c) => match c.right.as_ref() {
                    Expr::Literal(Literal::String(s)) => {
                        assert_eq!(s.value, r#"C:\\Windows\\System32"#);
                    }
                    other => panic!("expected Literal::String, got {:?}", other),
                },
                other => panic!("expected Comparison, got {:?}", other),
            },
            other => panic!("expected Filter, got {:?}", other),
        },
        other => panic!("expected Assignment, got {:?}", other),
    }
}

#[test]
fn test_edge_process_filter_not_less_equal() {
    let source = r#"investigation "Not and LessEqual" {
    filtered = processes.filter(not (memory <= 500MB))
}"#;
    let prog = parse_valid(source);
    assert_eq!(prog.investigation.name.value, "Not and LessEqual");
    match &prog.investigation.body[0] {
        Statement::Assignment(a) => match &a.value {
            Expr::Filter(f) => match f.condition.as_ref() {
                Expr::UnaryLogical(u) => {
                    assert_eq!(u.operator, LogicalUnaryOp::Not);
                    match u.expr.as_ref() {
                        Expr::Comparison(c) => assert_eq!(c.operator, ComparisonOp::LessEqual),
                        other => panic!("expected Comparison, got {:?}", other),
                    }
                }
                other => panic!("expected UnaryLogical, got {:?}", other),
            },
            other => panic!("expected Filter, got {:?}", other),
        },
        other => panic!("expected Assignment, got {:?}", other),
    }
}

#[test]
fn test_edge_network_connection_set_typed_assignment() {
    let source = r#"investigation "Network Types" {
    conns: NetworkConnectionSet = Network.connections()
}"#;
    let prog = parse_valid(source);
    match &prog.investigation.body[0] {
        Statement::Assignment(a) => {
            assert_eq!(a.target.name, "conns");
            assert_eq!(a.type_annotation.as_ref().unwrap().name, "NetworkConnectionSet");
        }
        other => panic!("expected Assignment, got {:?}", other),
    }
}

#[test]
fn test_edge_reject_filter_zero_arguments() {
    let source = r#"investigation "Bad Filter" {
    suspicious = processes.filter()
}"#;
    assert_parser_rejects(source);
}