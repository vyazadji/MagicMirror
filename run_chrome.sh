while true; do
     chromium-browser --kiosk http://localhost:8080 --no-first-run --touch-events=enabled --fast --fast-start --disable-popup-blocking --disable-infobars --disable-session-crashed-bubble --disable-tab-switcher --disable-translate --enable-low-res-tiling --noerrdalogs 
     sleep 10s;
done
