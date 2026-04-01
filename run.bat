@echo off
echo =======================================================
echo     DocSecure Fraud Detection - Starting Project
echo =======================================================
echo.
echo Installing requirements...
pip install -r requirements.txt
if %errorlevel% neq 0 (
    echo [ERROR] Failed to install requirements.
    pause
    exit /b %errorlevel%
)
echo.
echo =======================================================
echo Starting the Flask API Server...
echo The model will take ~30-60 seconds to load.
echo Keep this window open. 
echo =======================================================
echo.
python app.py
pause
