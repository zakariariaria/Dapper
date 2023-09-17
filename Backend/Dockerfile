# Use an official Python runtime as a parent image
FROM python:3.11

# Set environment variables for MySQL
ENV MYSQL_HOST=mysql \
    MYSQL_USER=root \
    MYSQL_PASSWORD=password \
    MYSQL_DB=myappdb

# Install Poetry for managing Python dependencies
RUN pip install poetry

# Copy only the dependency files to leverage Docker cache
WORKDIR /app
COPY pyproject.toml /app/

# Install project dependencies using Poetry
RUN poetry config virtualenvs.create false && \
    poetry install --no-dev

# Copy the rest of the application code into the container
COPY . /app

# Expose the port Flask will run on
EXPOSE 8080

# Define environment variable to tell Flask to run in production mode
ENV FLASK_ENV=production

# Run your Flask application as the main process
CMD ["poetry", "run", "python", "app.py"]
