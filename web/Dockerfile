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
RUN yarn install
COPY . .

RUN yarn build

# Set permissions for the .next directory
RUN chown -R myuser:myuser .next

EXPOSE 3000
CMD ["yarn", "run", "start"]
