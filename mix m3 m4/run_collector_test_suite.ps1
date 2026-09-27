$ErrorActionPreference = "Stop"

Write-Host "=================================================" -ForegroundColor Cyan
Write-Host "   JOCKY M4: DAY 11 COLLECTOR TEST SUITE PASS    " -ForegroundColor Cyan
Write-Host "=================================================" -ForegroundColor Cyan

# 1. Environment Guard against OneDrive file locks
$env:CARGO_TARGET_DIR = "C:\temp\jocky_target"
Write-Host "[INIT] Using CARGO_TARGET_DIR: $env:CARGO_TARGET_DIR" -ForegroundColor Yellow

# Ensure we are inside the agent directory
if (Test-Path "agent") {
    Set-Location -Path "agent"
}

# 2. Run the 10-consecutive-iteration collector test suite
Write-Host "`n[RUN] Executing 10 runs per collector under unbuffered capture..." -ForegroundColor Cyan
$startTime = Get-Date

cargo test -- --nocapture

if ($LASTEXITCODE -eq 0) {
    $endTime = Get-Date
    $duration = ($endTime - $startTime).TotalSeconds
    Write-Host "`n=================================================" -ForegroundColor Green
    Write-Host " [PASS] Collector test suite completed successfully!" -ForegroundColor Green
    Write-Host " Total Execution Time: $([math]::Round($duration, 2)) seconds" -ForegroundColor Green
    Write-Host "=================================================" -ForegroundColor Green
} else {
    Write-Host "`n[FAIL] Collector test suite encountered errors!" -ForegroundColor Red
    exit 1
}

Set-Location -Path ".."
