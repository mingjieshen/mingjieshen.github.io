rd /s /q .\log >nul 2>nul
md log\ >nul 2>nul

java  -Dfile.encoding=utf-8 -jar lib\control.jar -Dspring.config.location=config\application-Dev.yml >> log\run.log  2>&1

pause