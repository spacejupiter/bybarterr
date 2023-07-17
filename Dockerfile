FROM node:18-alpine
WORKDIR /BYBARTER
COPY . .
RUN npm install
CMD ["npm", "start"]
EXPOSE 3000
