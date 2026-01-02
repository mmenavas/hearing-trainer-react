# ROADMAP:

## Status:
The app has been harden and optimized. The dependencies have been updated. Next steps are making aesthetic changes and supporting game configuration to make the game more challenging.

## Features Whishlist:
- ~Add a score system.~ Done! Added a mistake counter instead.
- Add difficulty levels.
- Guess note sequences.
- Choose instrument.
- Choose key or go chromatic.
- Provide ability to record melodies.

## Improvements
- ~Disable wildcard note when all notes are guessed correctly.~ Done!
- ~Prevent audio files from being downloaded every time notes are clicked on.~ Done! Though, when browser caching is disabled, sometimes audio files show up on the Network tab as if they were downloaded but there's no recognizable pattern that explains why.
- ~Prevent pressing buttons while a note is playing or stop the current note before another note is played.~ Not needed. It's okay if notes are played in parallel.
- ~Back button needs to indicate more clearly that pressing that button exits the current game.~ There's no back button yet.
- ~Disable notes until the wildcard note is heard.~ Won't do. The user is responsible for listening to the note before making a guess.
