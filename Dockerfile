FROM node
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
COPY start.sh /start.sh
RUN chmod +x /start.sh
EXPOSE 4100
CMD ["/start.sh"]
