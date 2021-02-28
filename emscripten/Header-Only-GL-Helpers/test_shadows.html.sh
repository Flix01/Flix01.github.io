#!/bin/bash
# MOST IMPORTANT LINE OF THIS SCRIPT:
FILE_NAME=test_shadows.html
# ===================================
source /mnt/93a73f20-dd00-4964-a118-fabad96ec1bd/Repositories/emsdk/env.sh
# Tweakable
PORT_ID=6931
#PORT_ID=8080
#
set -m	# Enables job control [needed by fg command at the end]
# Check and close port
MYPID=`lsof -i :$PORT_ID | sed -n '2p' | awk '{print $2}'`
if [ -n "${MYPID}" ]; then
    #echo $MYPID
	kill $MYPID
fi
# Execute html
#emrun --kill_start --kill_exit miniobjviewer.html
python3 -m http.server $PORT_ID &	# Trailing '&' makes it run in the background, so that it's non-blocking
xdg-open http://localhost:$PORT_ID/$FILE_NAME	# Run the browser
# Wait 5 seconds
sleep 5
# Check and close port
MYPID=`lsof -i :$PORT_ID | sed -n '2p' | awk '{print $2}'`
if [ -n "${MYPID}" ]; then
    #echo $MYPID
	kill $MYPID
fi
# Switch back to foreground process
fg	# Not sure if this is necessary, because we have closed the port from the background process
# Check and close port
#echo Press any key to quit.
#read key



