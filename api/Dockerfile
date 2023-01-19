FROM node:18-alpine as builder

WORKDIR /app
COPY ./package* ./
COPY ./src ./
COPY ./tsconfig.json ./

RUN npm install && npm run build

FROM node:18-alpine

WORKDIR /app

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

COPY --from=builder /app/package* ./
COPY --from=builder /app/build ./

RUN NODE_ENV=production npm install --omitt

USER nodejs

EXPOSE 3001


CMD ["npm", "start"]