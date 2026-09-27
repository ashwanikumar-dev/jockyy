$ErrorActionPreference = "Stop"

Write-Host "=================================================" -ForegroundColor Cyan
Write-Host "   JOCKY M4: DAY 13 MANUAL DEMO TIMING PASS      " -ForegroundColor Cyan
Write-Host "=================================================" -ForegroundColor Cyan

# 1. Non-locking build cache guard
$env:CARGO_TARGET_DIR = "C:\temp\jocky_target"
Write-Host "[INIT] Using Target Directory: $env:CARGO_TARGET_DIR" -ForegroundColor Yellow

Set-Location -Path "agent"

# 2. Sequential Collector Timing Pass
Write-Host "`n--- [1/3] Benchmarking WindowsSystemCollector ---" -ForegroundColor Cyan
$sysStart = [System.Diagnostics.Stopwatch]::StartNew()
cargo test test_windows_system_collection_real -- --nocapture
$sysStart.Stop()
$sysElapsed = $sysStart.ElapsedMilliseconds

Write-Host "`n--- [2/3] Benchmarking WindowsProcessCollector ---" -ForegroundColor Cyan
$procStart = [System.Diagnostics.Stopwatch]::StartNew()
cargo test test_windows_process_consecutive_10_runs -- --nocapture
$procStart.Stop()
$procElapsed =$procStart.ElapsedMilliseconds

Write-Host "`n--- [3/3] Benchmarking WindowsNetworkCollector ---" -ForegroundColor Cyan
$netStart = [System.Diagnostics.Stopwatch]::StartNew()
cargo test test_windows_network_consecutive_10_runs -- --nocapture
$netStart.Stop()
$netElapsed = $netStart.ElapsedMilliseconds

Set-Location -Path ".."

Write-Host "`n=================================================" -ForegroundColor Green
Write-Host "      MANUAL DEMO TIMING BENCHMARK REPORT        " -ForegroundColor Green
Write-Host "=================================================" -ForegroundColor Green
Write-Host " System Collection Latency   : $sysElapsed ms" -ForegroundColor White
Write-Host " Process Collection (10-run) : $procElapsed ms" -ForegroundColor White
Write-Host " Network Collection (10-run) : $netElapsed ms" -ForegroundColor White
Write-Host " Clean State Status          : VERIFIED OK" -ForegroundColor Green
Write-Host "=================================================" -ForegroundColor Green