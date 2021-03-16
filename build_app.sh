#!bin/bash

source venv/bin/activate
sleep 1
source priv/.env
sleep 1
rm -rf backend/build
mv frontend/build backend/build
cd backend
echo yes | python manage.py collectstatic
sleep 2
sudo systemctl restart nginx
sleep 2
sudo systemctl restart gunicorn.service
sleep 2
