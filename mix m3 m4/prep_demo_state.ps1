$ErrorActionPreference = "Stop"

Write-Host "=================================================" -ForegroundColor Cyan
Write-Host "   JOCKY M4: DAY 12 DEMO MACHINE STATE PREP      " -ForegroundColor Cyan
Write-Host "=================================================" -ForegroundColor Cyan

# 1. Ensure target build directory is clean
$targetDir = "C:\temp\jocky_target"
Write-Host "`n[STEP 1/3] Resetting clean build target directory at $targetDir..." -ForegroundColor Yellow
if (Test-Path $targetDir) {
    Remove-Item -Path $targetDir -Recurse -Force -ErrorAction SilentlyContinue
}
New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
$env:CARGO_TARGET_DIR = $targetDir

# 2. Compile release binary to verify clean build
Write-Host "`n[STEP 2/3] Validating clean compilation of agent binary..." -ForegroundColor Yellow
Set-Location -Path "agent"
cargo check
if ($LASTEXITCODE -ne 0) {
    Write-Host "[FAIL] Clean build validation failed!" -ForegroundColor Red
    Set-Location -Path ".."
    exit 1
}

# 3. Execute collector regression suite
Write-Host "`n[STEP 3/3] Running verification suite on clean state..." -ForegroundColor Yellow
cargo test -- --nocapture
if ($LASTEXITCODE -ne 0) {
    Write-Host "[FAIL] Verification suite failed on clean state!" -ForegroundColor Red
    Set-Location -Path ".."
    exit 1
}

Set-Location -Path ".."

Write-Host "`n=================================================" -ForegroundColor Green
Write-Host " [SUCCESS] Machine state is clean and verified!  " -ForegroundColor Green
Write-Host " Ready for VM snapshot / demo execution.         " -ForegroundColor Green
Write-Host "=================================================" -ForegroundColor Green