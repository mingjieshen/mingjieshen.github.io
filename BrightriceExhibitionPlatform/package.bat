call mvn clean package install > package.log 2>&1

move control\target\control-full.zip target/BrightriceExhibitionPlatform-full.zip >nul 2>nul

echo package success...
pause