FROM node:16.15.0-alpine
LABEL authors="Sharaaf Nazeer"

# Install Yarn
RUN apk add --no-cache curl && \
    curl -o- -L https://yarnpkg.com/install.sh | sh && \
    apk del curl

# Create a non-root user with appropriate permissions
RUN addgroup -g 1001 myuser && \
    adduser -D -u 1001 -G myuser myuser
USER myuser

WORKDIR /app

COPY ./package.json ./

COPY ./yarn.lock ./
COPY ./next.config.js ./
COPY ./next.config.js ./

COPY . .

# Set permissions for the app directory
USER root
RUN chown -R myuser:myuser /app

USER myuser

RUN yarn install

EXPOSE 3000
CMD ["yarn", "dev"]
