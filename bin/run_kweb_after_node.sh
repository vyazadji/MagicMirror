##
# Wait for starting MagicMirror server 
# and then open terminal and start kweb.
# Put in the ~/.config/lxsession/LXDE-pi/autostart
#
# @xset s off
# @xset -dpms
# @xset s noblank
# 
# lxterminal -e /home/pi/MagicMirror/bin/run_kweb_after_node.sh &
##


RUNNING=1 #1 - means server is not runned

echo 'Check if MagicMirror server was started'
while [ "${RUNNING}" -ne 0 ]; do
  #pm2 describe mm > /dev/null
  netstat -an |grep 8080 |grep LISTEN > /dev/null
  RUNNING=$?
  echo 'Wait for starting MagicMirror server ...'
  sleep 5
done
echo 'MagicMirror server is running ! Open browser...'

kweb3 -KJ localhost:8080
$SHELL
