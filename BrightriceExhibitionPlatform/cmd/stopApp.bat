@echo off & setlocal EnableDelayedExpansion

set port=0
set pid=0

for /f "tokens=2" %%b in ('findstr port: config\application-Dev.yml') do (
    set port=%%b
    for /f "tokens=5" %%m in ('netstat -aon ^| findstr ":%%b"') do (
        set pid=%%m
	    if "!pid!"=="0" (
            echo !port! is not used
        ) else (
            echo  !port! related process is killed!
            taskkill /f /pid !pid! >nul 2>nul
        )
        set pid=0
    )

)

pause