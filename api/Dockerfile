FROM node:16.15.0-alpine
LABEL authors="SharaafNazeer"

# Create a non-root user with appropriate permissions
RUN addgroup -g 1001 myuser && \
    adduser -D -u 1001 -G myuser myuser
USER myuser

WORKDIR /app
COPY ./package.json ./

RUN npm install
COPY . .

# Create a directory
RUN mkdir /app/uploads
# Set permissions for the uploads directory
RUN chown -R myuser:myuser uploads

EXPOSE 5000
CMD ["npm", "run", "start"]