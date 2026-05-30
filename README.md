# EpicStopSharingData
This is a quick vibe-coded javascript you can run in your browser's developer console to automate the clicking of "stop sharing data" for games listed in the account.

For some reason I think this is/was the default for epic games, so if you've been claiming free games on Epic your Epic data is likely being shared with all those games' publishers.

## What it Does
This script will automatically click "Show More" on the connections page to list all possible games connections. It then expands each item one by one, clicking "Stop Sharing Data" on the game and then the popup before moving onto the next one.

## Steps

1. Copy the code from "epicstopsharingdata.js"
2. Login to your Epic account in a browser (I use Firefox) and load this page: https://accounts.epicgames.com/account/connections
3. While viewing that page open the Developer Tools and open the 'Console' tab.
4. Paste the code into the console and press Enter. 
5. The script will automatically stop sharing data with all the games listed.

## Note

I did NOT test to see if this would remove a connection to Discord. I would imagine that it WOULD, because it is coded to specifically target the 'Stop sharing data' button. Games accounts like PSN, Xbox, and Steam use different terminology like 'Unlink' so they should be skipped.