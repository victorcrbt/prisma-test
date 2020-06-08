### RUNNING THE PROJECT

Copy the `.env.example` file and rename it to `.env`. Fill the database url with the info correponding to your database.

If need to use another database that is not PostgreSQL, change the provider in the `schema.prisma` file.

After that, run `npx prisma migrate up --experimental` to create the tables on the database, and then, run `yarn dev:server` or `npm run dev:server` to start the development server.

### Routes

#### POST /users

Create a new user on the database. You'll need to provide the following fields:

- `name` - Name of the user
- `email` - Email of the user
- `password` - Password of the user

#### POST /posts

Create a new post to the specified user. It has the following fields:

- `title` - Title of the post
- `content` - Content of the post
- `author_id` - ID of the user that will be assigned to that post

#### GET /posts

List all the posts on the database with the information of the author.
