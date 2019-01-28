FROM node:9.3.0
COPY . .
EXPOSE 80


#https://medium.com/ai2-blog/dockerizing-a-react-application-3563688a2378
# Build for production.
RUN npm run build --production

# Install `serve` to run the application.
RUN npm install -g serve

# Set the command to start the node server.
CMD serve -s build
