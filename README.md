# 🎬 Movie Quotes App

A full-stack React application for sharing and discovering famous movie quotes!

## 🌟 Live Demo

Check out the live application: [https://movie-quotes-xi.vercel.app/](https://movie-quotes-xi.vercel.app/)

## 📱 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Add Quotes** - Easily add your favorite movie quotes
- **Genre Filtering** - Filter quotes by movie genre
- **Interactive Interface** - Modern and user-friendly design
- **Real-time Updates** - Quotes appear immediately after adding

## 🛠️ Technologies Used

- **Frontend:** React 18.2.0
- **Styling:** Vanilla CSS (fully responsive)
- **Backend:** Supabase
- **Database:** PostgreSQL (via Supabase)
- **Icons:** FontAwesome & React Icons
- **Deployment:** Vercel

## 🎯 Functionality

### 📝 Adding Quotes

- Enter quote text (up to 200 characters)
- Add source URL (must be valid)
- Select movie genre
- Enter actor name
- Add character name from the movie
- Enter movie title

### 🎭 Supported Genres

- Thriller
- Fantasy
- Action
- Adventure
- Drama
- Crime
- Romance
- War
- Comedy

### 📱 Responsive Design

- **Desktop:** Full functionality with sidebar
- **Tablet:** Adapted layout with reorganized elements
- **Mobile:** Optimized for touch interface

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository:**

```bash
git clone <your-repository-url>
cd movie-quotes
```

2. **Install dependencies:**

```bash
npm install
```

3. **Configure Supabase:**

   - Create a new project on [Supabase](https://supabase.com)
   - Update `supabase.js` file with your credentials
   - Run the SQL code to create the table (see below)

4. **Start the application:**

```bash
npm start
```

The application will be available at `http://localhost:3000`

## 📊 Database Setup

### SQL code for creating the table:

```sql
-- Create quotes table
CREATE TABLE quotes (
  id BIGSERIAL PRIMARY KEY,
  text TEXT NOT NULL,
  source TEXT,
  genre TEXT NOT NULL,
  actor TEXT,
  "characterInTheMovie" TEXT,
  "nameOfTheMovie" TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Disable Row Level Security for public use
ALTER TABLE quotes DISABLE ROW LEVEL SECURITY;
```

### Adding sample data:

```sql
INSERT INTO quotes (text, source, genre, actor, "characterInTheMovie", "nameOfTheMovie")
VALUES
  ('I''ll be back', 'https://www.imdb.com/title/tt0088247/', 'action', 'Arnold Schwarzenegger', 'Terminator', 'The Terminator'),
  ('May the Force be with you', 'https://www.imdb.com/title/tt0076759/', 'fantasy', 'Alec Guinness', 'Obi-Wan Kenobi', 'Star Wars'),
  ('You talking to me?', 'https://www.imdb.com/title/tt0075314/', 'drama', 'Robert De Niro', 'Travis Bickle', 'Taxi Driver'),
  ('Why so serious?', 'https://www.imdb.com/title/tt0468569/', 'crime', 'Heath Ledger', 'Joker', 'The Dark Knight'),
  ('Here''s looking at you, kid', 'https://www.imdb.com/title/tt0034583/', 'romance', 'Humphrey Bogart', 'Rick Blaine', 'Casablanca'),
  ('Houston, we have a problem', 'https://www.imdb.com/title/tt0112384/', 'drama', 'Tom Hanks', 'Jim Lovell', 'Apollo 13'),
  ('Nobody puts Baby in a corner', 'https://www.imdb.com/title/tt0092890/', 'romance', 'Patrick Swayze', 'Johnny Castle', 'Dirty Dancing'),
  ('I''m gonna make him an offer he can''t refuse', 'https://www.imdb.com/title/tt0068646/', 'crime', 'Marlon Brando', 'Don Vito Corleone', 'The Godfather'),
  ('Life is like a box of chocolates', 'https://www.imdb.com/title/tt0109830/', 'drama', 'Tom Hanks', 'Forrest Gump', 'Forrest Gump');
```

## 📱 Responsive Design

### Breakpoints:

- **Desktop:** > 900px - Full sidebar layout
- **Tablet:** 600px - 900px - Reorganized grid layout
- **Mobile:** < 600px - Stacked layout optimized for touch

### Key responsive features:

- Flexible grid system
- Touch-friendly buttons
- Mobile-optimized forms
- Adaptive font sizes
- Smart text wrapping

## 🛠️ Available Scripts

In the project directory, you can run:

```bash
# Run the app in development mode
npm start

# Build the app for production
npm run build

# Run the test suite
npm test

# Eject from Create React App (WARNING: one-way operation!)
npm run eject
```

## 📁 Project Structure

```
movie-quotes/
├── public/
│   ├── movie.png           # App logo
│   └── index.html
├── src/
│   ├── components/
│   │   ├── GenreFilter.js  # Genre filtering component
│   │   ├── Header.js       # Header component
│   │   ├── Loader.js       # Loading animation
│   │   ├── NewQuoteForm.js # Add quote form
│   │   ├── PageError.js    # Error page component
│   │   └── QuoteList.js    # Quotes list component
│   ├── App.js              # Main application component
│   ├── App.css             # Global styles (responsive)
│   ├── index.js            # Application entry point
│   └── supabase.js         # Supabase configuration
├── package.json
└── README.md
```

## 🎨 Design & Styling

- **Primary Color:** Dark brown (#292524)
- **Text Color:** Cream white (#fafaf9)
- **Accent Color:** Light blue (#3b82f6)
- **Font Families:**
  - "Sono" - for body text
  - "Coiny" - for headings and buttons

## 🔧 Configuration

### Supabase Configuration

Update the `supabase.js` file with your project credentials:

```javascript
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("YOUR_SUPABASE_URL", "YOUR_SUPABASE_ANON_KEY");

export default supabase;
```

## 📝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Support

If you have any questions or run into issues, please open an issue on GitHub.

## 🙏 Acknowledgments

- Built with Create React App
- Database powered by Supabase
- Icons from FontAwesome and React Icons
- Deployed on Vercel
