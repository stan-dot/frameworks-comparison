FROM registry.hub.docker.com/library/node:21-bookworm as base

ENV APP_DIR /app

COPY . ${APP_DIR}
WORKDIR ${APP_DIR}

# RUN npm install --legacy-peer-deps .
# RUN npm run build 

# CMD ["npm", "run", "preview"]
CMD bash