FROM node:14.0.0  # Still widely used but old enough for vuln testing

WORKDIR /app

# Install specific vulnerable version of lodash
COPY package.json .
RUN npm install

COPY app.js .

EXPOSE 3000
CMD ["node", "app.js"]
